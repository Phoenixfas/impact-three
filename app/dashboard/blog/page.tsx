import React from 'react'
import TopSection from './TopSection'
import BlogPaginator from './BlogPaginator'
import ViewBlogModal from './ViewBlogModal'
import EditBlogModal from './EditBlogModal'

export default function Blog() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewBlogModal />
        <EditBlogModal />
        <TopSection />
        <BlogPaginator />
    </div>
  )
}
