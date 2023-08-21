"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import { BsMoon, BsSun } from "react-icons/bs"
import { useTheme } from '@/hooks/useTheme'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { TfiClose } from "react-icons/tfi"
import { DropNav } from './dropNav'


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { darkMode, toggleTheme } = useTheme()

    const handleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled])


    return (
        <header className='relative font-myFont'>
            <div className={`hidden tabletS:block fixed top-[10rem] w-full z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            ${isMenuOpen ?
                    'transition-all duration-500 ease-out opacity-100 scale-100'
                    : 'transition-all duration-500 ease-in-out opacity-0 scale-95'}`}>
                {isMenuOpen && <DropNav isScrolled={isScrolled} />}
            </div>

            <nav className={!isScrolled ? ` bg-white flex items-center py-8 px-28 tabletL:px-6 h-8 w-full fixed top-0 z-20 justify-between font-bold ${darkMode ? 'dark' : ''} transition duration-500 ease-in-out`
                : `bg-[#FFFFFF99] backdrop-blur-md font-bold flex items-center py-8 px-28 h-8 tabletL:px-6 w-full fixed top-0 z-10 justify-between ${darkMode ? 'bg-[#1F293766] text-gray-800  font-bold' : ''} transition duration-500 `
            }>
                <div className='font-bold text-2xl mobileXL:text-xl mobileL:text-lg'>
                    <Link href={`/`}>Juwon Akingbade</Link>
                </div>

                <div>
                    <ul className='flex items-center'>
                        <li className='me-12 p-1 hover:bg-gray-300 tabletS:hidden'>
                            <Link href={`/blog`}>Blog</Link>
                        </li>

                        <li className='me-12 p-1 hover:bg-gray-300 tabletS:hidden'>
                            <Link href={`/about`}>About</Link>
                        </li>

                        <li className='tabletS:hidden me-12 bg-gray-200 w-28 text-center cursor-pointer hover:bg-gray-300  text-black p-1 font-[550] transition duration-300 ease-in-out'>
                            <a href="mailto:juwonemmanuel22@gmail.com">
                                Reach Out
                            </a>
                        </li>

                        {
                            darkMode ?
                                <li
                                    onClick={toggleTheme}
                                    className=' cursor-pointer font-bold  hover:bg-gray-300 p-1 text-2xl me-8'>
                                    <BsSun />
                                </li>
                                :
                                <li
                                    onClick={toggleTheme}
                                    className=' cursor-pointer font-bold  hover:bg-gray-300 p-1 text-2xl me-8'>
                                    <BsMoon />
                                </li>
                        }
                        {
                            isMenuOpen ?
                                (
                                    <li onClick={handleMenu}>
                                        <div className={`cursor-pointer  hover:bg-gray-300 p-1 text-2xl hidden tabletS:block ${isMenuOpen ? 'transform rotate-180 transition-transform duration-500 ease-in-out' : 'transition-transform duration-500 ease-in-out'}`}>
                                            <TfiClose />
                                        </div>
                                    </li>
                                )

                                :
                                (
                                    <li onClick={handleMenu}>
                                        <div className={`cursor-pointer  hover:bg-gray-300 p-1 text-2xl hidden tabletS:block ${isMenuOpen ? 'transform -rotate-180 transition-transform duration-500 ease-in-out' : 'transition-transform duration-500 ease-in-out'}`}>
                                            <HiOutlineMenuAlt4 />
                                        </div>
                                    </li>
                                )
                        }

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav