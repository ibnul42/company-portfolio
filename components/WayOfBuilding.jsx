import React from 'react'
import CommonTitle from './CommonTitle'
import Image from 'next/image'
import cn from 'classnames'

const items = [
    {
        title: 'Continuous Integration & Deployment',
        description: 'We implement continuous integration (CI) and continuous deployment (CD) practices, ensuring that code is frequently merged, tested, and deployed in a seamless process. This allows us to detect and resolve issues early, improve collaboration, and deliver updates faster without compromising on quality.',
        image: '/assets/meeting.png',
        caption: '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
        user: {
            image: '/assets/ceo.png',
            name: 'Jeewa markram',
            title: 'CEO'
        }
    },
    {
        title: 'Scalability and Performance Optimization',
        description: 'As your software grows, it needs to handle increasing user demands without losing efficiency. We focus on building scalable architectures and optimizing performance to ensure your software can handle high traffic, complex operations, and large data sets, all while maintaining a smooth user experience.',
        image: '/assets/meeting.png',
        caption: '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
        user: {
            image: '/assets/ceo.png',
            name: 'Jeewa markram',
            title: 'CEO'
        }
    }
]
export default function WayOfBuilding() {
    return (
        <div className='w-full max-w-[1440px] mx-auto py-10 px-3 space-y-10'>
            <CommonTitle title='Way of building' description='Great Software' />
            <div className="space-y-10">
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 gap-5">
                        <div className={cn("py-5 px-5 lg:px-10 flex flex-col gap-2 justify-between", {
                            "md:order-2": index % 2 === 1
                        })}>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p className='text-[#2D3748]'>{item.description}</p>
                            <p className='text-xl'>Our delivery model helps you cut costs and deliver within budget.</p>
                            <p className='italic text-transparent bg-clip-text bg-gradient-to-b from-[#F76680] to-[#57007B]'>{item.caption}</p>
                            {/* <div className="flex gap-2 items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <Image src={item.user.image} width={100} height={100} alt='' className='' />
                                </div>
                                <div className="">
                                    <p className='font-semibold'>{item.user.name}</p>
                                    <p>{item.user.title}</p>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className={cn("w-full h-full flex justify-center items-center", {
                            "order-1": index % 2 === 1
                        })}>
                            <Image src={item.image} width={500} height={500} alt='' className='' />
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
