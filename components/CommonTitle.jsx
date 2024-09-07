import React from 'react'

export default function CommonTitle( {title, description}) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-t from-[#F76680] to-[#57007B] rounded-lg"></div>
            <p className='text-3xl text-[#1A202C]'>{title}</p>
            <p className='text-3xl font-bold text-[#1A202C]'>{description}</p>
        </div>
    )
}
