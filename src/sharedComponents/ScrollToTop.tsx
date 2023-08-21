"use client"
import { BiUpArrow } from "react-icons/bi"
import { useState } from "react"


export const ScrollToTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;
        
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    } 
   
    if(typeof window !== 'undefined'){
        window.addEventListener("scroll", toggleVisible)   
    }     
   

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className={visible ? "block" : "hidden"}>
            <div className='fixed right-8 bottom-44 z-20' onClick={scrollToTop}>
                <div className='bg-gray-950 rounded-full h-12 w-12 text-white
                font-bold cursor-pointer flex items-center justify-center text-2xl'
                >
                    <BiUpArrow />
                </div>
            </div>
        </div>
    )
}
