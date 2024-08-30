'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import arrow_socials from '/public/arrow-socials.svg'

export const SocialLinkBtnComponent = ({text, link}) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(link);
    };

  return (
      <button 
      onClick={handleClick}
      className='flex items-center gap-2 font-light text-white text-[0.7rem] sm:text-sm p-1'>
    <Image
        src={arrow_socials}
        alt=""
        // width={12}
        // height={12}
        className='sm:w-[12px] w-[10px] sm:h-[12px] h-[10px]'
        />
        <p>{text}</p>
      </button>
  )
}
