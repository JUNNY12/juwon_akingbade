"use client"

import Contact from "./Contact";
import Hero from "./Hero";
import Work from "./Work";
import { Container } from "@/sharedComponents/Container";
import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/sharedComponents/Footer";

export default function HomeContent() {
    const { darkMode } = useTheme();
    return (
        <main className={` min-h-screen font-myFont transition duration-500 ease-in-out ${darkMode ? 'dark' :'bg-white'}`}>
            <Container className='mb-0'>
                <Hero darkMode={darkMode} />
                <Work darkMode = {darkMode} />
                <Contact darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </Container>
        </main>
    )
}