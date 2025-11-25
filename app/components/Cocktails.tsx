'use client'

import { cocktailLists, mockTailLists } from '@/lib/constants'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import React from 'react'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    })

    parallaxTimeline
      .from('#c-left-leaf', { x: -100, y: 100 })
      .from('#c-right-leaf', { x: 100, y: 100 }, 0)
  })

  return (
    <section id='cocktails' className='noisy'>
      <Image src='/images/cocktail-left-leaf.png' alt="Cocktails Left Leaf" id='c-left-leaf' width={150} height={100} />
      <Image src='/images/cocktail-right-leaf.png' alt="Cocktails Right Leaf" id='c-right-leaf' width={150} height={100} />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price} </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails