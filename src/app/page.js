import React from 'react'
import { NavSection } from './sections/NavSection'
import { HeroSection } from './sections/HeroSection'

const page = () => {
  return (
    <section className='bg-black'>
    <div>
      <NavSection/>
      <HeroSection/>
    </div>
  </section>
  )
}

export default page