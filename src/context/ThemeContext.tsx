"use client"
import React, { createContext, useEffect, useState } from "react";

export interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}

type ChildrenProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ChildrenProps) => {

    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('darkMode');
            if (storedTheme !== null) {
                setDarkMode(JSON.parse(storedTheme));
            }
        }
    }, []);

    const toggleTheme = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const newDarkMode = !darkMode;
            window.localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            setDarkMode(newDarkMode);
        }
    };

   

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};