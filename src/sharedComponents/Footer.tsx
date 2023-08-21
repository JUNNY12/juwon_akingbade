import { AiOutlineGithub } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { Typography } from "./Typograph"


type Theme = {       
    darkMode: boolean
}


export const Footer = ({darkMode}:Theme) => {
    
    const date = new Date().getFullYear()
    return (
        <footer className={` font-myFont bg-gray-200 border-t border-gray-300 px-28 tabletL:px-6  py-2 ${darkMode?'dark': ''}`}>
            <div className='flex justify-between items-center mt-12 tabletS:mt-2 tabletS:flex-col'>
                <div className="tabletS:mb-6">
                    <Typography variant={3} className='text-center text-2xl mt-8'>Juwon Akingbade </Typography>
                </div>

                <div className='text-4xl flex items-center'>
                    <a href="https://github.com/JUNNY12" target="_blank">
                        <div className={`me-6 bg-gray-200 p-2 rounded-sm ${darkMode?'text-gray-800': ''}`}>
                            <AiOutlineGithub />
                        </div> 
                    </a>

                    <a href="https://twitter.com/juwonemmanuel6" target="_blank">
                        <div className={`me-6 bg-gray-200 p-2 rounded-sm ${darkMode?'text-gray-800': ''}`}>
                            <AiFillTwitterCircle />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/juwon-akingbade-b12912177/" target="_blank">
                        <div className={`me-6 bg-gray-200 p-2 rounded-sm ${darkMode?'text-gray-800': ''}`}>
                            <AiFillLinkedin />
                        </div>
                    </a>
                </div>


            </div>
            <div className='border-t border-gray-300 mt-6 '></div>
            <div className='border-t border-gray-300 mt-12 '></div>

            <div className='mt-6 font-semibold'>
                &copy; {date} Juwon Akingbade
            </div>
        </footer>
    )
}