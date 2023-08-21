"use client"

import { useTheme } from "@/hooks/useTheme"
import Link from "next/link"
import Button from "./Button"
import {useEffect, useRef} from "react"

type DropNavProps = {
    isScrolled: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DropNav = ({ isScrolled, setIsMenuOpen }:DropNavProps) => {
    const { darkMode } = useTheme()
    const dropRef = useRef<HTMLDivElement>(null)

    useEffect(() =>{
        const handleOutsideClick = (e: MouseEvent) => {
            if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false)
            }
        }
        
        document.addEventListener('click', handleOutsideClick)

        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }

    }, [setIsMenuOpen])

    return (
        <div ref={dropRef} className={!isScrolled ? `pb-6 font-myFont px-4 bg-white shadow-sm shadow-gray-600 h-full
        ${darkMode ? 'dark' : ''} transition duration-500 ease-in-out`
        : `bg-[#FFFFFF99] px-4 pb-6 backdrop-blur-md h-full shadow-sm shadow-gray-600
        ${darkMode ? 'bg-[#1F293766] font-bold text-gray-800' : ''} transition duration-500 `
        }>
            <div className="mb-4 pt-4 text-lg font-bold">
                <Link href={`/blog`}>Blog</Link>
            </div>

            <div className="mb-4 pt-4 text-lg font-bold">
                <Link href={`/about`}>About</Link>
            </div>

            <div className="mb-4 border-t-[1.5px] border-gray-400"></div>

            <div className='mt-6'>
                <a href="mailto:juwonemmanuel22@gmail.com">
                    <Button className={`bg-black  p-2 w-40 text-center
                        transition duration-500 ease-in-out me-8 font-bold
                        ${darkMode ? 'bg-gray-200 text-gray-800' : 'text-white'}
                    `}>Reach Out</Button>
                </a>
            </div>

        </div>
    )
}