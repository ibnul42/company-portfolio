import React from 'react'
import CommonTitle from './CommonTitle'

const processes = [
    {
        id: 1,
        title: 'Assemble the right team',
        description: `We take care of vetting and building your team, so you can focus on your vision while we handle the logistics.`,
    },
    {
        id: 2,
        title: 'Tech architecture',
        description: `Our experts design scalable, flexible architectures by breaking down monolithic apps into efficient microservices, allowing teams to work faster and independently.`,
    },
    {
        id: 3,
        title: 'Code reviews',
        description: 'Every project undergoes comprehensive code reviews to catch issues like performance bottlenecks or memory leaks before they become a problem.',
    },
    {
        id: 4,
        title: 'Sprint planning',
        description: 'Our agile sprint planning involves your team in a collaborative effort to ensure that each phase of the project meets your expectations.',
    },
    {
        id: 5,
        title: 'Standups & weekly demos',
        description: `Regular standups and demos keep everyone aligned and allow for ongoing feedback to improve the product.`,
    },
    {
        id: 6,
        title: 'Iterative delivery',
        description: `We believe in continuous delivery, ensuring your project is broken into manageable milestones, allowing for better visibility and adjustments as needed.`,
    }
]

export default function Development() {
    return (
        <div id='development' className='space-y-3 py-10 w-full max-w-[1440px] mx-auto overflow-hidden'>
            <CommonTitle title='How Bluesky' description='Information Works' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 py-10">
                {processes.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 p-6 mx-2 rounded-lg shadow-md border">
                        <div className="flex gap-2">
                            <p className='flex-shrink-0 text-transparent text-lg font-bold bg-clip-text bg-gradient-to-t from-[#F76680] to-[#57007B]'># {item.id}</p>
                            <h3 className='text-lg font-bold'>{item.title}</h3>
                        </div>
                        <p className='text-[#718096] font-light text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
