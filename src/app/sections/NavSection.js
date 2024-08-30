'use client'

import React from 'react'

export const NavSection = () => {
  return (
    <>
      {/* <div className='fixed z-40 h-32 w-full'>
        <div className='absolute
         inset-0 bg-gradient-to-b from-white/0 to-transparent backdrop-blur-sm'></div>
      </div> */}

      <div class='gradient-blur fixed'></div>

      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200" className='fixed z-50 w-full'>
        <div className='container px-10 lg:px-10 2xl:px-0'>
          <div className='flex items-center justify-between pb-10 pt-10 2xl:pb-14 2xl:pt-14'>
            <div className='flex gap-1.5 2xl:gap-2'>
              <p className='text-lg font-semibold text-white 2xl:text-3xl'>
                Dave Tech
              </p>
              <div className='mt-3.5 h-1.5 w-1.5 rounded-full bg-[#FFA051] p-0 2xl:mt-6'></div>
            </div>

            <div className='rounded-3xl bg-gradient-to-b from-[#ff9f5125] to-[#ffa05100] p-px'>
              <div className='rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#8F878766] to-[#8F878766] px-9 py-3 dark:bg-black'>
                <ul className='flex gap-6 text-sm font-extralight text-[#FFFFFF] 2xl:gap-9 2xl:text-base'>
                  <li>Home</li>
                  <li>About Me</li>
                  <li>Projects</li>
                  <li>Contact Me</li>
                </ul>
              </div>
            </div>

            <div>
              <button className='rounded-full bg-white px-5 py-3 text-xs font-black 2xl:text-base'>
                Download Résumé
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
