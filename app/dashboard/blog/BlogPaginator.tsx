'use client'
import React,{useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";
import BlogCard from './BlogCard'
// import { GET_ARTICLES } from '../../graphql/queries/articleQueries';
// import { useQuery } from '@apollo/client';
import BlogLoading from './BlogLoading';
import useFetch from '../../../hooks/useFetch';

interface BlogPaginatorProps {
    d: any
}

export default function BlogPaginator() {
    const { loading, error, data } = useFetch('news');

    if (loading) return <BlogLoading />;
    if (error) return <p>Error :(</p>;

    return (
        <Paginator d={data} />
    )
}


const Paginator = ({d}: BlogPaginatorProps) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    const itemsPerPage = 16;
    const data = d
  
    useEffect(() => {
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
      
  
    }, [itemOffset, itemsPerPage]);
  
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
  
  
    return (
      <>
          <BlogCard d={currentItems} />
  
          <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              // renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              pageClassName={"pagination__page"}
              activeClassName={"pagination__pageActive"}
              previousClassName={"pagination__pagePrev"}
              nextClassName={"pagination__pageNext"}
          />
        </>
      )
  }