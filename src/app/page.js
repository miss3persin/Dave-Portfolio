import React from 'react'
import { NavSection } from './sections/NavSection'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { WorksSection } from './sections/WorksSection'

const page = () => {
  return (
    <section className='bg-black'>
    <div>
      <NavSection/>
      <HeroSection/>
      <AboutSection/>
      <WorksSection/>
    </div>
  </section>
  )
}

export default page