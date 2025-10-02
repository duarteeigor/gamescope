import CardGames from "@/components/CardGames";
import Input from "@/components/Input";
import { searchGames } from "@/lib/rawg"

interface GameProps{
    id: number,
    background_image: string,
    name: string,
    added: number
    released: string,
    genres: [
        {
            name: string
        }
    ],
    short_screenshots: [
        {
            image: string
        }
    ]
}

export default async function SearchPage({ params: { name } }: { params: { name: string } }) {

    const response = await searchGames(name);
    const result = response
    console.log(result)

    return (
        <main className="max-w-7xl w-full mx-auto flex flex-col">
            <Input />

            <h2>Resultados da pesquisa:</h2>

            <div className="grid grid-cols-4 gap-8 auto-rows-min">
                {result && result.map((item: GameProps) => {
                    const date = new Date(item.released)
                    const dateFormated = date.toLocaleDateString("pt-br")
                    return (

                        <CardGames 
                            key={item.id} 
                            name={item?.name ?? "none"} 
                            background_image={item?.background_image} 
                            released={dateFormated} 
                            added={item?.added} 
                            genres={item?.genres[0]?.name ?? "none"} 
                            short_screenshots={item?.short_screenshots} 
                        />

                    )
                })}
            </div>


        </main>
    )
}