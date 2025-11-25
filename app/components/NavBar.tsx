'use client'

import { navLinks } from '@/lib/constants/index'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      }
    });
    navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.out'
    });
  });

  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2'>
          <Image src="/images/logo.png" alt="Velvet Pour Logo" width={32} height={32} />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar