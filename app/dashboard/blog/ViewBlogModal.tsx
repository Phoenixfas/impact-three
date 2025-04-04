'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { toggleBlogModal } from '../../../redux/slices/cliBlogModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaTrash } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import deleteReq from '../../../hooks/deleteReq'
// import { useMutation } from '@apollo/client'
// import { DELETE_ARTICLE } from '../../graphql/mutations/articleMutations'
// import { GET_ARTICLES } from '../../graphql/queries/articleQueries'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewBlogModal() {
    const dispatch = useAppDispatch()
    const blogModalToggle = useAppSelector(state => state.blogModalToggle.value)
    const blogData = useAppSelector(state => state.activeBlog)
    const token = useAppSelector(state => state.login.admin)

    const deleteArticle = async () => {
      await deleteReq('news', blogData._id, token)
      window.location.reload()
    }
    // console.log(blogData)

  return (
    <>
      <AnimatePresence>
        {blogModalToggle && (
            <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={`fixed z-10 top-0 blog-modal left-0 w-full h-screen bg-[#00000077] flex py-32 justify-center overflow-y-auto`}>
              <motion.div initial={{y: "100%"}} animate={{y: 0}}  transition={{duration: .3}} className='relative max-w-[800px] h-fit flex flex-col bg-white rounded-2xl p-20'>
                <div className="p-3 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xl cursor-pointer" onClick={() => dispatch(toggleBlogModal())}>
                  <GrClose />
                </div>
                <div className=' w-full'>
                  <h1 className="text-black text-3xl font-bold mb-5">{blogData.title}</h1>
                  <p className="text-gray-700 text-sm">{new Date(blogData.date).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})}</p>
                  <Image src={blogData.image} alt={blogData.title} width={800} height={400} className="rounded-2xl mt-5 mb-10 w-full object-contain h-auto" />
                  <p className='text-black text-lg mb-5'>{blogData.snippet}</p>
                  <div className="blog-modal-sanitized" dangerouslySetInnerHTML={{ __html: blogData.sanitizedHtml }} ></div>
                </div>
                <button className="px-5 py-2 bg-red-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                    deleteArticle()
                    dispatch(toggleBlogModal())
                }} ><FaTrash /> DELETE BLOG</button>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
