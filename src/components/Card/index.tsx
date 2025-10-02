"use client"

import Image from "next/image"
import Link from "next/link"

interface CardProps {
  id: number,
  image: string,
  title: string,
  gen: string,
  plat?: string,
  rating?: number
  lancamento?: string
}
export default function Card({ id,image, title, gen, plat, rating, lancamento }: CardProps) {
  return (
    <Link href={`/games/${id}`}>
      <div className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden w-64 hover:scale-105 transition-transform duration-300">
      <div className="relative flex flex-1 w-full  h-55">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col h-40  gap-3">
        <h3 className="text-white font-semibold text-lg line-clamp-2">{title}</h3>
        <div className="flex justify-between">
          <p className="text-white font-light text-sm">{gen}</p>
          <p className="text-white font-light text-sm">{plat}</p>
          
          {!plat && !lancamento && <p className="text-white font-light text-sm">{rating}</p>}
        </div>
        <p className="text-white font-light text-sm">{lancamento}</p>
      </div>
    </div>
    </Link>
  )
}