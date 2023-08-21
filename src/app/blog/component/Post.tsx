import { getPostsMeta } from "@/lib/posts"
import PostList from "./PostList"
import { Typography } from "@/sharedComponents/Typograph"

export default async function Post() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <div className="mt-10 text-center">Sorry, no posts available</div>
    }

    return (
        <div className="mt-8">
            <Typography variant={1} className="text-3xl mobileL:text-2xl  font-bold mb-6">My blog posts</Typography>
            <div>
                {posts.map((post, index) => (
                    <div className={index === posts.length - 1 ? 'mb-0' : 'mb-12'} key={post.id}>
                        <PostList post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}
