'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import arrow_btn_alt from '/public/arrow-btn-alt.svg'

export const ButtonComponentAlt = ({text, link}) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(link);
    };

  return (
    <button 
    onClick={handleClick}
    className='flex items-center gap-2 rounded-full border border-[#FFA051] text-[#FFA051] font-medium text-xs sm:text-sm lg:text-md px-7 py-3 lg:self-auto'>
    <p>{text}</p>
    <Image
        src={arrow_btn_alt}
        alt=""
        width={25}
        height={25}
      />
      </button>
  )
}
