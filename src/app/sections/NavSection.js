import React from 'react'

export const NavSection = () => {
  return (
    <div className='fixed w-full'>
        <div className='container 2xl:px-0 lg:px-10 '>
        <div className='flex items-center justify-between pt-10 2xl:pt-14'>
        <div className='flex gap-1.5 2xl:gap-2'>
            <p className='text-white font-semibold text-lg 2xl:text-3xl'>Dave Tech</p> <div className='w-1.5 h-1.5 rounded-full bg-[#FFA051] p-0 mt-3.5 2xl:mt-6'></div>
        </div>
        
        <div className="rounded-3xl p-px bg-gradient-to-b from-[#ff9f5125] to-[#ffa05100] ">
            <div className="rounded-[calc(1.5rem-1px)] px-9 py-3 bg-gradient-to-br from-[#8F878766] to-[#8F878766] dark:bg-black">
            <ul className='text-[#FFFFFF] font-extralight text-sm 2xl:text-base flex gap-6 2xl:gap-9'>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </div>
        </div>

        <div>
            <button className='bg-white rounded-full px-5 py-3 font-black text-xs 2xl:text-base'>
                Download Résumé
            </button>
        </div>
        </div>
    </div>
    </div>
  )
}
