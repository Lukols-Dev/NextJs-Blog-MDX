'use client'
import PostCard from "@/components/common/postCard"
import { MDX } from "@/lib/mdx"
import { BlogPosts } from "@/types/blog.type"
import { useEffect, useState } from "react"
import { Pagination } from "@mui/material"
import { SearchBar } from "@/components/common/SearchBar"

export default function Home() {
  const [posts,setPosts] = useState<BlogPosts>([])


  const getBlogPosts = async() => {
    try{
      const res = await MDX.getAllPosts();
      if(res && res.length > 0){
        setPosts(res);
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getBlogPosts()
  },[])

  return (
    <section className="mt-6 w-full flex flex-col">
      <div className="w-full min-h-48 h-60 mb-10 px-4 md:px-10 lg:px-32 lg:gap-4 flex items-center bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-[400px] flex flex-col gap-2">
          <h1 className={`text-2xl lg:w-[400px] font-bold text-left text-white`}>
          Kodowanie to droga bez końca, lecz cierpliwość uczyni cię mistrzem.
          </h1>
          <p className="float-right text-white mb-4">- <i>Next Ninja</i></p>
          <SearchBar/>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ul className="px-4 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((item:any,index:any)=>(
            <li key={index} className='mt-4'>
              <PostCard title={item.title} id={item.id}/>
            </li>
          ))}
          </ul>
          {
          posts.length > 10 ?
            <div className="w-full mt-20 flex justify-center">
              <Pagination count={10} />
            </div>
            :
            <></>
        }
      </div>
    </section>
  )
}