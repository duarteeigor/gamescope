import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";


export default function Profile() {
    return (
        <div className="max-w-7xl w-full h-[calc(100dvh-100px)] pt-[100px] z-20  mx-auto">
            <div className="relative w-full flex flex-col sm:flex-row justify-center sm:justify-between">
                <section className=" flex flex-col sm:flex-row gap-6 items-center">
                    <div className="relative w-[200px] h-[200px]">
                        <Image
                            src={`https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg`}
                            alt=""
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <p className="text-2xl font-medium text-white">Nome usuario</p>
                </section>

                <section className="sm:absolute right-0 top-3 sm:mt-0 flex  items-center  justify-center mt-6 gap-5 text-white">
                    <button className="bg-[#2A2A2A] p-2 rounded-md hover:bg-[#B88B3D] hover:text-black transition-colors cursor-pointer">
                        Configuração
                    </button>

                    <button className="p-2 rounded-md bg-[#2A2A2A] hover:bg-[#B88B3D] transition-colors">
                        <FaShareAlt size={22} className="text-white hover:text-black transition-colors" />
                    </button>
                </section>
            </div>
            <div className="bg-[#2A2A2A] h-px w-full mt-20" />
        </div>
    )
}