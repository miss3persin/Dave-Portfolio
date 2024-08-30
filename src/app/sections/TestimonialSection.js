'use client'

import React from 'react'
import { ButtonComponentAlt } from '../components/ButtonComponentAlt'
import Image from 'next/image'
import HR_assist from '/public/HR-assistant.png'
import arrow_socials from '/public/arrow-socials.svg'

export const TestimonialSection = () => {
  return (
    <div className=''>
      <div className='container flex pb-20 px-10 justify-between items-center gap-12 md:gap-16 lg:gap-28 xl:gap-44 flex-col-reverse lg:flex-row '>
        <div className='lg:pr-0 lg:pl-0 flex flex-col px-28 items-center lg:items-start'>
          <p className='pb-6 text-[1.4rem] md:text-[2rem] lg:text-3xl xl:text-[2.5rem] font-semibold text-[#D7D7D7] max-w-[88rem] leading-tight lg:leading-[1.3] tracking-wide text-center lg:text-left'>
            I begin with understanding & researching before creating. Every
            concept is carefully crafted before release.
          </p>
          <ButtonComponentAlt text='See My Process' />
        </div>

        <div className='flex flex-col gap-5 lg:pr-20 lg:pl-0 xl:pr-16 px-28 md:px-44 items-center lg:items-start pb-10 lg:pb-0'>
          <p className='lg:max-w-[65rem] xl:max-w-[68rem] text-sm lg:font-extralight xl:font-light xl:leading-loose text-[#FFFFFF]'>
            Isaac was a pleasure to work with and by far the best designer I've
            worked with in my engineering career. He's very consistent and
            thoughtful and takes constructive feedback well, especially when it
            comes to designing alongside more technical specs.
          </p>

          <div className='flex items-center gap-4'>
            <div className='hidden lg:flex lg:flex-col'>
              <Image
                src={HR_assist}
                alt='HR Assistant'
                layout='responsive'
                // width={195}
                // height={40}
                className='w-[50px] object-cover'
              />
            </div>
            <div>
              <div className='text-white flex items-center text-[0.75rem] font-light gap-2'>
                HR Assistant (Mercedes Benz){' '}
                <div className='w-1.5'>
                <Image
                  src={arrow_socials}
                  alt='HR Assistant'
                  layout='responsive'
                  // width={195}
                  // height={40}
                  className='w-[10px] object-cover'
                />
                </div>
              </div>

              <p className='text-[0.7rem] text-[#696969]'>Feolami Awe Joseph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
