import BlogContent from "./component/BlogContent"
import { Metadata } from "next"

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Juwon Akingbade | Blog',
  description: 'Welcome to my blog where I share my thoughts on software development and other things I find interesting.',
  keywords:['Juwon', 'Akingbade', 'Junny', 'Blog' ],
  alternates: {
    canonical:'/blog',
    languages:{
      'en-US':'/en-US'
    }
  },
  openGraph:{
    title:'Juwon Akingbade | Blog',
    description:'Welcome to my blog where I share my thoughts on software development and other things I find interesting.',
    url:'https://junny.dev/blog',
    images: '/Mine.jpg',
    type:'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juwon Akingbade | Blog',
    description: 'Welcome to my blog where I share my thoughts on software development and other things I find interesting.',
    images: '/Mine.jpg'
  }
}

export default function Blog() {
  return <BlogContent />
}