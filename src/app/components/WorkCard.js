'use client'

import React from 'react'
import Image from 'next/image'
import { CaseStudyBtn } from './CaseStudyBtn'

export const WorkCard = ({
  size = 'full', // Default size if not provided
  title, // Title of the work/project
  dateRange, // Date range of the project
  tags = [], // Array of tags for the project
  description, // Description of the project
  logoImage, // Image for the logo or brand
  mainImage // Main image for the project
}) => {
  const sizeClasses = {
    small: 'w-1/4 h-1/4',
    medium: 'w-1/2 h-1/2',
    large: 'w-3/4 h-3/4',
    full: 'w-full h-full'
  }

  return (
    <div className={`rounded-lg bg-[#1A1A1B] ${sizeClasses[size]}`}>
      <div className='px-10 pt-12'>
        <div className='mb-4 flex justify-between'>
          <p className='m-0 text-3xl text-[#DCDCDC]'>{title}</p>
          <div className='w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12'>
            <Image
              src={logoImage}
              alt={`${title} logo`}
              layout='responsive'
              width={195}
              height={40}
              className='object-cover'
            />
          </div>
        </div>

        <div>
          <p className='mb-4 text-[#595959]'>{dateRange}</p>
          <div className='mb-4 flex gap-2'>
            {tags.map((tag, index) => (
              <p
                key={index}
                className='rounded-full bg-[#3B3B3B] p-1 px-3 text-sm text-[#838383]'
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className='mb-4 text-[#7D7D7D]'>{description}</p>
          <CaseStudyBtn />
        </div>
      </div>

      <div className='flex items-end justify-end'>
        <Image src={mainImage} alt={`${title} main`} />
      </div>
    </div>
  )
}
