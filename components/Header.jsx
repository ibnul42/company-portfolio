import Link from 'next/link'
import React from 'react'

const links = [
  {
    label: 'About',
    href: '/',
  },
  {
    label: 'Services',
    href: '/',
  },
  {
    label: 'Case Studies',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/',
  },
  {
    label: 'How it Works',
    href: '/',
  },
  {
    label: 'Hire',
    href: '/',
  }
]

export default function Header() {
  return (
    <div className='flex justify-between items-center gap-2 px-6 py-3 shadow-[0_4px_40px_0px_rgba(0,0,0,0.15)]'>
      <div className="text-xl font-bold text-sky-600">LOGO</div>
      <nav className='flex'>
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="text-sm font-medium text-[#4A5568] hover:text-gray-800 px-4">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="">
        <button
          className='bg-gradient-to-b from-[#6675F7] hover:from-[#6675F7]/80 to-[#57007B] hover:to-[#57007B]/80 text-white text-sm font-semibold rounded-lg py-3 px-6'
        >Contact us</button>
      </div>
    </div>
  )
}
