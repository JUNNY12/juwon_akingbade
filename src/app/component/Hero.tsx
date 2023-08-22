"use client"
import { FlexContainer } from '@/sharedComponents/Container'
import { Typography } from '@/sharedComponents/Typograph'
import Image from 'next/image'
import Button from '@/sharedComponents/Button'
import { ThemeProp } from '../../../type'



const Hero = ({ darkMode }: ThemeProp) => {

    return (
        <div className='pt-28 tabletS:mx-3'>
            <FlexContainer>
                <div className='w-3/5 tabletL:w-auto tabletL:mb-8'>
                    <div className='mb-4 w-[200px] bg-gray-200 text-center 
                    cursor-pointer hover:bg-gray-300  text-black p-1 font-[550] 
                    transition duration-500 ease-in-out
                    
                    '>
                        <Typography variant={1}>Frontend Engineer</Typography>
                    </div>

                    <div className={`text-6xl mt-4 mb-4 leading-[1] tabletS:text-4xl mobileL:text-2xl `}>
                        <Typography variant={2}>Crafting beautiful and functional interfaces</Typography>
                    </div>

                    <p className={`leading-[2] text-gray-900 text-lg 
                    transition duration-500 ease-in-out
                    mobileL:text-base mobileL:leading-[1.5]
                    ${darkMode ? 'darkText' : ''}`}>
                        As a frontend engineer, I am passionate about
                        creating user-centric and visually appealing
                        interfaces that enhance the user experience.
                        With frontend technologies,
                        I strive to build responsive, accessible,
                        and scalable websites and applications that work
                        seamlessly across all devices and platforms.
                    </p>


                    <div className='mt-6'>
                        <a href="mailto:juwonemmanuel22@gmail.com">
                            <Button className={`bg-black  p-2 w-40 text-center
                        transition duration-500 ease-in-out me-8 font-bold rounded-[20px]
                        ${darkMode ? 'bg-gray-200 text-gray-800' : 'text-white'}
                        `}>Get in Touch</Button>
                        </a>
                    </div>

                </div>

                <div className='w-2/5 tabletL:w-auto rounded-sm'>
                    <div >
                        <Image src='/Mine.jpg' alt='Juwon Akingbade' title='Juwon Akingbade' width={400} height={400} className='hover:grayscale transition duration-500 ease-in-out rounded-sm cursor-pointer' priority={true} />
                    </div>
                </div>
            </FlexContainer>
        </div>
    )
}

export default Hero