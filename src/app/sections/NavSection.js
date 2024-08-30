'use client'

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import markerImage from '/Public/markerimage.png'; // Adjust the path accordingly

export const NavSection = () => {
  const [activeSection, setActiveSection] = useState('home');
  const markerRef = useRef(null);

  // Function to update marker position
  const updateMarkerPosition = (section) => {
    const liElement = document.querySelector(`li[data-section="${section}"]`);
    if (liElement && markerRef.current) {
      markerRef.current.style.left = `${liElement.offsetLeft}px`;
      markerRef.current.style.width = `${liElement.offsetWidth}px`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (section === 'home' && window.scrollY < 100) {
          setActiveSection('home');
          updateMarkerPosition('home');
        } else if (
          sectionElement &&
          sectionElement.offsetTop <= scrollPosition &&
          sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          updateMarkerPosition(section);
        }
      });
    };

    // Set initial scroll position to top
    window.scrollTo(0, 0);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    updateMarkerPosition(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='nav'>
      <div className='gradient-blur fixed'></div>
      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200" className='fixed z-50 w-full'>
        <div className='container px-10 lg:px-10 2xl:px-0'>
          <div className='flex items-center justify-between pb-10 pt-10 2xl:pb-14 2xl:pt-14'>
            <div className='flex gap-1.5 2xl:gap-2 cursor-pointer' onClick={() => handleClick('home')}>
              <p className='text-lg font-semibold text-white 2xl:text-3xl'>
                Dave Tech
              </p>
              <div className='mt-3.5 h-1.5 w-1.5 rounded-full bg-[#FFA051] p-0 2xl:mt-6'></div>
            </div>

            <div className='relative rounded-3xl bg-gradient-to-b from-[#ff9f5125] to-[#ffa05100] p-px'>
              <div className='rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#8F878766] to-[#8F878766] px-9 py-3 dark:bg-black'>
                <ul className='relative flex gap-8 text-sm font-light text-[#FFFFFF] 2xl:gap-9 2xl:text-base'>
                  <li 
                    data-section="home" 
                    onClick={() => handleClick('home')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'home' ? 'text-[#FFA051] font-normal delay-300' : ''}`}
                  >
                    Home
                  </li>
                  <li 
                    data-section="about" 
                    onClick={() => handleClick('about')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'about' ? 'text-[#FFA051] font-normal delay-300' : ''}`}
                  >
                    About
                  </li>
                  <li 
                    data-section="projects" 
                    onClick={() => handleClick('projects')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'projects' ? 'text-[#FFA051] font-normal delay-300' : ''}`}
                  >
                    Projects
                  </li>
                  <li 
                    data-section="contact" 
                    onClick={() => handleClick('contact')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'contact' ? 'text-[#FFA051] font-normal delay-300' : ''}`}
                  >
                    Contact Me
                  </li>

                  <div 
                    ref={markerRef} 
                    className='absolute -bottom-1 h-[3px] transition-all duration-300 delay-300'
                  >
                    <Image src={markerImage} alt="Marker" layout='fill' objectFit='contain' />
                  </div>
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
    </section>
  );
};
