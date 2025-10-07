"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/logo.png"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isGamePage = pathname.startsWith(`/games/`)

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[100px] flex items-center z-50 ${
        isGamePage ? "bg-transparent" : "bg-[#121212]"
      }`}
    >
      <div className="max-w-7xl w-full flex items-center justify-between mx-auto px-4">
        <div className="relative  w-[180px] h-[50px]">
          <Link href="/">
          <Image
            src={logo}
            alt="Logo Game Scope"
            fill
            className="object-cover"
          />
        </Link>
        </div>

        <nav className="flex gap-6 text-amber-50">
          <Link href="/games" className="hover:opacity-80">
            Jogos
          </Link>
          <Link href="/lancamentos" className="hover:opacity-80">
            Lançamentos
          </Link>
        </nav>
      </div>
    </header>
  )
}
