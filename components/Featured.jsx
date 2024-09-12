import Image from 'next/image'
import React from 'react'
import CommonTitle from './CommonTitle'

const featuredList = [
    {
        title: '',
        image: '/assets/featured1.png',
        description: 'How to Build a Scalable Application for 1 Million Users on AWS',
    },
    {
        title: '',
        image: '/assets/featured2.png',
        description: 'Scaling Mobile App Infrastructure for Global Users',
    },
    {
        title: '',
        image: '/assets/featured3.png',
        description: 'Optimizing Web Application Performance for E-commerce',
    }
]

export default function Featured() {
    return (
        <div id='blog' className='py-10 space-y-3 w-full max-w-[1440px] mx-auto'>
            <CommonTitle title='Featured' description='Resources' />
            <div className="flex justify-center overflow-hidden gap-4 py-3">
                {featuredList.map((item, index) => (
                    <FeaturedCard key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

const FeaturedCard = ({ item }) => {
    return (
        <div className='flex-shrink-0 w-60 flex flex-col items-center gap-2'>
            <div className='w-full aspect-video rounded-lg overflow-hidden bg-gray-100'>
                <Image src={item.image} height={500} width={500} alt='' className='object-cover' />
            </div>
            <p className='text-sm text-[#8D959C]'>{item.description}</p>
            <div className="w-full flex justify-end">
                <button
                    className='flex gap-2 items-center'
                >
                    <span className='text-sm text-[#57007B]/80 hover:text-[#57007B]'>Read more</span>
                    <Image src='/assets/icons/arrow.svg' width={20} height={20} alt='' className='w-2.5' />
                </button>
            </div>
        </div>
    )
}
