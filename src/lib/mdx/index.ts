import { BlogPosts, Filetree } from "@/types/blog.type";
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import axios from "axios"
import Video from "@/components/common/Video";
import CustomImage from "@/components/common/CustomImage";

export class MDX {

    static getPostByName = async(fileName: any) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_POST_RAW_URL}/${fileName}`)
            if (res && res.status !== 200) return null
    
            const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
                source: res.data,
                components: {
                    Video,
                    CustomImage,
                },
                options: {
                    parseFrontmatter: true,
                    mdxOptions: {
                        rehypePlugins: [
                            rehypeHighlight,
                            rehypeSlug,
                            [rehypeAutolinkHeadings, {
                                behavior: 'wrap'
                            }],
                        ],
                    },
                }
            })
            
            const blogPostObj: any = { meta: { id: fileName.replace(/\.mdx$/, ''), title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content}
            return blogPostObj
        }catch(err) {
            console.log('Error post name: ', err)
            return null
        }
    }

    static getAllPosts = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}`,
            {
                headers:{
                    Accept: 'application/vnd.github+json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    'X-GitHub-Api-Version': '2022-11-28',
                }
            });

            if(res.status !== 200) return [];

            const repoFileTree: Filetree = await res.data;
            const filesArray = repoFileTree.tree.map(obj => obj).filter(path=>path.path.endsWith('.mdx'));
            const posts: BlogPosts = [];

            for (const file of filesArray) {
                const post = await this.getPostByName(file.path)
                if (post) {
                    const { meta } = post
                    posts.push(meta)
                }
            }
            return posts.sort((a, b) => a.date < b.date ? 1 : -1)
        }catch(err){
            console.log('Error all posts: ',err);
            return null
        }
    }
}