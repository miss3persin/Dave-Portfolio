'use client'

import React from 'react'
import { CompaniesComponent } from '../components/CompaniesComponent'

export const BrandSection = () => {
  return (
    <div className=''>

    <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-center" className='container py-20 px-10 2xl:px-0 sm:flex sm:flex-col sm:items-center lg:items-start'>
        <p className='text-[#FFFFFF] 2xl:text-7xl xl:text-6xl lg:text-5xl text-xl sm:text-2xl md:text-4xl text-center lg:text-left font-semibold pb-2 max-w-7xl'>Designing For Start-Ups, Branded Companies, And Agencies.</p>
        <CompaniesComponent/>
    </div>

    </div>
  )
}
