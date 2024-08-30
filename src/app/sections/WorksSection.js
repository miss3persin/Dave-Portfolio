'use client'

import React from 'react'
import Image from 'next/image'
import { ButtonComponentAlt } from '../components/ButtonComponentAlt'
// import { WorkCard } from '../components/WorkCard'
import classOptima from '/public/class-optima.png'
import procureRex from '/public/procurerex-logo.png'
import schoolManagementImg from '/public/school-managment-img.png';
import procure_calender from '/public/procure-calender.png'
import finova from '/public/Finova..png'
import finova_phones from '/public/fintech app.png'
import { CaseStudyBtn } from '../components/CaseStudyBtn'

export const WorksSection = () => {
  // const workItems = [
  //   {
  //     id: 1,
  //     size: "small",
  //     title: "School TimeTable Management System",
  //     dateRange: "May 2024 - 3 weeks",
  //     tags: ['UI & UX Design', 'User Research', 'WebApp'],
  //     description: "School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.",
  //     logoImage: classOptima,
  //     mainImage: schoolManagementImg
  //   },
  //   {
  //     id: 2,
  //     size: "medium",
  //     title: "Another Project",
  //     dateRange: "June 2024 - 2 weeks",
  //     tags: ['Frontend Development', 'ReactJS'],
  //     description: "This project is a responsive web application built using ReactJS.",
  //     logoImage: classOptima,
  //     mainImage: schoolManagementImg
  //   }

  // ];

  return (
    <section id="projects">
      <div className='container py-10 sm:py-20 px-10 2xl:px-0'>
        <div className='flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between pb-10 sm:pb-16 items-center overflow-hidden'>
          <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F5F5DC]'>
            Selected works
          </p>
          <div data-aos="fade-left" data-aos-duration="1000">
          <ButtonComponentAlt text='View All Works' link='' />
          </div>
        </div>

        {/* <div className='flex gap-7'>
          {workItems.map((work, index) => (
            <WorkCard
              key={index}
              size={work.size}
              title={work.title}
              dateRange={work.dateRange}
              tags={work.tags}
              description={work.description}
              logoImage={work.logoImage}
              mainImage={work.mainImage}
            />
          ))}
        </div> */}

        <div className='flex flex-col gap-6'>

          <div className='flex flex-col md:flex-row gap-6'>
            
          <div className='flex flex-col flex-1 items-center sm:justify-center md:justify-start gap-6'>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className='md:h-[23rem] lg:h-[45rem] xl:h-[50rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col md:justify-center lg:justify-start py-10 md:py-0'>
            <div className='px-10 md:pt-10 lg:pt-12 md:pb-10 lg:pb-0'>
              <div className='mb-4 flex justify-between flex-col-reverse sm:flex-row md:flex-col-reverse items-center sm:items-start lg:flex-row md:items-center lg:items-start'>
                <p className='m-0 lg:max-w-72 xl:max-w-80 lg:text-2xl xl:text-3xl text-[#DCDCDC] text-center sm:text-left md:text-center lg:text-left'>
                  School TimeTable Management System
                </p>
                <div className='items-end pb-3 sm:pb-0 md:pb-3 lg:pb-0'>
                  <Image
                    src={classOptima}
                    alt='classOptima logo'
                    layout='responsive'
                    // width={195}
                    // height={40}
                    className='object-cover lg:w-[300px] xl:w-[195px] w-[300px]'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm text-center sm:text-left md:text-center lg:text-left'>May 2024 - 3 weeks</p>
                <div className='mb-4 flex sm:flex-row flex-col gap-2 justify-center sm:justify-start md:justify-center lg:justify-start'>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center sm:items-start md:items-center lg:items-start'>
                <p className='mb-4 text-[#7D7D7D] text-xs sm:text-sm max-w-[31rem] text-center sm:text-left md:text-center lg:text-left'>School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.</p>

                <CaseStudyBtn />

              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden md:hidden lg:block'>
              <Image
                src={schoolManagementImg}
                alt='schoolManagementImg main'
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 bottom-0 2xl:-bottom-40'
              />
            </div>
          </div>








          <div data-aos="fade-up" data-aos-duration="1000" className='md:h-[23rem] lg:h-[55rem] xl:h-[65rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col md:justify-center lg:justify-start py-10 md:py-0'>
          <div className='px-10 md:pt-10 lg:pt-12 md:pb-10 lg:pb-0'>
              <div className='mb-4 flex justify-between flex-col-reverse sm:flex-row md:flex-col-reverse items-center sm:items-start lg:flex-row md:items-center lg:items-start'>
                <p className='m-0 lg:max-w-72 xl:max-w-80 lg:text-2xl xl:text-3xl text-[#DCDCDC] text-center sm:text-left md:text-center lg:text-left'>
                  School TimeTable Management System
                </p>
                <div className='items-end pb-3 sm:pb-0 md:pb-3 lg:pb-0'>
                  <Image
                    src={classOptima}
                    alt='classOptima logo'
                    layout='responsive'
                    // width={195}
                    // height={40}
                    className='object-cover lg:w-[300px] xl:w-[195px] w-[300px]'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm text-center sm:text-left md:text-center lg:text-left'>May 2024 - 3 weeks</p>
                <div className='mb-4 flex sm:flex-row flex-col gap-2 justify-center sm:justify-start md:justify-center lg:justify-start'>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center sm:items-start md:items-center lg:items-start'>
                <p className='mb-4 text-[#7D7D7D] text-xs sm:text-sm max-w-[31rem] text-center sm:text-left md:text-center lg:text-left'>School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden md:hidden lg:block'>
              <Image
                src={procure_calender}
                alt=''
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 top-0'
              />
            </div>
          </div>








          </div>

          <div className='flex flex-col flex-1 items-center sm:justify-center md:justify-start gap-6'>








          <div data-aos="fade-up" data-aos-duration="1000" className='md:h-[23rem] lg:h-[55rem] xl:h-[65rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col md:justify-center lg:justify-start py-10 md:py-0'>
          <div className='px-10 md:pt-10 lg:pt-12 md:pb-10 lg:pb-0'>
              <div className='mb-4 flex justify-between flex-col-reverse sm:flex-row md:flex-col-reverse items-center sm:items-start lg:flex-row md:items-center lg:items-start'>
                <p className='m-0 lg:max-w-72 xl:max-w-80 lg:text-2xl xl:text-3xl text-[#DCDCDC] text-center sm:text-left md:text-center lg:text-left'>
                  ProcureRex
                </p>
                <div className='items-end pb-3 sm:pb-0 md:pb-3 lg:pb-0'>
                  <Image
                    src={procureRex}
                    alt='classOptima logo'
                    layout='responsive'
                    // width={195}
                    // height={40}
                    className='object-cover lg:w-[300px] xl:w-[195px] w-[300px]'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm text-center sm:text-left md:text-center lg:text-left'>Mar 2024 - 3 months</p>
                <div className='mb-4 flex sm:flex-row flex-col gap-2 justify-center sm:justify-start md:justify-center lg:justify-start'>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center sm:items-start md:items-center lg:items-start'>
                <p className='mb-4 text-[#7D7D7D] text-xs sm:text-sm max-w-[31rem] text-center sm:text-left md:text-center lg:text-left'>ProcureRex is a platform designed to connect suppliers to companies needing their goods and services.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden md:hidden lg:block'>
              <Image
                src={procure_calender}
                alt=''
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 top-0'
              />
            </div>
          </div>









          <div data-aos="fade-up" data-aos-duration="1000" className='md:h-[23rem] lg:h-[45rem] xl:h-[50rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col md:justify-center lg:justify-start py-10 md:py-0'>
          <div className='px-10 md:pt-10 lg:pt-12 md:pb-10 lg:pb-0'>
              <div className='mb-4 flex justify-between flex-col-reverse sm:flex-row md:flex-col-reverse items-center sm:items-start lg:flex-row md:items-center lg:items-start'>
                <p className='m-0 lg:max-w-72 xl:max-w-80 lg:text-2xl xl:text-3xl text-[#DCDCDC] text-center sm:text-left md:text-center lg:text-left'>
                  Fintech App
                </p>
                <div className='items-end pb-3 sm:pb-0 md:pb-3 lg:pb-0'>
                  <Image
                    src={finova}
                    alt='classOptima logo'
                    layout='responsive'
                    // width={195}
                    // height={40}
                    className='object-cover lg:w-[300px] xl:w-[195px] w-[300px]'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm text-center sm:text-left md:text-center lg:text-left'>Mar 2024 - A week</p>
                <div className='mb-4 flex sm:flex-row flex-col gap-2 justify-center sm:justify-start md:justify-center lg:justify-start'>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] text-center sm:text-left p-1 px-3 text-[8px] lg:text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center sm:items-start md:items-center lg:items-start'>
                <p className='mb-4 text-[#7D7D7D] text-xs sm:text-sm max-w-[31rem] text-center sm:text-left md:text-center lg:text-left'>ProcureRex is a platform designed to connect suppliers to companies needing their goods and services.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden md:hidden lg:block'>
              <Image
                src={finova_phones}
                alt=''
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 bottom-0 2xl:-bottom-40'
              />
            </div>
          </div>








          </div>

          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className='md:flex items-center justify-center hidden'>

          <div className='md:h-[23rem] lg:h-[27rem] xl:h-[30rem] md:w-[22rem] lg:w-full rounded-3xl bg-[#1A1A1B] flex flex-col md:justify-center lg:justify-start'>

          <div className='px-10 md:pt-10 lg:pt-12 mb-4 flex justify-between md:flex-col-reverse lg:flex-row md:items-center lg:items-start'>
                <p className='m-0 lg:max-w-72 xl:max-w-80 lg:text-2xl xl:text-3xl text-[#DCDCDC] md:text-center lg:text-left'>
                  School TimeTable Management System
                </p>
                <div className='items-end md:pb-3 lg:pb-0'>
                  <Image
                    src={classOptima}
                    alt='classOptima logo'
                    layout='responsive'
                    // width={195}
                    // height={40}
                    className='object-cover lg:w-[300px] xl:w-[195px] md:w-[300px]'
                  />
                </div>
              </div>

          <div className='flex h-full items-center justify-between'>

            <div className='px-10 flex flex-col flex-1 h-full justify-center'>
              <div>
                <p className='lg:mb-8 text-[#595959] lg:text-base md:mb-4  md:text-sm md:text-center lg:text-left'>May 2024 - 3 weeks</p>
                <div className='lg:mb-8 flex gap-2 md:mb-4 md:justify-center lg:justify-start'>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 md:text-[8px] lg:text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 md:text-[8px] lg:text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 md:text-[8px] lg:text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div className='flex flex-col md:items-center lg:items-start'>
                <p className='lg:mb-8 text-[#7D7D7D] lg:text-base lg:max-w-2xl md:mb-4 md:text-sm md:max-w-[31rem] md:text-center lg:text-left'>School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-1 rounded-b-3xl relative w-full h-full overflow-hidden md:hidden lg:block'>
              <Image
                src={schoolManagementImg}
                alt='schoolManagementImg main'
                layout='responsive'
                className=' object-cover w-full absolute right-0 2xl:-right-[10rem] lg:-top-36 xl:-top-44 2xl:-top-[19rem] 2xl:scale-[.60]'
              />
            </div>

            </div>
          </div>

          </div>

        </div>

      </div>
    </section>
  )
}
