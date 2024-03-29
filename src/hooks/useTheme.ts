"use client"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    
    if (!themeContext) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const { darkMode, toggleTheme } = themeContext;

    return { darkMode, toggleTheme };
}
