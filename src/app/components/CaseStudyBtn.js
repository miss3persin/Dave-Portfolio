'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import arrow_casestudy from '/public/arrow-case-study.svg'

export const CaseStudyBtn = ({link}) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(link);
    };
  return (
    <button 
    onClick={handleClick}
    className='flex gap-2 text-white font-normal text-xs items-center underline [text-underline-offset:4px]'>
    <p>View Case Study</p>
    <Image
        src={arrow_casestudy}
        alt=""
        width={25}
        height={25}
      />
      </button>
  )
}
