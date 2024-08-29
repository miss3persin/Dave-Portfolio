import React from 'react'
import { ButtonComponent } from '../components/ButtonComponent'
import Image from 'next/image';
import davetongue from '/public/davetongue.png'
import daveheart from '/public/daveheart.png'
import { SocialLinkBtnComponent } from '../components/SocialLinkBtnComponent';

export const HeroSection = () => {
  return (
    <div className='hero-bg w-full h-max'>

        <div className='container 2xl:px-0 sm:px-10'>

      <div className='text-[#F5F5DC] text-3xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold pt-40 2xl:pt-60 mb-7'>
        <div className='flex items-center 2xl:mb-4'>
          Passionate  <span className='border border-[#FFA051] p-2 ml-1 2xl:ml-2 2xl:mr-4 relative'>
             <div className='w-1.5 h-1 bg-[#FFA051] absolute -top-1 -left-1.5'></div>
             <div className='w-1.5 h-1 bg-[#FFA051] absolute -bottom-1 -left-1.5'></div>
             visual designer,
             <div className='w-1.5 h-1 bg-[#FFA051] absolute -top-1 -right-1.5'></div>
             <div className='w-1.5 h-1 bg-[#FFA051] absolute -bottom-1 -right-1.5'></div>
             </span>
          <Image src={davetongue} alt='' width={100} className='sm:w-16 lg:w-24 w-14' />
        </div>

        <p className='flex items-center 2xl:mb-4'>crafting experiences and building</p>

        <p className='flex items-center'>
          brands.
          <Image src={daveheart} alt='' width={100} className='2xl:ml-4 sm:w-16 lg:w-24 w-14'/>
        </p>
      </div>

      <div className='text-[#DBDBDB] max-w-sm sm:max-w-lg 2xl:max-w-2xl text-xs sm:text-[15px] 2xl:text-lg leading-normal sm:leading-loose mb-7'>
        <p>
          As a visual designer, I'm driven by a passion for crafting exceptional
          experiences and building brands, one success story at a time.
        </p>
      </div>

      <ButtonComponent text='Connect With Me' link=''/>

      <div className='flex lg:gap-10 md:gap-5 mt-20'>
        <SocialLinkBtnComponent text='LINKEDIN' link=''/>
        <SocialLinkBtnComponent text='TWITTER' link=''/>
        <SocialLinkBtnComponent text='DRIBBLE' link=''/>
      </div>

      <div className='h-20'></div>
    </div>
    </div>
  )
}
