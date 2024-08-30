'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import arrow_btn from '/public/arrow-btn.svg'

export const ButtonComponent = ({text, link}) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(link);
    };

  return (
    <button 
    onClick={handleClick}
    className='flex items-center gap-2 bg-[#FFA051] rounded-full font-bold text-md px-6 py-3.5'>
    <p>{text}</p>
    <Image
        src={arrow_btn}
        alt=""
        width={25}
        height={25}
      />
      </button>
  )
}
