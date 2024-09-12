'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const items = [
    {
        title: 'Mobile App Development',
        description: 'From simple websites to complex web applications, we build solutions that are fast, responsive, and engaging. Our team combines creativity with technical expertise to bring your web projects to life.',
        image: '/assets/icons/app.png'
    },
    {
        title: 'Software Testing Services',
        description: 'Our testing services guarantee that your software is secure, reliable, and bug-free. We perform thorough tests on functionality, performance, security, and more to ensure your product delivers the best user experience possible.',
        image: '/assets/icons/testing.png'
    },
    {
        title: 'Introducing Our New Product',
        description: 'We’re excited to announce our new product designed to enhance your workflow and boost productivity. Stay tuned for more updates as we roll out this cutting-edge solution for businesses of all sizes.',
        image: '/assets/icons/app.png'
    }
];

export default function Slider() {
    const sliderRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                const isOverflow = sliderRef.current.scrollWidth > sliderRef.current.clientWidth;
                setIsOverflowing(isOverflow);
            }
        };

        // Check for overflow on component mount and window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -260, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 260, behavior: 'smooth' });
        }
    };

    return (
        <div className='relative w-screen'>
            {isOverflowing && (
                <div className="absolute top-0 left-0 w-full h-full pl-3 pr-6 flex justify-between items-center">
                    <button
                        className='w-10 h-10 rounded-full bg-white/40 shadow hover:shadow-md transition-all backdrop-blur z-50 flex justify-center items-center'
                        onClick={handleScrollLeft}
                    >
                        <Image src='/assets/icons/arrow.svg' width={10} height={10} alt='' className='rotate-180' />
                    </button>
                    <button
                        className='w-10 h-10 rounded-full bg-white/40 shadow hover:shadow-md transition-all backdrop-blur z-50 flex justify-center items-center'
                        onClick={handleScrollRight}
                    >
                        <Image src='/assets/icons/arrow.svg' width={10} height={10} alt='' />
                    </button>
                </div>
            )}
            <div
                className="py-10 flex md:justify-center gap-4 overflow-x-hidden scrollbar-hide"
                ref={sliderRef}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-60 bg-white px-2 py-3 rounded-2xl overflow-hidden space-y-2 shadow-[0_2px_15px_rgba(0,0,0,0.1)]">
                        <div className="w-10 h-10 rounded-full border border-[#F76680] flex justify-center items-center">
                            <Image src={item.image} width={20} height={20} alt='' />
                        </div>
                        <p className='font-bold text-transparent bg-gradient-to-bl bg-clip-text from-[#F76680] to-[#57007B]'>{item.title}</p>
                        <p className='text-sm text-[#4A5568] line-clamp-4'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
