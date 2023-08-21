import PostList from "@/app/blog/component/PostList";
import { getPostsMeta } from "@/lib/posts";
import { Typography } from "@/sharedComponents/Typograph";
import Link from "next/link";
import { Metadata } from "next";

type TagsProps = {
    params: {
        tag: string
    }
}

export const metadata: Metadata = {
    title: 'Juwon Akingbade | Blog - Tags',
    description: ' Related posts for tags',
    keywords: ['Juwon', 'Akingbade', 'Junny', 'Blog'],
    alternates: {
        canonical: '/tags',
        languages: {
            'en-US': `/en-US`
        }
    },
    openGraph: {
        title: 'Juwon Akingbade | Blog - Tags',
        description: ' Related posts for tags',
        url: '/',
        images:'/Mine.jpg'
    },
}

export default async function Tags({ params: { tag } }: TagsProps) {

    const posts = await getPostsMeta()
    if (!posts) {
        return <div className="mt-10 pt-28 px-28 tabletL:px-6 tabletS:px-4 text-center">Sorry , no posts available</div>
    }


    const availablePost = posts.filter((post) => post.tags.includes(tag))

    if (availablePost.length === 0) {
        return <div className="mt-10 text-center pt-36 px-28 tabletL:px-6 tabletS:px-4">
            <Typography variant={1} className="text-2xl mobileL:text-xl font-semibold mb-4 text-center">OOps!! 😔😔😔 <br /> No post available for <span className="italic"> #{tag.replace(/%20/g, ' ')} </span></Typography>
            <Link title="Back to blog" className="bg-gray-400  hover:bg-gray-600 p-[0.5rem] rounded text-black font-[550]
            transition duration-500 ease-in-out" href='/blog'>Back to blog</Link>
        </div>
    }

    return (
        <section className=" pt-28 px-28 tabletL:px-6 tabletS:px-4">
            <Typography variant={1} className="text-3xl font-semibold mb-4 tabletS:text-center tabletS:text-2xl">
                Available posts for <span className="italic">#{tag.replace(/%20/g, ' ')}</span>
            </Typography>

            <div>
                {availablePost.map((post) =>
                    <PostList key={post.id} post={post} />
                )}
            </div>
        </section>
    )
}