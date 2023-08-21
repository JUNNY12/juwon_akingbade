"use client"

import { ThemeProvider } from "@/context/ThemeContext";
import { ChildrenProps } from "../../type";

export function Provider({children}:ChildrenProps){
    return(
        <ThemeProvider>
            <main>
            {children}
            </main>
        </ThemeProvider>
    )
}

