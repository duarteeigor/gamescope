"use client"

import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"

interface CardGameProps {
  id: number,
  background_image: string
  name: string
  added: number
  released: string
  genres: string
  short_screenshots: { image: string }[]
}

export default function CardGames({
  id,
  background_image,
  name,
  added,
  released,
  genres,
  short_screenshots
}: CardGameProps) {
  const swiperRef = useRef<any>(null)

  // Troca de slide conforme posição do mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!swiperRef.current) return
    const swiper = swiperRef.current.swiper
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = x / rect.width
    const index = Math.floor(percent * short_screenshots.length)
    swiper.slideTo(index)
  }

  // Volta para o primeiro slide ao sair do hover
  const handleMouseLeave = () => {
    if (!swiperRef.current) return
    const swiper = swiperRef.current.swiper
    swiper.slideTo(0)
  }

  return (
    <div className="relative w-[300px] h-[380px] overflow-visible">
      <Link href={`/games/${id}`}>
        <div
        className="group relative w-full h-full bg-[#1E1E1E] rounded-t-2xl rounded-md transition-transform duration-200 transform-gpu origin-top hover:scale-105 hover:z-40 hover:shadow-2xl"
        onMouseLeave={handleMouseLeave}
      >

        {/* Carrossel controlado pelo mouse */}
        <div
          className="relative w-full h-56"
          onMouseMove={handleMouseMove}
        >
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ type: "bullets" }}
            allowTouchMove={false}
            className="h-full w-full swiper-bullets-hover"
          >
            {short_screenshots?.map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  className="object-cover rounded-t-2xl"
                  src={item.image}
                  fill
                  alt={`screenshot ${i}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Conteúdo visível sempre */}
        <div className="px-4 pt-4 pb-5">
          <h3 className="text-white text-3xl font-bold mb-1 line-clamp-2">{name}</h3>
          <span className="text-white text-sm bg-[#2A2A2A] inline-block rounded-md px-3 py-1">
            + {added}
          </span>
        </div>

        {/* Informações extras */}
        <div className="bg-[#1E1E1E] p-4 rounded-md shadow-lg opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-20">
          <div className="text-sm flex flex-col gap-2">
            <div className="text-[#484848] border-b border-[#484848] pb-2 flex justify-between">
              <span>Data de lançamento:</span>
              <p className="text-white ml-2">{released}</p>
            </div>
            <div className="text-[#484848] flex justify-between">
              <span>Gênero:</span>
              <p className="text-white ml-2">{genres}</p>
            </div>
            <button className="mt-2 bg-[#2A2A2A] text-white text-sm px-4 py-2 rounded-md hover:text-[#B88B3D] transition-colors">
              Adicionar à biblioteca
            </button>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}
