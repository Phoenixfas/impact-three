'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoCaretForward, IoGameController, IoBulbSharp } from 'react-icons/io5'
import { AiFillDashboard } from 'react-icons/ai'
import { GiNewspaper, GiBarracksTent, GiPublicSpeaker } from 'react-icons/gi'
import { MdArticle } from 'react-icons/md'
import { FaUsers, FaPenAlt, FaFlagCheckered, FaChalkboardTeacher } from 'react-icons/fa'
import { SiHackaday, SiGithubsponsors } from 'react-icons/si'
import { TfiVideoClapper } from 'react-icons/tfi'

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        switch (pathname.split('/')[2]) {
            case undefined:
                setActive('dashboard')
                break
            case 'blog':
                setActive('blog')
                break
            case 'press':
                setActive('press')
                break
            case 'newsletter':
                setActive('newsletter')
                break
            case 'vendors':
                setActive('vendors')
                break
            case 'visitors':
                setActive('visitors')
                break
            case 'sponsors':
                setActive('sponsors')
                break
            case 'speakers':
                setActive('speakers')
                break
            case 'partners':
                setActive('partners')
                break
            
            default:
                break
        }
    }, [pathname])
  return (
    <div className={`relative ${isOpen ? "w-72 sidebar" : "w-20"} h-screen m-0 duration-300 rounded-r-md bg-[var(--foreground)]`}>
        <div className='bg-[var(--foreground)] border-2 rounded-full absolute right-0 top-20 translate-x-1/2 cursor-pointer w-6 h-6 flex items-center justify-center'>
            <IoCaretForward className={`${isOpen ? "rotate-180" : ""} duration-300`} color='#fff' size={20} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className='h-28 w-full flex items-start justify-center pt-5'>
            <Image className={`${isOpen ? "w-[200px] h-[40px]" : "w-[50px] h-[50px]"} object-contain duration-300`} src='/logo_rev.svg' width={200} height={200} alt="Logo" priority/>
        </div>

        <div className='flex flex-col  gap-1 w-full p-4'>
            <Link href='/dashboard' onClick={() => setActive('dashboard')} title="dashboard">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='dashboard' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <AiFillDashboard className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Dashboard</p>}
                </div>
            </Link>
            <Link href='/dashboard/blog' onClick={() => setActive('blog')} title="blog">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='blog' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <MdArticle className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Blog</p>}
                </div>
            </Link>
            {/* <Link href='/dashboard/press' onClick={() => setActive('press')} title="press">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='press' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaPenAlt className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Press Material</p>}
                </div>
            </Link> */}
            {/* <Link href='/dashboard/newsletter' onClick={() => setActive('newsletter')} title="newsletter">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='newsletter' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <GiNewspaper className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Newsletter</p>}
                </div>
            </Link> */}


            <hr />


            {/* <Link href='/dashboard/vendors' onClick={() => setActive('vendors')} title="exhibitors">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='vendors' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <GiBarracksTent className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Exhibitors</p>}
                </div>
            </Link> */}
            {/* <Link href='/startups' onClick={() => setActive('startups')} title="Business Corner">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='startups' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <IoBulbSharp className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Business Corner</p>}
                </div>
            </Link> */}
            {/* <Link href='/dashboard/visitors' onClick={() => setActive('visitors')} title="visitors">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='visitors' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaUsers className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Visitors</p>}
                </div>
            </Link>
            <Link href='/dashboard/sponsors' onClick={() => setActive('sponsors')} title="sponsors">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='sponsors' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <SiGithubsponsors className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Sponsors</p>}
                </div>
            </Link>
            <Link href='/dashboard/speakers' onClick={() => setActive('speakers')} title="speakers">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='speakers' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <GiPublicSpeaker className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Speakers</p>}
                </div>
            </Link>
            <Link href='/dashboard/partners' onClick={() => setActive('partners')} title="partners">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active==='partners' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <TfiVideoClapper className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Partners</p>}
                </div>
            </Link> */}
            
        </div>
    </div>
  )
}
