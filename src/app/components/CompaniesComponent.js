'use client'

import React from 'react'
import Image from 'next/image';
import mercedes from '/public/mercedes.png'
import procurerex from '/public/procurerex.png'
import chwwwart from '/public/chuwwwart.png'
import genius from '/public/genius.png'
import protrainer from '/public/protrainer.png'

export const CompaniesComponent = () => {
  return (
    <div className="flex items-center lg:pl-0 lg:gap-14 2xl:gap-20 lg:pr-48 2xl:pr-0 px-10 gap-5 md:px-10 md:gap-10">
    <div className="image">
      <Image src={mercedes} alt="mercedes" width={262} height={52} className='lg:pt-12 pt-4 md:pt-6'/>
    </div>
    <div className="image">
      <Image src={procurerex} alt="procurerex" width={177} height={44}  />
    </div>
    <div className="image">
      <Image src={chwwwart} alt="chuwu.art" width={189} height={57} />
    </div>
    <div className="image">
      <Image src={genius} alt="genius" width={150} height={30}  />
    </div>
    <div className="image">
      <Image src={protrainer} alt="protrainer" width={147} height={52} />
    </div>
  </div>
  )
}
