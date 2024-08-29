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
    <div className='my-custom-bg h-max w-full'>
      <div className='container py-20 sm:px-10 2xl:px-0'>
        <div className='flex justify-between pb-16'>
          <p className='text-5xl font-semibold text-[#F5F5DC]'>
            Selected works
          </p>
          <ButtonComponentAlt text='View All Works' link='' />
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

          <div className='flex gap-6'>
            
          <div className='flex flex-col flex-1 items-center gap-6'>

          <div className='h-[50rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col'>
            <div className='px-10 pt-12'>
              <div className='mb-4 flex justify-between'>
                <p className='m-0 max-w-80 text-3xl text-[#DCDCDC]'>
                  School TimeTable Management System
                </p>
                <div className='items-end'>
                  <Image
                    src={classOptima}
                    alt='classOptima logo'
                    layout='responsive'
                    width={195}
                    height={40}
                    className='object-cover'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm'>May 2024 - 3 weeks</p>
                <div className='mb-4 flex gap-2'>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#7D7D7D] text-sm max-w-[31rem]'>School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden'>
              <Image
                src={schoolManagementImg}
                alt='schoolManagementImg main'
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 bottom-0'
              />
            </div>
          </div>

          <div className='h-[65rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col'>
            <div className='px-10 pt-12'>
              <div className='mb-4 flex justify-between'>
                <p className='m-0 max-w-80 text-3xl text-[#DCDCDC]'>
                  School TimeTable Management System
                </p>
                <div className='items-end'>
                  <Image
                    src={classOptima}
                    alt='classOptima logo'
                    layout='responsive'
                    width={195}
                    height={40}
                    className='object-cover'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm'>May 2024 - 3 weeks</p>
                <div className='mb-4 flex gap-2'>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#7D7D7D] text-sm'>School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden'>
              <Image
                src={procure_calender}
                alt=''
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 top-0'
              />
            </div>
          </div>

          </div>

          <div className='flex flex-col flex-1 items-center gap-6'>

          <div className='h-[65rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col'>
            <div className='px-10 pt-12'>
              <div className='mb-4 flex justify-between'>
                <p className='m-0 max-w-80 text-3xl text-[#DCDCDC]'>
                  ProcureRex
                </p>
                <div className='items-end'>
                  <Image
                    src={procureRex}
                    alt='classOptima logo'
                    layout='responsive'
                    width={195}
                    height={40}
                    className='object-cover'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm'>Mar 2024 - 3 months</p>
                <div className='mb-4 flex gap-2'>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#7D7D7D] text-sm'>ProcureRex is a platform designed to connect suppliers to companies needing their goods and services.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden'>
              <Image
                src={procure_calender}
                alt=''
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 top-0'
              />
            </div>
          </div>

          <div className='h-[50rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col'>
            <div className='px-10 pt-12'>
              <div className='mb-4 flex justify-between'>
                <p className='m-0 max-w-80 text-3xl text-[#DCDCDC]'>
                  Fintech App
                </p>
                <div className='items-end'>
                  <Image
                    src={finova}
                    alt='classOptima logo'
                    layout='responsive'
                    width={195}
                    height={40}
                    className='object-cover'
                  />
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#595959] text-sm'>Mar 2024 - A week</p>
                <div className='mb-4 flex gap-2'>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-xs text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div>
                <p className='mb-4 text-[#7D7D7D] text-sm'>ProcureRex is a platform designed to connect suppliers to companies needing their goods and services.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-grow rounded-b-3xl relative w-full overflow-hidden'>
              <Image
                src={finova_phones}
                alt=''
                layout='responsive'
                className='rounded-b-3xl object-cover w-full h-full absolute right-0 bottom-0'
              />
            </div>
          </div>

          </div>

          </div>

          <div className='flex items-center justify-center'>

          <div className='h-[30rem] w-full rounded-3xl bg-[#1A1A1B] flex flex-col'>

          <div className=' flex justify-between px-10 pt-12'>
                <p className='m-0 text-3xl text-[#DCDCDC]'>
                  School TimeTable Management System
                </p>
                <div className='items-end'>
                  <Image
                    src={classOptima}
                    alt='classOptima logo'
                    layout='responsive'
                    width={195}
                    height={40}
                    className='object-cover'
                  />
                </div>
              </div>

          <div className='flex h-full items-center justify-between'>

            <div className='px-10 flex flex-col flex-1 h-full justify-center'>
              <div>
                <p className='mb-8 text-[#595959] text-base'>May 2024 - 3 weeks</p>
                <div className='mb-8 flex gap-2'>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-sm text-[#838383]'>
                    UI & UX Design
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-sm text-[#838383]'>
                    User Research
                  </p>
                  <p className='rounded-full bg-[#3B3B3B] p-1 px-3 text-sm text-[#838383]'>
                    WebApp
                  </p>
                </div>
              </div>

              <div>
                <p className='mb-8 text-[#7D7D7D] text-base max-w-2xl'>School TimeTable Management System is an innovative platform designed to streamline the scheduling process for educational institutions.</p>
                <CaseStudyBtn />
              </div>
            </div>

            <div className='flex-1 rounded-b-3xl relative w-full h-full overflow-hidden'>
              <Image
                src={schoolManagementImg}
                alt='schoolManagementImg main'
                layout='responsive'
                className=' object-cover w-full h-full absolute right-0 -top-44'
              />
            </div>

            </div>
          </div>

          </div>

        </div>

      </div>
    </div>
  )
}
