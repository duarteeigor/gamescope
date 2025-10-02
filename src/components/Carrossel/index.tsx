"use client"

import Image from "next/image"
import { useState} from "react"

import { Autoplay} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import Link from "next/link"

interface GameProps {
    id: number,
    name: string,
    background_image: string 
}

interface GameDataProps{
    data: GameProps[]
}

export default function Carrossel({data}: GameDataProps) {
    const [games, setGames] = useState<GameProps[]>(data)
    //NEM PRECISARIA DESSE USESTATE, PODERIA FAZER O MAP DIRETO COM O DATA

   
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
                                    <Link href={`/games/${item.id}`}>
                                        <button className="p-2 px-4 bg-[#B88B3D] rounded-md text-white cursor-pointer">Saiba mais</button>
                                    </Link>
                                    <button className="text-white bg-[#141415] p-2 rounded-md cursor-pointer">Adicionar a lista</button>
                                </div>
                            </div>

                            <div className="relative flex-1">
                                <Image
                                    src={item.background_image}
                                    fill
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