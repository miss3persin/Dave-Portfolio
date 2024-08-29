import React from 'react'
import { ButtonComponentAlt } from '../components/ButtonComponentAlt'

export const WorksSection = () => {
  return (
    <div className='my-custom-bg w-full h-max'>

    <div className='container 2xl:px-0 sm:px-10'>

        <div className='flex justify-between'>
            <p className='text-[#F5F5DC] text-5xl font-semibold'>Selected works</p>
            <ButtonComponentAlt text="View All Works" link=""/>
        </div>

        <div></div>
    </div>

    </div>
  )
}
