import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className='relative w-full h-screen flex flex-col'>
            <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted playsInline controls={false}>
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-full px-5 xl:px-20 ">
                <div className={`relative w-full flex justify-between items-start garet py-5`}>
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center rounded-full overflow-hidden">
                        <Image src={"/logo_t_white.svg"} alt="logo" width={200} height={200} className="absolute w-[150px] h-[150px] object-contain animate-spin-slow" />
                        <Image src={"/logo_g_white.svg"} alt="logo" width={200} height={200} className="w-[150px] h-[150px] object-contain" />
                    </div>

                    <div className="hidden lg:flex items-center text-xl translate-y-5">
                        <Link href={"/contact"} className={`px-7 py-4 rounded-xl font-bold border border-background text-primary bg-background hover:text-background hover:bg-transparent duration-300 garet`}>CONTACT US</Link>
                    </div>
                </div>
            </div>


            <div className="relative pb-20 px-5 md:px-20 w-full h-full flex items-end justify-center">
                <div className="relative w-full h-full flex items-end justify-between text-white text-8xl leading-[6rem] tracking-widest font-bold k2d-extrabold">
                    <h2 className='max-w-lg'>Crafting Experiences</h2>
                    <h2 className='absolute top-0 right-0 text-right max-w-lg'>Creating Impact</h2>
                </div>
            </div>
        </div>
    )
}
