import React from 'react'
import CommonTitle from './CommonTitle'

const processes = [
    {
        id: 1,
        title: 'Assemble the right team',
        description: `We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.`,
    },
    {
        id: 2,
        title: 'Tech architecture',
        description: `We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently`,
    },
    {
        id: 3,
        title: 'Code reviews',
        description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells',
    },
    {
        id: 4,
        title: 'Sprint planning',
        description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
    },
    {
        id: 5,
        title: 'Standups & weekly demos',
        description: `Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.`,
    },
    {
        id: 6,
        title: 'Iterative delivery',
        description: `We divide the implementation process into several checkpoints rather than a single deadline.`,
    }
]

export default function Development() {
    return (
        <div className='space-y-3 py-10 w-full max-w-[1440px] mx-auto overflow-hidden'>
            <CommonTitle title='How development' description='Through Alcaline works' />
            <div className="grid grid-cols-3 gap-7 px-5 py-10">
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
