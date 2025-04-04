'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import useFetch from '../../hooks/useFetch'

export default function Blogs_Subs() {
    const [blogs, setBlogs] = useState(0)
    const [subs, setSubs] = useState(0)

    const { data: articlesData, loading: articlesLoading, error: articlesError } = useFetch('news')
    // const { data: subscribersData, loading: subscribersLoading, error: subscribersError } = useFetch('subscribers')

    useEffect(() => {
        if (articlesData) {
            setBlogs(articlesData.length)
        }

        // if (subscribersData) {
        //     setSubs(subscribersData.length)
        // }
    }, [articlesData])

  return (
    <div className='w-full flex justify-center flex-wrap gap-8' >
        <Link href='/dashboard/blog' className='flex-1' title='blog'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#050752] font-bold">{blogs}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Blogs Written</div>
            </div>
        </Link>
        {/* <Link href='/dashboard/newsletter' className='flex-1' title='newsletter'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#050752] font-bold">{subs}</div>
                <div className="text-2xl text-gray-600 text-center font-light">NewsLetter Subscribers</div>
            </div>
        </Link> */}
    </div>
  )
}
