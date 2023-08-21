
type ParagraphProps = {
    children: string;
}

export default function CustomParagraph ({ children }: ParagraphProps) {
    return (
        <p className="my-2">{children}</p>
    )
}