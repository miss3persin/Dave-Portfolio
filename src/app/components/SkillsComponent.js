'use client'

import React from 'react'
import Image from 'next/image';
import figma from '/public/figma.png'
import figma_thing from '/public/figsomething.png'
import xd from '/public/XD.png'
import photoshop from '/public/photoshop.png'
import illustrator from '/public/illustrator.png'
import github from '/public/git.png'
import coder_thing from '/public/codesomething.png'
import w_thing from '/public/w-thing.png'

export const SkillsComponent = () => {
  return (
    <div className="image-container lg:max-w-96 max-w-full flex bg-[#282828] px-2.5 py-1 rounded-[15px] gap-1.5 border border-t-[#484848] border-b-[#282828] border-x-[#484848]">
    <div className="image">
      <Image src={figma} alt="Figma" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={figma_thing} alt="Figma Thing" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={w_thing} alt="W Thing" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={xd} alt="XD" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={photoshop} alt="Photoshop" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={illustrator} alt="Illustrator" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={github} alt="GitHub" width={50} height={50} />
    </div>
    <div className="image">
      <Image src={coder_thing} alt="Coder Thing" width={50} height={50} />
    </div>
  </div>
  )
}
