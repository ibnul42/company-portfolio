import Image from 'next/image'
import React from 'react'
import cn from 'classnames'
import CommonTitle from './CommonTitle'

const caseStudiesList = [
    {
        title: 'Website Design for SCFC Canada',
        image: '/assets/case1.png',
        link: '/case-study/scfc',
        description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
        background: '#F1F2FF'
    },
    {
        title: 'Website Design for SCFC Canada',
        image: '/assets/case2.png',
        link: '/case-study/scfc',
        description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
        background: '#F0FFF7'
    },
    {
        title: 'Website Design for SCFC Canada',
        image: '/assets/case3.png',
        link: '/case-study/scfc',
        description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
        background: '#FFF4F4'
    }
]

export default function CaseStudies() {
    return (
        <div id='case-study' className='py-10 bg-[#f7f7fa]'>
            <div className="w-full max-w-[1440px] mx-auto px-3 space-y-10">
                <CommonTitle title='Our recent' description='Case Studies' />
                <div className="space-y-10">
                    {caseStudiesList.map((item, index) => (
                        <div key={index} className="grid grid-cols-2">
                            <div className="">
                                <Image src={item.image} className='w-full h-auto' width={500} height={500} alt='' />
                            </div>
                            <div
                                style={{
                                    backgroundColor: `${item.background}`
                                }}
                                className="py-3 px-6 rounded-tr-[20px] rounded-br-[20px] flex flex-col">
                                <p className='text-[#2D3748] text-3xl font-semibold py-5'>{item.title}</p>
                                <p className='text-[#4A5568] flex-1 leading-relaxed'>{item.description}</p>
                                <div className="flex justify-end py-5">
                                    <button className='flex items-center gap-2 group'>
                                        <span className='text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#F76680] to-[#57007B] text-sm'>Read More</span>
                                        <Image src='/assets/icons/arrow.svg' width={20} height={20} alt='' className='w-2.5 group-hover:translate-x-1 transition-all' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
