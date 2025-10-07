import { getGameById } from "@/lib/rawg"
import { Metadata } from "next"
import Image from "next/image"

interface GameDetailProps {
  id: number
  name: string
  description: string
  background_image: string
  rating?: number
  platforms?: Array<{
    platform: {
      id: number,
      name: string
    }
  }>
  released?: string
  genres?: Array<{ name: string }>
}

export async function generateMetadata({params}: {params: {id:string | number}}): Promise<Metadata> {
    const {id} = params
    try {
      const response = await getGameById(id)

      return{
        title: response.name,
        description: `${response.description.slice(0, 100)}...`,
        openGraph: {
          title: response.name,
          images: response.background_image,
          description: response.description
        }
      }
    } catch (error) {
      return {
        title: "Game Scope - Site completo de consulta de jogos"
      }
    }

}

export default async function GameDetail({params}: {params: { id: string | number }}) {
  const { id } = params
  const response = await getGameById(id)
  const {
    description,
    name,
    background_image,
    rating = 0,
    platforms,
    released = '',
    genres = []
  } = response as GameDetailProps
 

  return (
    <div className="h-full w-full relative flex flex-col bg-[#121212] text-gray-100">
      {/* Hero / Capa do jogo*/}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <Image
          src={background_image}
          alt={name}
          priority
          fill
          className="object-cover brightness-60"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-[#121212]" />

        
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 max-w-7xl mx-auto w-full z-10"> 
          {/* Breadcrumbs */}
          <nav className="text-xs md:text-sm text-gray-300 mb-6 flex items-center space-x-1"> 
            <span className="hover:text-white transition-colors">Home</span>
            <span className="mx-1">/</span>
            <span className="hover:text-white transition-colors">Games</span>
            <span className="mx-1">/</span>
            <span className="text-white font-medium">{name}</span>
          </nav>

          {/* Título principal*/}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 drop-shadow-lg text-left">
            {name}
          </h1>

          {/* Meta info*/}
          <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-200">

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>{rating.toFixed(1)}</span>
            </div>

            {/* Released */}
            {released && (
              <span>{new Date(released).toLocaleDateString("pt-BR")}</span>
            )}

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre.name}
                  className="bg-black/30 px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Platforms -*/}
          <div className="flex flex-wrap gap-2 mt-4">
            {platforms &&
              platforms.slice(0, 3).map(({ platform: { id, name } }) => (
                <span
                  key={id}
                  className="bg-black/30 px-3 py-1 rounded-full"
                >
                  {name}
                </span>
              ))}
          </div>
        </div>
      </div>


      {/* Seção principal de conteúdo*/}
      <main className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 relative z-10">

        {/* About */}
        <section>
          <div className="mb-12 pt-8 md:pt-12">
            <h2 className="text-3xl font-bold mb-6 text-white border-b border-gray-700 pb-2">About</h2>
            <div
              className="prose prose-invert prose-lg max-w-none leading-relaxed text-gray-200"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

        </section>
      </main>
    </div>
  )
}
