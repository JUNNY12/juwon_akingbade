"use client"

import { Typography } from '@/sharedComponents/Typograph'
import { Card } from '@/sharedComponents/Card'
import Image from 'next/image'
import { AiOutlineGithub } from "react-icons/ai"
import { FaExternalLinkAlt } from "react-icons/fa"
import { data } from '../../lib/data'
import { ThemeProp } from '../../../type'

const Work = ({ darkMode }: ThemeProp) => {

    return (
        <div className=' mt-20 px-28 tabletL:px-6'>

            <div className='mb-6 w-[200px] font-bold bg-gray-200 text-center cursor-pointer hover:bg-gray-300  text-black p-1 transition duration-500 ease-in-out'>
                <Typography variant={2}>Work</Typography>
            </div>

            <div className='text-3xl mobileL:text-2xl font-bold mb-4'>
                <Typography variant={2}>Personal Projects</Typography>
            </div>

            <div className={`text-lg text-gray-900 mb-4 mobileL:text-base mobileL:leading-[1.2] ${darkMode ? 'darkText' : ''} transition duration-500 ease-in-out`}>
                <p>Browse through some of my projects to see my coding process and expertise in action.</p>
            </div>

            <div className='flex items-center justify-center gap-x-8 h-fit mt- flex-wrap'>
                {
                    data.filter((item) => item.status === "Completed").map((item, index) => {
                        const lastIndex = data.length - 1
                        return (
                            <Card key={index} className={`relative ${index === lastIndex ? 'mb-0' : 'mb-6'}`} title={`${item.name}`} arial-label='project'>
                                <div className='w-[250px] h-[250px] object-cover mb-4'>
                                    <Image src={item.image} title={item.name} width={400} height={400} className=' object-cover w-full h-full rounded-sm' priority alt={item.name} />
                                </div>
                                <Typography variant={3} className=' text-xl font-bold mb-3 w-[250px] text-center transition duration-500 ease-in-out'>{item.name}</Typography>

                                <p className='text-lg mb-3 w-[250px] text-gray-900 text-center transition duration-500 ease-in-out'>{item.description}</p>

                                <div className='inline-flex justify-end items-center 
                                absolute bottom-2 left-1/2  transfrom -translate-x-1/2 -translate-y-1/2 '>
                                    <a href={item.github} target='_blank' rel="noreferrer" className='me-8' title='Github Link' aria-label='external link'>
                                        <AiOutlineGithub className='text-2xl text-gray-900 hover:text-black transition duration-500 ease-in-out' />
                                    </a>

                                    <a href={item.deployed} target='_blank' rel="noreferrer" title='Deployed Link' aria-label='external link'>
                                        <FaExternalLinkAlt className='text-2xl text-gray-900 hover:text-black transition duration-500 ease-in-out' />
                                    </a>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work