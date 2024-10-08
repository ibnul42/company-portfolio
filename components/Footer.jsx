import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Case Studies',
    href: '#case-study',
  },
  {
    label: 'How it Works',
    href: '#workflow',
  },
  {
    label: 'Development',
    href: '#development',
  },
  {
    label: 'Blogs',
    href: '#blog',
  },
]

export default function Footer() {
  return (
    <footer id='footer' className='divide-y divide-[#CBD5E0] bg-white'>
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-12 gap-5 px-10 py-5 text-[#718096]">
        <div className="col-span-4 space-y-3">
          <Link
            href='/'
            className="text-xl font-bold text-sky-600">
            <Image src='/assets/logo.png' width={100} height={100} alt='' className='w-14' />
          </Link>
          <p>For more information about our services or to schedule a consultation, feel free to reach out!</p>
        </div>
        <div className="col-span-2 space-y-3">
          <p className='font-bold text-[#4A5568]'>Links</p>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-gray-800">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-3 space-y-3">
          <p className='font-bold text-[#4A5568]'>Contact info</p>
          <div className="space-y-2">
            <p>Address: 1309 Coffeen Ave, STE 1200, Sheridan, WY 82801</p>
            <p>Phone: (863) 240-0402</p>
            <p>Email: santiagoleonhoffmann@gmail.com</p>
          </div>
        </div>
        <div className="col-span-3 flex gap-4 items-center justify-center">
          <Link href='/' className='h-10 w-10 flex items-center justify-center rounded-full shadow-[0_4px_14px_0px_rgba(0,0,0,0.15)]'>
            <Image src='/assets/icons/facebook.svg' width={20} height={20} alt='' className='w-5 h-5' />
          </Link>
          <Link href='/' className='h-10 w-10 flex items-center justify-center rounded-full shadow-[0_4px_14px_0px_rgba(0,0,0,0.15)]'>
            <Image src='/assets/icons/instagram.svg' width={20} height={20} alt='' className='w-5 h-5' />
          </Link>
          <Link href='/' className='h-10 w-10 flex items-center justify-center rounded-full shadow-[0_4px_14px_0px_rgba(0,0,0,0.15)]'>
            <Image src='/assets/icons/twitter.svg' width={20} height={20} alt='' className='w-5 h-5' />
          </Link>
          <Link href='/' className='h-10 w-10 flex items-center justify-center rounded-full shadow-[0_4px_14px_0px_rgba(0,0,0,0.15)]'>
            <Image src='/assets/icons/linkedin.svg' width={20} height={20} alt='' className='w-5 h-5' />
          </Link>

        </div>
      </div>
      <p className='py-5 text-center text-[#4A5568] text-sm'>© 2024 Copyright by IK Developers. All rights reserved.</p>
    </footer>
  )
}
