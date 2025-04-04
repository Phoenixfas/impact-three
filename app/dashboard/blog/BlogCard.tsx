'use client'
import Image from 'next/image'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { toggleBlogModal } from '../../../redux/slices/cliBlogModalToggleSlice'
import { changeActiveBlog } from '../../../redux/slices/activeBlogSlice'

interface BlogCardProps {
  d: any
}

export default function BlogCard({d}: BlogCardProps) {
  const dispatch = useAppDispatch()
  const blogs = d
  const sortByNewest = useAppSelector(state => state.sortBlogs.value)
  // console.log(blogs)
  return (
    <div className='min-h-[60vh] gap-5 w-full flex flex-wrap justify-between items-start'>
      <div className='gap-5 w-full flex flex-wrap justify-between'>
          {sortByNewest && blogs.sort((b1:any, b2:any) => b2.createdAt - b1.createdAt).map((blog: any, index: any) => (
              <div key={index} className='w-64 h-[100px] shadow-lg bg-white hover:scale-110 duration-300 rounded-xl blog-card flex overflow-hidden'>
                  <Image className='h-full w-1/3 object-cover' src={blog.image} alt={blog.title.substr(0, 20)} width={200} height={200} priority />
                  <div className='h-full flex-1 flex flex-col justify-between p-4 gap-2'>
                      <div className='text-sm text-black font-bold'>{blog.title.substr(0, 30)}</div>
                      <div className='text-[#4EAEE5] text-sm cursor-pointer' onClick={() => {
                        dispatch(toggleBlogModal())
                        dispatch(changeActiveBlog(blog))
                      }}>view blog</div>
                  </div>
              </div>
          ))}
          {!sortByNewest && blogs.sort((b1:any, b2:any) => b1.createdAt - b2.createdAt).map((blog: any, index: any) => (
              <div key={index} className='w-64 h-[100px] shadow-lg bg-white hover:scale-110 duration-300 rounded-xl blog-card flex overflow-hidden'>
                  <Image className='h-full w-1/3 object-cover' src={blog.image} alt={blog.title.substr(0, 20)} width={200} height={200} priority />
                  <div className='h-full flex-1 flex flex-col justify-between p-4 gap-2'>
                      <div className='text-sm text-black font-bold'>{blog.title.substr(0, 30)}</div>
                      <div className='text-[#4EAEE5] text-sm cursor-pointer' onClick={() => {
                        dispatch(toggleBlogModal())
                        dispatch(changeActiveBlog(blog))
                      }}>view blog</div>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}
