'use client'
import { Typography } from '@/sharedComponents/Typograph'
import { Input, Textarea } from '@/sharedComponents/Input'
import Button from '@/sharedComponents/Button'
import { useForm } from '@/hooks/useForm'
import { useLoading } from '@/hooks/useLoading'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { FormEvent } from 'react'
import { ThemeProp, initialState } from '../../../type'


const Contact = ({ darkMode }: ThemeProp) => {

    const { values, handleInputChange, reset } = useForm()

    const { name, email, message } = values as initialState

    const { isLoading, setIsLoading } = useLoading()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        }
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
        const publicKey = process.env.NEXT_PUBLIC_KEY as string

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
                setIsLoading(false)
                toast.success('Message sent successfully', {
                    position: 'top-center',
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                })
                reset()
            })
            .catch((error) => {
                console.log(error.text);
                setIsLoading(false)
            })
        console.log(values)

    }

    return (
        <div className='pb-16 px-28 tabletL:px-6 font-bold mt-20 tabletS:pb-24 bg-footer bg-cover mobileL:bg-contain mobileL:bg-no-repeat py-12'>
            <div className='mb-6 w-[200px] bg-gray-200 text-center cursor-pointer hover:bg-gray-300  text-black p-1 font-bold'>
                <Typography variant={2}>Contact</Typography>
            </div>

            <div className={`text-3xl font-bold mb-4 text-gray-800
            tabletS:text-center
        `}>
                <Typography variant={2} className=' mobileL:mt-6'>Let's Work</Typography>
            </div>

            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit} className={` flex flex-col w-[400px] rounded-md bg-gray-200 p-6 mb-8 h-[350px] 
                ${darkMode ? '' : ''}`}>
                    <div className='mb-6'>
                        <Input
                            placeholder='Name'
                            type='text'
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <Input
                            required
                            placeholder='Email'
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='mb-6'>
                        <Textarea
                            required
                            placeholder='Message'
                            type='text'
                            name='message'
                            value={message}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <Button className={`w-full p-2 hover:bg-white hover:text-black transition duration-500 ease-in-out
                        hover:border-[1.5px] hover:border-black bg-black
                        rounded-sm font-bold
                        ${darkMode ? 'bg-zinc-100 text-gray-800' : 'text-zinc-100'}
                        `}>
                            {
                                isLoading ? 'Sending...' : 'Say Hello'
                            }
                        </Button>
                    </div>

                </form>
            </div>

            <div className='mt-8 flex items-center justify-center text-xl tabletS:flex-col '>
                <a href="mailto:juwonemmanuel22@gmail.com" title='juwonemmanuel22@gmail.com' >
                    <div className={`border-[1.5px] text-center rounded-sm me-8 tabletS:me-0
                    p-4 w-[300px] bg-white border-gray-400 
                    tabletS:mb-6 mobileM:text-base  mobileM:font-semibold
                    ${darkMode ? 'dark' : ''}`}>
                        juwonemmanuel22@gmail.com
                    </div>
                </a>

                <a href="tel:+2349032869229" title='+2349032869229' >
                    <div className={`border-[1.5px] rounded-sm mobileM:text-base mobileM:font-semibold border-gray-400 
                    text-center p-4 bg-white w-[300px] ${darkMode ? 'dark' : ''}`}>
                        +2349032869229
                    </div>
                </a>

            </div>
        </div>
    )
}


export default Contact