"use client"
import { Typography } from "@/sharedComponents/Typograph"
import Tools from "./Tools"

type ThemeProps = {
    darkMode: boolean
}

const Intro = ({ darkMode }: ThemeProps) => {

    return (
        <div className={`mt-10 mobileL:mt-16 pb-8 ${darkMode ? 'darkbg' : ''} `}>
            <Typography variant={4} className={` font-bold text-xl`}>I am a Frontend Engineer currently living in Lagos State, Nigeria.</Typography>
            <p className='mt-4 tabletS:mt-2 leading-relaxed text-lg
            mobileL:text-base mobileL:leading-[1.5]
        '>
                I am passionate about  creating visually
                appealing, user-friendly websites / web apps for users.
                I specialize in HTML, CSS, JavaScript, and other related frontend technologies in meeting user needs
                and I take pride in turning complex design concepts into responsive,
                high-performance websites / web apps. Whether building a custom website from
                scratch or revamping an existing one, I strive to deliver
                the best possible user experience with clean, maintainable code and
                attention to detail.
            </p>

            <p className='mt-4 leading-relaxed text-lg mobileL:text-base mobileL:leading-[1.5]'>
                If you are looking for a Frontend Engineer to join your
                team of UI/UX designer and Backend Engineers,
                you have definitely stumble on the right profile.
            </p>

            <div className='my-6'>

                <div className='mb-4 w-[200px] bg-gray-200 text-center cursor-pointer hover:bg-gray-300  text-black p-1 font-[550] transition duration-500 ease-in-out'>
                    <Typography variant={1}>Tools</Typography>
                </div>

                <p className='text-lg mb-4 mobileL:text-base mobileL:leading-[1.5]'>
                    I build web applications and sites using technologies such as:
                </p>
                <Tools />
            </div>
        </div>
    )
}

export default Intro