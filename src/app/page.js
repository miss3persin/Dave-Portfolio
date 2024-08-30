import React from 'react'
import { NavSection } from './sections/NavSection'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { WorksSection } from './sections/WorksSection'
import { BrandSection } from './sections/BrandSection'
import { TestimonialSection } from './sections/TestimonialSection'

const page = () => {
  return (
    <section className='bg-[#0E0D0F]'>
    <div>
      <NavSection/>
      <HeroSection/>
      <AboutSection/>
      <div className='my-custom-bg h-max w-full'>
      <WorksSection/>
      <BrandSection/>
      <TestimonialSection/>
      </div>
    </div>
  </section>
  )
}

export default page