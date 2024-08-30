'use client'

import React from 'react'
import Image from 'next/image';
import davesmile from '/public/davesmile.png'
import { SkillsComponent } from '../components/SkillsComponent';

export const AboutSection = () => {
  return (
    <section id='about'>
    <div className='container flex items-center px-10 sm:px-20 py-20 sm:py-40 lg:py-52 justify-center gap-28 relative overflow-hidden'>

        <div data-aos="fade-right" data-aos-duration="1000" className='absolute lg:static lg:block sm:top-[12.5rem] sm:right-[9rem] hidden'>
        <Image
        src={davesmile}
        alt=""
        className='lg:w-72 w-28'
      />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000" className='flex flex-col my-custom-max-width items-center sm:items-start'>
            <p className='text-[#F5F5DC] font-normal text-sm pb-2'>ABOUT ME</p>
            <p className='text-[#F5F5DC] font-semibold text-3xl sm:text-5xl pb-4'>Meet Dave</p>
            <p className='text-[#FFFFFF] text-xs sm:text-sm font-light sm:text-left text-justify leading-5 sm:leading-7 pb-4 lg:pb-2'>As a UI/UX designer, I'm naturally drawn to the intricacies of user experience and the art of crafting visually appealing interfaces. Over the years, I've had the privilege of contributing my design expertise to a spectrum of projects, ranging from small startups to established enterprises. My design not only looks good but resonates with users on a deeper level, creating a meaningful impact.</p>
            <SkillsComponent/>  
        </div>

    </div>
    </section>
  )
}
