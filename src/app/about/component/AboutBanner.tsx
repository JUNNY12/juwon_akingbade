"use client"
import { Typography } from '@/sharedComponents/Typograph'
import Button from '@/sharedComponents/Button'
import Image from 'next/image'

type ThemeProps ={
    darkMode:boolean
}

const AboutBanner = ({darkMode}:ThemeProps) => {
   
    return (
        <div className='pt-28'>
            <div className='flex gap-x-10 items-center justify-center
            tabletL:flex-col
            '>
                <div className='w-3/5 tabletL:w-full tabletL:mb-8'>

                    <div className='text-6xl mb-4 leading-[1] font-bold tabletS:text-4xl mobileL:text-2xl'>
                        <Typography variant={2}>About</Typography>
                    </div>

                    <p className={`leading-[2] text-gray-900 text-xl
                    transition duration-500 ease-in-out 
                    mobileL:text-base mobileL:font-semibold mobileL:leading-[1.2]
                    ${darkMode ? 'text-zinc-100' : ''}`}>
                        Welcome to my portfolio page.
                    </p>


                    <div className='mt-6 inline-flex'>
                        <a href="mailto:juwonemmanuel22@gmail.com">
                            <Button className={`bg-black  p-2 w-32 text-center
                        transition duration-500 ease-in-out me-3 font-bold rounded-[20px]
                        ${darkMode ? 'bg-gray-200 text-gray-800' : 'text-white'}
                        `}>Get in Touch</Button>
                        </a>
                        <a href='https://drive.google.com/file/d/1kO3eA1D66KB6TYjpWzlItzPd4DRaHfli/view?usp=sharing' target='_blank'>
                            <Button className={`bg-white border border-black rounded-[20px]
                        text-black font-bold py-[0.45rem] px-[0.5rem] w-32 mobileL:w-32 text-center
                        transition duration-500 ease-in-out
                        ${darkMode ? 'hover:bg-gray-200 text-gray-800 ' : 'hover:bg-gray-800 hover:text-white'} `}>
                                Read CV
                            </Button>
                        </a>
                    </div>

                </div>

                <div className='w-2/5 tabletL:w-auto'>
                    <div className='h-[400px] w-[300px] object-cover rounded-sm mobileL:rounded-full mobileL:w-32 mobileL:h-32'>
                        <Image src='/Mine.jpg' alt='Juwon Akingbade' width={400} height={500} priority className=' cursor-pointer rounded-sm mobileL:rounded-full transition duration-300 ease-in-out hover:grayscale' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutBanner