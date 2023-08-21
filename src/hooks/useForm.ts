import { useState, ChangeEvent } from "react";
import { initialState, UseFormReturnType } from "../../type";

const initialState:initialState = {
    name: '',
    email: '',
    message: '',
}

export const useForm = ():UseFormReturnType => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setValues(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }

    return {values, handleInputChange, reset}
}