import { formatDate } from "@/lib/formatDate"
import { getPostByName, getPostsMeta } from "@/lib/posts"
import { Typography } from "@/sharedComponents/Typograph"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css'
import SinglePostWrapper from "../component/SinglePostWrapper"

type Params = {
  params: {
    id: string
  }
}

export const revalidate = 86400


export async function generateStaticParams() {
  const posts = await getPostsMeta()

  if (!posts) return []

  return posts.map((post) => {
    return {
      id: post.id
    }
  })
}

export async function generateMetadata({ params: { id } }: Params) {
  const post = await getPostByName(`${id}.mdx`)

  if (!post) {
    return {
      title: 'Blog - Post not found',
    }
  }
  return {
    title: `Juwon Akingbade | Blog - ${post.meta.title}`,
    description: post.meta.subtitle,
    keywords: post.meta.tags,
    authors: ['Juwon Akingbade'],
    alternates:{
      canonical:`/blog/${id}`,
      languages:{
        'en-US':`/en-US`
      }
    },
    openGraph:{
      title:`Juwon Akingbade | Blog - ${post.meta.title}`,
      description:post.meta.subtitle,
      url:`/blog/${id}`,
      type:'article',
    },
    
  }
}

export default async function BlogPage({ params: { id } }: Params) {
  const posts = await getPostByName(`${id}.mdx`)

  if (!posts) {
    return notFound()
  }

  const { meta, content } = posts
  const { date, title, subtitle, tags } = meta
  const formattedDate = formatDate(date)

  return (
    <SinglePostWrapper >
      <div>
        <Typography variant={1} className="text-3xl font-bold mb-1 mobileXL:text-2xl mobileM:text-xl">{title}</Typography>
        <Typography variant={2} className="text-xl mobileM:text-lg font-semibold">{subtitle}</Typography>
        <Typography variant={3} className=" text-sm italic mb-3">{formattedDate}</Typography>
      </div>

      <article>
        {content}
      </article>

      <div className="mt-3">
        <Typography variant={3} className="text-3xl font-bold mb-2">Related Tags</Typography>

        <p className=" flex flex-wrap">
          {
            tags.map((tag: string, i) => {
              return <Link title={`${tag}`} className="me-3 mb-3 bg-gray-200  hover:bg-gray-300 p-1 rounded text-black font-[550]
              transition duration-500 ease-in-out" href={`/tags/${tag}`} key={i}>{tag}</Link>
            })
          }
        </p>
      </div>

      <div className="mt-6">
        <Link title="Back to blog" className="bg-gray-400  hover:bg-gray-600 p-[0.5rem] rounded text-black font-[550]
              transition duration-500 ease-in-out" href='/blog'>Back to blog</Link>
      </div>
    </SinglePostWrapper>
  )
}