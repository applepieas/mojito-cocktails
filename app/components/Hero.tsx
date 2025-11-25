'use client'

import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import Image from 'next/image'
import React, { use } from 'react'



const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' })

    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.06,
      duration: 1,
      ease: 'expo.out',
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.1,
      duration: 1.8,
      ease: 'expo.out',
      delay: 1,
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
      .to('.right-leaf', { y: 200, ease: 'none' }, 0)
      .to('.left-leaf', { y: -200, ease: 'none' }, 0)

  }, [])

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className="title">MOJITO</h1>

        <Image src='/images/hero-left-leaf.png' alt="Hero Left Leaf" className='left-leaf' width={150} height={100} />
        <Image src='/images/hero-right-leaf.png' alt="Hero right Leaf" className='right-leaf' width={150} height={100} />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
              </p>
              <a href="#cocktails">
                View Cocktails
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero