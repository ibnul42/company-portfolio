import React from 'react'
import CommonTitle from './CommonTitle'
import Image from 'next/image'
import cn from 'classnames'

const items = [
    {
        title: 'Build the right team to scale',
        description: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers',
        image: '/assets/meeting.png',
        caption: '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
        user: {
            image: '/assets/ceo.png',
            name: 'Jeewa markram',
            title: 'CEO'
        }
    },
    {
        title: 'Build the right team to scale',
        description: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers',
        image: '/assets/meeting.png',
        caption: '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
        user: {
            image: '/assets/ceo.png',
            name: 'Jeewa markram',
            title: 'CEO'
        }
    },
    {
        title: 'Build the right team to scale',
        description: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers',
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
        <div className='w-full max-w-[1440px] mx-auto py-10 space-y-10'>
            <CommonTitle title='Way of building' description='Great Software' />
            <div className="space-y-10">
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-5">
                        <div className={cn("py-5 px-10 flex flex-col justify-between", {
                            "order-2": index % 2 === 1
                        })}>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p className='text-[#2D3748]'>{item.description}</p>
                            <p className='text-xl'>Our delivery model helps you cut costs and deliver within budget.</p>
                            <p className='italic text-transparent bg-clip-text bg-gradient-to-b from-[#F76680] to-[#57007B]'>{item.caption}</p>
                            <div className="flex gap-2 items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <Image src={item.user.image} width={100} height={100} alt='' className='' />
                                </div>
                                <div className="">
                                    <p className='font-semibold'>{item.user.name}</p>
                                    <p>{item.user.title}</p>
                                </div>
                            </div>
                        </div>
                        <div className={cn("w-full h-full flex justify-center items-center", {
                            "order-1": index % 2 === 1
                        })}>
                            <Image src={item.image} width={500} height={500} alt='' className='' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
