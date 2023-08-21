import Image from 'next/image'


type Props = {
    src: string
    alt: string
    width: number
    height: number
}

export default function CustomImage({ src, alt, width, height }: Props) {
    return (
        <div className='w-full h-full'>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={true}
            />
        </div>
    )
}