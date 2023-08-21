import BlogContent from "./component/BlogContent"
import { Metadata } from "next"

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Juwon Akingbade - Blog',
  description: 'Welcome to my blog where I share my thoughts on software development and other things I find interesting.',
}

export default function Blog() {
  return <BlogContent />
}