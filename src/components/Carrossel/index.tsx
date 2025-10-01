"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

import { Autoplay} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"

interface GameProps {
    id: number,
    name: string,
    background_image: string
}

export default function Carrossel() {
    const [games, setGames] = useState<GameProps[]>()

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch("/api/games")
                const data = await res.json()

                setGames(data)



            } catch (error) {
                console.error(error)
            }

        }
        getData()
    }, [])
    return (
        <div className="flex max-w-7xl w-full h-[50dvh] mx-auto">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
            >
                {games && games.map((item) => (

                    <SwiperSlide key={item.id}>
                        <div className="flex w-full h-full">
                            
                            <div className="flex flex-1 flex-col justify-center gap-4 px-4 ">
                                <h1 className="text-5xl font-bold text-white">{item.name}</h1>
                                <span className="text-white px-1 font-extralight">explode o jogo dasomdowa ....</span>

                                <div className="flex items-center gap-2">
                                    <button className="p-2 px-4 bg-[#B88B3D] rounded-md text-white cursor-pointer">Saiba mais</button>
                                    <button className="text-white bg-[#141415] p-2 rounded-md cursor-pointer">Adicionar a lista</button>
                                </div>
                            </div>

                            <div className="flex-1">
                                <Image
                                    src={item.background_image}
                                    height={500}
                                    width={500}
                                    className="object-cover h-full rounded-2xl"
                                    alt="game image"
                                    priority
                                    quality={100}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

{/* <div key={item.id}>
//                     <div className="flex-1">
//                         <h1>{item.name}</h1>
//                         <span>explode o jogo dasomdowa ....</span>

//                         <div className="flex gap-2">
//                             <button>Saiba mais</button>
//                             <button>Adicionar a lista</button>
//                         </div>
//                     </div>

//                     <div className="flex-1">
//                         <Image src={item.background_image} width={300} height={300} className="w-full" alt="" />
//                     </div>
//                 </div> */}