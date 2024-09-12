import Image from 'next/image'
import React from 'react'
import CommonTitle from './CommonTitle'

const caseStudiesList = [
    {
        title: 'PredictionStrike is a new take on sports investing',
        image: '/assets/case1.png',
        link: '/',
        description: `PredictionStrike is essentially a stock market for professional athletes. The founders saw a unique market opportunity. Sports betting, as it exists, is generally short-term, winner-take-all, and often involves a lot of luck. PredictionStrike, instead, gives users the ability to actually invest in athletes they care about instead of just betting on a game. This means you could’ve bought Tom Brady when he got drafted, hold him over the long term, and well…made a lot of money.`,
        background: '#F1F2FF'
    },
    {
        title: 'Root - ‘Drive’ engagement and behavior change through safe-driving gamification',
        image: '/assets/case2.png',
        link: '/',
        description: `We held discovery workshops and uncovered that their test-drive users were often feeling duped by the app. They would be given a rate estimate based on some qualifying information before using the app’s test drive, then the test drive app would nearly always increase that amount.\nIt turns out that nobody is as good of a driver as they think. Root had the data to prove it. We decided to tackle this challenge by sticking to the core tenant that any gamification should aim to help improve safe driving habits with users so they earn a score that will give them a good rate.\nAdditionally, during our discovery it was revealed that due to technical and security reasons, the experience we would create would need to be separate from their test drive app, but also use data from it. We would need to understand what tokens and API calls the existing test drive app had available to us to inform our feature set.`,
        background: '#F0FFF7'
    },
    {
        title: 'MedsPal - Increasing access to life-saving medicines',
        image: '/assets/case3.png',
        link: '/',
        description: `Over the past year, MPP decided to revamp their site to improve the user experience and bring the interface up to date. To get started, we conducted a UX audit to identify any easy-to-fix usability issues that we could quickly redesign.\nSince we didn’t have much information about how users were interacting with the site, we also conducted interviews with people from various organizations. We found that users appreciated the minimalistic design, but wanted more clarity in the table presentation and some improvements to the search bar and reporting tools.\nIn the redesign, we made the data table more visually appealing by adding some whitespace around the cells and tags for key information. We also added a saved search feature to allow users to easily return to their previous searches, as they mentioned they frequently check back for updates on their queries.`,
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
                        <div key={index}
                        style={{
                            backgroundColor: `${item.background}`
                        }}
                         className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex justify-center items-center">
                                <Image src={item.image} className='w-full h-auto' width={500} height={500} alt='' />
                            </div>
                            <div
                                style={{
                                    backgroundColor: `${item.background}`
                                }}
                                className="py-3 px-6 rounded-tr-[20px] rounded-br-[20px] flex flex-col">
                                <p className='text-[#2D3748] text-3xl font-semibold py-5'>{item.title}</p>
                                <p className='text-[#4A5568] flex-1 leading-relaxed'>
                                    {item.description.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {/* <div className="flex justify-end py-5">
                                    <button className='flex items-center gap-2 group'>
                                        <span className='text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#F76680] to-[#57007B] text-sm'>Read More</span>
                                        <Image src='/assets/icons/arrow.svg' width={20} height={20} alt='' className='w-2.5 group-hover:translate-x-1 transition-all' />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
