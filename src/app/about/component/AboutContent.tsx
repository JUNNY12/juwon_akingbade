"use client"
import AboutBanner from "./AboutBanner"
import Intro from "./Intro"
import { useTheme } from "@/hooks/useTheme"

export default function AboutContent() {
    const { darkMode } = useTheme()
    return (
        <div className={` min-h-screen font-myFont transition px-28 tabletL:px-6
        duration-500 ease-in-out ${darkMode ? 'dark' : ''}`}>
            <AboutBanner darkMode={darkMode} />
            <Intro darkMode={darkMode} />
        </div>
    )
}