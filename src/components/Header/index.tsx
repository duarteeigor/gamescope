import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/logo.png"

export default function Header(){
    return(
        <header className="bg-[#121212] h-25 w-full flex justify-between items-center text-amber-50">
            <div className="max-w-7xl w-full flex items-center justify-between mx-auto">
                <Link  href={'/'}>
                    <Image src={logo} width={220} height={50} alt="Logo Game Scope" className="object-left object-contain"/>
                </Link>

            <nav className="flex gap-6">
                <Link href={'/jogos'} className="hover:opacity-80">Jogos</Link>
                <Link href={'/lancamentos'} className="hover:opacity-80">Lançamentos</Link>
            </nav>
            </div>
        </header>
    )
}