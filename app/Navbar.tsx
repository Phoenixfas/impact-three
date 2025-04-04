'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const pathname = usePathname()
    const p = pathname.split('/')[1] || ''

    const mobileRef = useRef<HTMLDivElement>(null)
    const [mobile, setMobile] = useState(false)

    const toggleMobile = () => {
        setMobile(!mobile)
    }

    useEffect(() => {
        if (mobileRef.current) {
            if (mobile) {
                mobileRef.current.style.transform = 'translateX(0%)'
            } else {
                mobileRef.current.style.transform = 'translateX(100%)'
            }
        }

        if (p === 'dashboard') {
            setIsActive(false)
        } else {
            setIsActive(true)
        }

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [p, mobile, mobileRef])


    if (isActive) return (
        <>
            <nav className={`fixed top-0 left-0 z-[99999999] w-full flex px-5 xl:px-20 ${isScrolled ? "bg-[var(--foreground)]" : "bg-transparent"} duration-300`} role='navigation'>
                <div className={`relative w-full flex justify-between items-center h-20 ${isScrolled ? "text-[var(--background)] border-b border-[var(--background)]" : "text-[var(--background)]"} relative garet`}>
                    <Link href={"/"} className="flex items-center">
                        <Image className={`w-[200px] sm:w-[250px] object-contain`} src={isScrolled ? "/logo.svg" : "/logo_white.svg"} alt="logo" width={250} height={70} />
                    </Link>
                    <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-10 text-xl">
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/blog">Blogs</Link>
                        <Link href="/#why-us">Why Us</Link>
                    </div>
                    <div className="hidden lg:flex items-center text-xl ">
                        <Link href={"/contact"} className={` px-7 py-2 border ${isScrolled ? "text-[var(--foreground)] hover:text-[var(--background)] bg-[var(--background)] hover:bg-[var(--primary)] border-[var(--primary)]" : "text-[var(--background)] hover:text-[var(--background)] bg-[var(--foreground)] hover:bg-[var(--primary)] border-[var(--background)]"} duration-300 garet`}>CONTACT US</Link>
                    </div>
                </div>
                <div className="relative flex-[1] flex justify-end items-center cursor-pointer lg:hidden" onClick={() => toggleMobile()}>
                    <div className={`h-8 w-8 p-1 border ${isScrolled ? "border-[var(--background)] text-[var(--background)]" : "border-[var(--background)] text-[var(--background)]"} rounded-md text-4xl flex items-center justify-center`}>
                        <HiOutlineMenuAlt3 />
                    </div>
                </div>
            </nav>

            {/* /////////////////////////////////////// Mobile nav /////////////////////////////////// */}

            <div ref={mobileRef} className="fixed top-0 left-0 z-[999999999999] w-full h-screen overflow-auto bg-[var(--foreground)] flex flex-col items-center justify-center text-center gap-[50px] translate-x-full transition duration-300">
                <div className="absolute top-[20px] right-[20px] text-3xl text-[var(--background)] cursor-pointer" onClick={() => toggleMobile()}>
                    <AiOutlineClose />
                </div>

                <div className="relative flex flex-col items-center gap-10 text-sm mokoto">
                    <Link href={"/about"} className="font-semibold text-[var(--background)] duration-300" onClick={() => toggleMobile()}>About Us</Link>
                    <Link href={"/services"} className="font-semibold text-[var(--background)] duration-300" onClick={() => toggleMobile()}>Services</Link>
                    <Link href={"/blog"} className="font-semibold text-[var(--background)] duration-300" onClick={() => toggleMobile()}>Blogs</Link>
                    <Link href={"/#why-us"} className="font-semibold text-[var(--background)] duration-300" onClick={() => toggleMobile()}>Why Us</Link>
                    <Link href={"/contact"} className={`font-semibold hover:text-[var(--foreground)] hover:bg-[var(--background)] duration-300 border px-5 py-2 ${isScrolled ? "bg-transparent border-[var(--background)] text-[var(--background)]" : "bg-[var(--background)] text-[var(--foreground)] border-transparent"}`} onClick={() => toggleMobile()}>CONTACT US</Link>
                </div>
            </div>
        </>
    )
}
