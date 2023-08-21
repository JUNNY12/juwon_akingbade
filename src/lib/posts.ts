import { PostMeta,BlogPost } from "../../type"
import {compileMDX} from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeHighlight from "rehype-highlight"
import CustomImage from "@/sharedComponents/CustomImage"
import CustomParagraph from "@/sharedComponents/CustomParagraph"

type fileTree ={
    "tree":[
    {
        "path":string
    }
    ]
}

// get post by name
export async function getPostByName(fileName:string):Promise<BlogPost|undefined>{
    const res = await fetch(`https://raw.githubusercontent.com/JUNNY12/portfoliopost/main/${fileName}`)

    if(!res.ok) return undefined

    const rawMDX = await res.text()

    if(rawMDX === '404: Not Found') return undefined

    const{frontmatter,content} = await compileMDX<{title:string, subtitle:string, date:string, tags:string[]}>({
        source:rawMDX,
        components:{
            CustomImage,
            CustomParagraph
        },
        options:{
            parseFrontmatter:true,
            mdxOptions:{
                rehypePlugins:[
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings,
                        { 
                            behavior:'wrap',
                            properties:{
                                className:['customed-heading']
                            }
                        }]
                ],
            }
        }
    })

    const id = fileName.replace(/\.mdx$/,'')

    const postObject:BlogPost = {
        meta:{
            id,
            title:frontmatter.title,
            subtitle:frontmatter.subtitle,
            date:frontmatter.date,
            tags:frontmatter.tags,
        },
        content
    }

    return postObject
}

// get post meta
export async function getPostsMeta(){
    const res = await fetch('https://api.github.com/repos/JUNNY12/portfoliopost/git/trees/main?recursive=1',{
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    if(!res.ok) return undefined

    const repoFileTree:fileTree = await res.json()

    const fileArray = repoFileTree.tree.map(obj =>obj.path)
    .filter(path => path.endsWith('.mdx'))

    const posts: PostMeta[] = []
    
    for (const file of fileArray ){
        const post = await getPostByName(file)
        if(post){
            const {meta} = post
            posts.push(meta)
        }
    }

    return posts.sort((a:any, b:any) => b.date - a.date)
}