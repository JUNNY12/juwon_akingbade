import {useState, useEffect} from "react"

type ObserverProps = {
    root?:HTMLElement
    rootMargin?:string
    threshold?:number
    ref:React.MutableRefObject<HTMLElement | null>
}

export default function useObserver({root, rootMargin, threshold, ref}:ObserverProps){
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry])=> {
                setIsIntersecting(entry.isIntersecting)
            },
            {
                root,
                rootMargin,
                threshold
            }
        )
        

        if(ref.current){
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    },[])

    return isIntersecting

}