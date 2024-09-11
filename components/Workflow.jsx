import React from 'react'
import CommonTitle from './CommonTitle'
import Image from 'next/image'

const approach = [
    {
        title: `UX Driven Engineering`,
        description: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
        source: '/assets/icons/ux.svg',
        bg: {
            from: '#29272E',
            to: '#27272E'
        }
    },
    {
        title: `Developing Shared Understanding`,
        description: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
        source: '/assets/icons/dev.svg',
        bg: {
            from: '#68DBF2',
            to: '#509CF5'
        }
    },
    {
        title: `Proven Experience and Expertise`,
        description: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
        source: '/assets/icons/heart.svg',
        bg: {
            from: '#FF92AE',
            to: '#FF3D9A'
        }
    },
    {
        title: `Security & Intellectual Property (IP)`,
        description: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
        source: '/assets/icons/shield.svg',
        bg: {
            from: '#67E9F1',
            to: '#24E795'
        }
    },
    {
        title: `Code Reviews`,
        description: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
        source: '/assets/icons/tick.svg',
        bg: {
            from: '#FFEF5E',
            to: '#F7936F'
        }
    },
    {
        title: `Quality Assurance & Testing`,
        description: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
        source: '/assets/icons/lock.svg',
        bg: {
            from: '#F76680',
            to: '#57007B'
        }
    },
]

export default function Workflow() {
    return (
        <div id='workflow' className='bg-[#F7F7FA] py-10'>
            <div className="w-full max-w-[1440px] mx-auto px-6 space-y-10">
                <CommonTitle title='Our design and' description='Development approach' />
                <div className="grid grid-cols-2 gap-4">
                    {approach.map((item, index) => (
                        <div key={index} className="bg-[#FAFAFA] border border-[#E7DAED] py-6 px-4 flex gap-3">
                            <div className="flex-shrink-0 rounded-md w-10 h-10 flex justify-center items-center"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom right, ${item.bg.from}, ${item.bg.to})`,
                                }}
                            >
                                <Image src={item.source} width={20} height={20} alt='' className='w-5 h-5' />
                            </div>
                            <div className="space-y-1">
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-sm font-light'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
