import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { InputProps } from '../../type'

const Input = ({ className, ...rest }:InputProps) => {
  const { darkMode } = useTheme()
  return (
    <input
      className={`${className} text-black w-full h-10 placeholder:text-black
    ${darkMode ? 'placeholder:text-black' : ''}
    focus:border-l-[6px] focus:border-gray-800 transition duration-500 ease-in-out
    outline-none rounded-sm indent-3`}

      {...rest}
    />
  )
}

const Textarea = ({ className, ...rest }:InputProps) => {
  const { darkMode } = useTheme()
  return (
    <textarea
      className={`${className} text-black w-full placeholder:text-black
        h-20 outline-none rounded-sm indent-3
        focus:border-l-[6px] focus:border-gray-800 transition duration-500 ease-in-out
        ${darkMode ? 'placeholder:text-black' : ''}
        `}
      {...rest}
    />
  )
}

export { Input, Textarea }