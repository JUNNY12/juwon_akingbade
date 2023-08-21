import { type } from "os"
import { ReactElement } from "react"

type ChildrenProps = {
    children: React.ReactNode
}

type TypographyProps = {
    children: React.ReactNode
    className?: string
    variant:number
}

type InputProps={
    name: string
    type:string
    required: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder: string
    className?: string
}

type ButtonProps = {
    children: React.ReactNode
    className?: string
}

type initialState = {
    name: string
    email: string
    message: string
}
type HandleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
type ResetForm = () => void;

type UseFormReturnType = {
    values: initialState
    handleInputChange: HandleInputChange
    reset: ResetForm
}

type UseLoadingReturnType = {
    isLoading: Boolean
    setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>
}

type PostMeta = {
    id:string,
    title:string,
    subtitle:string,
    date:string,
    tags:string[],
}

type BlogPost = {
    meta:PostMeta,
    content:ReactElement<any, string | JSXElementConstructor<any>>;
}

type ThemeProp={
    darkMode:boolean
}