"use client"

import React from 'react'
import { useTheme } from '@/hooks/useTheme'

type CardProps = {
  children: React.ReactNode
  className?: string,
  title?:string
}

export const Card = ({children, className, ...rest}:CardProps) => {
  const { darkMode } = useTheme()
  return (
    <article 
    {...rest}
    className={`${className} p-4 border rounded-md 
    shadow-lg h-[460px]
    transition-all ease-in-out duration-500 cursor-pointer hover:scale-105 
    ${darkMode ? ' bg-white text-gray-800 shadow-black' : 'shadow-slate-300'}
    `}>
        {children}
    </article>
  )
}

