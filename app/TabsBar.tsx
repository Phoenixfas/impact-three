'use client'
import { useState, useEffect } from 'react'
import { BiHomeAlt2 } from "react-icons/bi";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function TabsBar() {
    const pathname = usePathname()
    const p = pathname.split('/')[1] || ''
    const [activeTab, setActiveTab] = useState(0)
    const tabs = [
        { id: 0, content: <BiHomeAlt2 />, pathname: '' },
        { id: 1, content: 'About', pathname: 'about' },
        { id: 2, content: 'Services', pathname: 'services' },
        { id: 3, content: 'Blogs', pathname: 'blogs' },

    ]

    useEffect(() => {
        const activeTabIndex = tabs.findIndex(tab => tab.pathname === p)
        setActiveTab(activeTabIndex !== -1 ? activeTabIndex : 0)
    }, [p, tabs])

    return (
        <div className='fixed bottom-10 left-1/2 -translate-x-1/2 z-[999999] flex items-center gap-2 rounded-full bg-secondary p-1'>
            {tabs.map((tab, index) => (
                <Link key={index} href={"/" + tab.pathname} className={`py-2 px-5 rounded-full ${activeTab === tab.id && "bg-primary"} hover:bg-primary ${tab.id === 0 ? "text-2xl" : "text-base"} text-white duration-300`}>
                    {tab.content}
                </Link>
            ))}
        </div>
    )
}
