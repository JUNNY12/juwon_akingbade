"use client"
import Image from "next/image"
import { useTheme } from "@/hooks/useTheme"

type ChildrenProps = {
    children:React.ReactNode
}

export default function BlogContainer({children}:ChildrenProps) {
    const {darkMode} = useTheme()

    return (
        <section className={`${darkMode? 'bg-gray-800 text-white' :'bg-white text-gray-800'} 
        min-h-screen pb-12 pt-28 px-28 tabletL:px-6
        transition duration-500 ease-in-out`}>
            <div className="flex items-center tabletS:flex-col tabletS:justify-center">
            <Image
                className="  rounded-full tabletS:mb-4 me-4 tabletS:me-0"
                src="/JUNNY.jpg"
                width={100}
                height={100}
                alt="Junny"
                priority={true}
                title="Juwon Akingbade"
            />
            <div>
                <p className="text-xl mobileXL:text-lg">
                    Written by Juwon Akingbade, a 
                    Frontend Engineer specializing in React/Next Js,
                    and TypeScript. Residing in Lagos State, Nigeria. 
                        <span className="border-b-4 border-gray-900 font-bold">
                        <a href="http://"> 
                            <span className=" mobileXL:text-base" > Connect with Me on twitter.</span>
                            <span className='text-sm'> 🚀🚀🚀</span>
                        </a>
                    </span>
                </p>
            </div>
        </div>
        {children}
        </section>
    )
}