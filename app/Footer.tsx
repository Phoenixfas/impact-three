'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from 'next/navigation'

export default function Footer() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const p = pathname.split('/')[1] || ''

  useEffect(() => {
    if (p === 'dashboard') {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }, [p])
  if (isActive) return (
    <footer className='relative w-full flex flex-col px-5 xl:px-20 bg-[var(--foreground)]'>
      <div className="w-full flex flex-col items-center pt-20 pb-10 border-b border-[var(--background)] gap-10">
        <Image className={`w-[200px] sm:w-[300px] object-contain`} src={"/logo.svg"} alt="logo" width={300} height={70} />

        <div className="w-fit flex flex-wrap items-center justify-center gap-8 text-2xl text-[var(--background)] mb-5">
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
          <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></Link>
        </div>
        <div className="w-fit flex flex-wrap items-center justify-center gap-10 text-xl text-[var(--background)]">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="#">Why Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-8">
        <p className="text-center garet text-sm text-[var(--background)] opacity-75">&copy; 2025 Impact Makers Events. All rights reserved.</p>
      </div>
    </footer>
  )
}
