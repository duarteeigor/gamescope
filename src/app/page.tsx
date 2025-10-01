import Card from "@/components/Card";
import Carrossel from "@/components/Carrossel"

interface ItemProps {
  id: number
  name: string,
  background_image: string,
  platforms: [
    {
      platform: {
        name: string
      }
    }
  ],
  genres: [
    {
      name: string
    }
  ],
  rating: number,
  released: string

}

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/games?ordering=-added&platforms=187,1")
  const data = await response.json()
  const result = await data.splice(0, 5)

  const responseLancamentos = await fetch("http://localhost:3000/api/games?ordering=-released&platforms=187,1")
  const dataLanc = await responseLancamentos.json()
  const resultLanc = await dataLanc.splice(1, 5)

  console.log(resultLanc[0])
  return (
    <div className="bg-[#121212] h-[calc(100dvh-100px)] w-full flex flex-col">
      <div className="max-w-7xl mx-auto flex flex-col pb-10">
        <Carrossel />
        <h2 className="mt-20 text-4xl text-white font-bold">Jogos populares</h2>

        <div className="flex gap-6 mt-8">
          {result && result.map((item: ItemProps) => (

            <Card key={item.id} image={item.background_image} title={item.name} gen={item.genres[0].name} rating={item.rating} />

          ))}
        </div>

        <h2 className="text-white text-4xl font-bold mt-20">Vem aí...</h2>

        <div className="flex gap-6 mt-8">
          {resultLanc && resultLanc.map((item: ItemProps) => {
            const date = new Date(item.released)
            const dateFormated = date.toLocaleDateString("pt-br")

            return (
              <Card key={item.id} image={item.background_image} title={item.name} gen={item.genres[0].name} plat={item.platforms[0].platform.name} lancamento={dateFormated} />
            )

          })}
        </div>
      </div>
    </div>
  );
}
