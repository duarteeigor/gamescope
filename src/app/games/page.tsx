import CardGames from "@/components/CardGames";
import Input from "@/components/Input";
import {getGames} from "@/lib/rawg"

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

export default async function AllGames(){
    const fetch = await getGames("-metacritic&exclude_additions=true", "187,186");
    const data = fetch
    
    return(
        <main className="w-full">
            <div className="max-w-7xl w-full mx-auto flex flex-col px-4">

                <Input  />
                <h1 className="text-4xl text-white font-bold mt-20 mb-20">Todos os jogos</h1>

                <div className="grid grid-cols-4 gap-8 auto-rows-min">
                    {data && data.map((item: GameProps)=>{
                    const date = new Date(item.released)
                    const dateFormated = date.toLocaleDateString("pt-br")
                    return(
                        
                        <CardGames  
                            key={item.id}
                            id={item.id}
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
            </div>
        </main>
    )
}