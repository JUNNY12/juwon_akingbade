"use client"

import { useTheme } from "@/hooks/useTheme"


type Prop = {
    children: React.ReactNode
}

export default function SinglePostWrapper({children}: Prop) {
    const { darkMode } = useTheme()
    return (
        <section className={`pt-28 px-28 tabletL:px-6 pb-8 tabletS:px-4 transition duration-500 ease-in-out
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            {children}
        </section>
    )
}