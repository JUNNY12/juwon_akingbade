import { useTheme } from "@/hooks/useTheme"


type ContainerProps = {
    className?: string
    children: React.ReactNode
}

export const Container = ({ children, className }:ContainerProps) => {
    const { darkMode } = useTheme()
    return (
        <section className={`${className} bg-white}`}
        >
            {children}
        </section>
    )
}

export const FlexContainer = ({ children }:ContainerProps) => {
    return (
        <div className="flex px-28 gap-x-10 tabletL:px-6 tabletS:px-1 tabletL:flex-col tabletL:justify-center tabletL:items-center " >
            {children}
        </div>
    )
}