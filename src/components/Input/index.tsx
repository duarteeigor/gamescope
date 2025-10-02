"use client"
import { useRouter } from "next/navigation";

import { type ChangeEvent, FormEvent, useState } from "react"

import {FiSearch} from "react-icons/fi"

export default function Input(){
    const [input, setInput] = useState("")
    const router = useRouter()

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        
        if(input === "") return
        router.push(`/games/search/${input}`)

    }
    return(
        <form onSubmit={handleSubmit} className="max-w-7xl w-full flex">
            <div className="w-full max-w-7xl flex items-center relative">
                <input
                className="w-full rounded-full bg-[#1E1E1E] p-4 text-white outline-none" 
                placeholder="Digite algo..."
                type="text"
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>)=> setInput(e.target.value)}  
            />
            <button className="p-2 cursor-pointer absolute right-4 hover:scale-105" type="submit"><FiSearch  size={28} color="#FFF"/></button>
            </div>

        </form>
    )
}