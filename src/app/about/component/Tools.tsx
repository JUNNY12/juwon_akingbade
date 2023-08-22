import { BiLogoJavascript, BiLogoFirebase, BiLogoTypescript, BiLogoRedux, BiLogoTailwindCss, BiLogoHtml5 } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
import { BsGit } from "react-icons/bs"
import { FaCss3 } from "react-icons/fa"


const tools = [
    {
        id: 'javascript',
        logo: <BiLogoJavascript />
    },
    {
        id: 'react',
        logo: <FaReact />
    },
    {
        id: 'firebase',
        logo: <BiLogoFirebase />
    },
    {
        id: 'git',
        logo: <BsGit />
    },
    {
        id: 'typescript',
        logo: <BiLogoTypescript />
    },
    {
        id: 'redux',
        logo: <BiLogoRedux />
    },
    {
        id: 'tailwind',
        logo: <BiLogoTailwindCss />
    },
    {
        id: 'css',
        logo: <FaCss3 />
    },
    {
        id: 'html',
        logo: <BiLogoHtml5 />
    }
]



export default function Tools() {
    return (
        <div className="flex flex-wrap">
            {
                tools.map(({ id, logo }) => {
                    return (
                        <div key={id} className='me-6 mb-4 hover:scale-105 transition duration-500 ease-in-out cursor-pointer'>
                            <div className="text-7xl mobileXL:text-6xl">
                                {logo}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}