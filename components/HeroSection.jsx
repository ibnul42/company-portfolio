'use client'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-3'>
            <div className="flex flex-col justify-center gap-4 order-2 md:order-1">
                <p className='flex flex-wrap gap-2 font-light text-3xl md:text-5xl'>
                    <span>Great
                    </span>
                    <span className='font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#DE4396] to-[rgba(13,28,159,0.1)]'>Product</span>
                    <span>is</span>
                    <span className='text-[#1A202C] font-bold'>built by great</span>
                    <span className='font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F7666F] to-[#406AFF]'>teams</span>
                </p>
                <p className='text-[#4A5568]'>We help build and manage a team of world-class developers to bring your vision to life.</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    const footer = document.getElementById('footer');
                    if (footer) {
                        footer.scrollIntoView({ behavior: 'smooth' });
                    }
                }} className='px-6 py-3 w-fit rounded-md bg-[#3D63EA] text-white font-semibold inline-block'>Let&apos;s get started</button>
            </div>
            <div className="w-full h-auto order-1 md:order-2">
                <Image src='/assets/hero.png' height={500} width={500} alt='' />
            </div>
        </div>
    )
}
