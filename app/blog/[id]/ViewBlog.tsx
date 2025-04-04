"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import blogs from '../../../data/blogs'
import Recommended from "./Recommended";
import Hero from "./Hero";
import Link from "next/link";

export default function ViewBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState<any>();
  const [loading, setLoading] = useState(true);
  const dateConverter = (date: any) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  useEffect(() => {
    if (id) {
      fetch(`/api/news/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading)
    return <div className="w-full h-[500px] bg-gray-300 animate-pulse"></div>;

  return (
    blog && (
      <>
        <Hero title={blog.title} date={blog.date} />
        <div className="relative w-full px-5 md:px-[80px] xl:px-[120px] mb-[100px]">
          <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-14 xl:gap-[100px]">
            <div className="min-w-[800px]">
              <div className="w-full mb-10 relative">
                <span className="absolute px-8 py-3 w-fit rounded-md top-3 left-7 bg-[var(--background)]">
                  {dateConverter(blog.date)}
                </span>
                <Image
                  src={"/logo_rev.png"}
                  alt="Logo"
                  width={200}
                  height={200}
                  className="w-[200px] h-[30px] absolute top-5 right-5 object-contain select-none"
                />
                <Image
                  className="w-full h-[500px] object-cover"
                  src={blog.image}
                  alt={blog.title}
                  width={1920}
                  height={1080}
                  quality={100}
                />
              </div>
              {/* <h1 className='text-4xl font-bold mb-10'>{blog.title}</h1> */}
              {/* <p className="text-gray-700 text-base mb-10">{dateConverter(blog.date)}</p> */}
              <div className="text-base relative">
                <div className="w-full h-full absolute -z-10 top-0 left-0 flex justify-center items-center">
                  <Image
                    src={"/logo.png"}
                    alt="Logo"
                    width={200}
                    height={200}
                    quality={100}
                    className="h-[70px] w-[300px] object-contain select-none opacity-25"
                  />
                </div>
                <div
                  className="blog-sanitized text-base mb-5"
                  dangerouslySetInnerHTML={{ __html: blog.sanitizedHtml }}
                ></div>
                {/* {blog.fileAttached.length > 0 ? (
                  <div className="w-full relative flex flex-col gap-5 justify-center mt-10">
                    <h2 className="text-[var(--theme-color)] font-semibold text-xl mb-5 text-center">
                      Attached Files
                    </h2>
                    <div className="flex flex-col gap-5 items-center">
                      {blog.fileAttached.map((f: any, index: any) => {
                        return (
                          <Link
                            key={index}
                            className="button buttonSmall"
                            href={f}
                            download={f}
                          >
                            Download Attached File
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <></>
                )} */}
              </div>
            </div>
            <Recommended />
          </div>
        </div>
      </>
    )
  );
}
