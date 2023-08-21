import PostList from "@/app/blog/component/PostList";
import { getPostsMeta } from "@/lib/posts";
import { Typography } from "@/sharedComponents/Typograph";
import Link from "next/link";
import { Metadata } from "next";
import TagWrapper from "../component/TagWrapper";

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
        images: '/Mine.jpg'
    },
}

export default async function Tags({ params: { tag } }: TagsProps) {

    const posts = await getPostsMeta()
    if (!posts) {
        return (
            <TagWrapper>
                <div className="mt-10 text-center min-h-screen">Sorry , no posts available</div>
            </TagWrapper>
        )
    }


    const availablePost = posts.filter((post) => post.tags.includes(tag))

    if (availablePost.length === 0) {
        return (
            <TagWrapper>
                <div className="mt-10">
                    <Typography variant={1} className="text-2xl mobileL:text-xl font-semibold mb-4 text-center">OOps!! 😔😔😔 <br /> No post available for <span className="italic text-yellow-400"> #{tag.replace(/%20/g, ' ')} </span></Typography>
                    <Link title="Back to blog" className="bg-gray-400  hover:bg-gray-600 p-[0.5rem] rounded text-black font-[550]
            transition duration-500 ease-in-out" href='/blog'>Back to blog</Link>
                </div>
            </TagWrapper>
        )
    }

    return (
        <TagWrapper>
            <section>
                <Typography variant={1} className="text-3xl font-semibold mb-4 tabletS:text-center tabletS:text-2xl">
                    Available posts for <span className="italic text-yellow-400">#{tag.replace(/%20/g, ' ')}</span>
                </Typography>

                <div>
                    {availablePost.map((post: any) => {
                        return (
                            <div className="mb-6" key={post.id}>
                                <PostList post={post} />
                            </div>
                        )

                    }
                    )}
                </div>
            </section>
        </TagWrapper>
    )
}