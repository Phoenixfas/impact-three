"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogCardProps {
  d: any;
}

export default function BlogCard({ d }: BlogCardProps) {
  const blogs = d;

  const dateConverter = (date: any) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  const checkNovelty = (date: any) => {
    // take the date and compare it with the current date if it is less than 7 days return new
    const newDate = new Date(date);
    const currentDate = new Date();
    const difference = currentDate.getTime() - newDate.getTime();
    const days = difference / (1000 * 3600 * 24);
    if (days <= 7) {
      return "New";
    } else if (days <= 30) {
      return "Recent";
    }
    return "";
  };

  return (
    <div className="w-full px-8 sm:px-[100px] pb-10 flex flex-col items-center gap-5">
      <div className="w-full flex flex-wrap justify-center gap-16">
        {blogs?.map((blog: any, index: any) => (
          <Link
            href={`/blog/${blog._id}`}
            key={index}
            className="group w-[350px] h-[400px] relative book"
          >
            <div className="absolute left-0 top-0 w-full h-full  p-10 bg-[#eee] duration-1000 bookpage">
              {/* <Image
                src={"/logo.png"}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px] object-contain"
                alt="lets work"
                width={1080}
                height={1080}
                quality={100}
              /> */}
              <Image
                className="w-full h-[200px] object-cover rounded-sm mb-3"
                src={blog.image}
                alt={blog.title}
                width={1920}
                height={1080}
                quality={100}
              />
              <p className="relative text-sm mb-5">
                {blog.snippet.slice(0, 100)}...
              </p>
              <p className="float-right text-sm">
                {dateConverter(blog.date)}
              </p>
            </div>
            <div className="relative overflow-hidden w-full h-full bg-[#fff] border-2 border-[var(--foreground)] duration-1000 bookcover">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
                src={blog.image}
                alt={blog.title}
                width={1920}
                height={1080}
                quality={100}
              />
              <div className="relative w-full h-full flex flex-col items-center bg-[#ffffffaa] pt-32 pb-10 px-7 gap-10 ">
                <div className="absolute left-10 top-10 -translate-y-1/2 rotate-45 w-10 h-80 bg-[var(--primary)]"></div>
                <div className="absolute left-12 top-10 -translate-y-1/2 rotate-45 w-3 h-80 bg-[#fff]"></div>
                <Image
                  className="max-w-[200px] object-contain"
                  src={"/logo.png"}
                  alt="logo"
                  width={1080}
                  height={1080}
                  quality={100}
                />
                <h2 className="text-center text-2xl text-[var(--foreground)] font-bold">
                  {blog.title}
                </h2>
                <span className="absolute px-2 py-2 text-sm w-fit bottom-2 right-4 text-[var(--foreground)]">
                  {checkNovelty(blog.date) && (
                    <span className="px-4 py-1 rounded-lg bg-[var(--theme-blue)]">
                      {checkNovelty(blog.date)}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
