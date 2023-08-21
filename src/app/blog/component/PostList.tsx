import { Typography } from "@/sharedComponents/Typograph"
import { PostMeta } from "../../../../type"
import { formatDate } from "@/lib/formatDate"
import Link from "next/link"
import { Card } from "@/sharedComponents/Card"


type PostListProps = {
    post: PostMeta
}

export default async function PostList({ post }: PostListProps) {
    const { title, subtitle, date, id } = post
    const formattedDate = formatDate(date)

return (
    <Card className="h-full mb-0">
        <div className="mb-4">
            <Link href={`/blog/${id}`}>
                <Typography variant={1} className="text-2xl tabletS:text-xl uppercase font-semibold underline">{title}</Typography>
            </Link>
            <Typography variant={3} className=" text-sm italic">
                {formattedDate}
            </Typography>
        </div>
        <p className="text-xl mb-3">
            {subtitle}
        </p> 
        <Link className="text-xl underline mt-3"  href={`/blog/${id}`}>
            Read More
        </Link>

    </Card>
)
}