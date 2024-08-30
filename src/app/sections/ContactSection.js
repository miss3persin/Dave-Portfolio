import React from 'react'
import { ButtonComponent } from '../components/ButtonComponent'
import { SocialLinkBtnComponent } from '../components/SocialLinkBtnComponent'

export const ContactSection = () => {
  return (
    <div className='container py-28 sm:px-10 2xl:px-0'>
      <div className='pb-14 flex flex-col items-center md:items-start'>
        <p className='pb-8 text-6xl text-center md:text-left font-semibold leading-tight tracking-wider text-white lg:leading-normal'>
          HAVE A NICE IDEA? <br></br> LET'S TALK
        </p>
        <ButtonComponent text='Connect With Me' />
      </div>

      <div className='flex-col md:flex-row flex justify-between items-center'>
        <div>
          <p className='pb-4 text-xl text-center md:text-left font-light text-white underline [text-decoration-thickness:1.3px] [text-underline-offset:5px]'>
            Daveasukelly@gmail.com
          </p>
          <p className='text-sm font-light text-[#9A9A9A]'>
            Click On Mail If You Would Like To Contact Us
          </p>
        </div>

        <div className='flex mt-10 md:mt-0 md:gap-5 lg:gap-10'>
          <SocialLinkBtnComponent text='LINKEDIN' link='' />
          <SocialLinkBtnComponent text='TWITTER' link='' />
          <SocialLinkBtnComponent text='DRIBBLE' link='' />
        </div>
      </div>
    </div>
  )
}
