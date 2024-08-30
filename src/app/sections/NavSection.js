'use client'

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import markerImage from '/public/markerimage.png'
import { HiMenu, HiX } from 'react-icons/hi';

export const NavSection = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const markerRef = useRef(null);

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

    window.scrollTo(0, 0);

    // Initialize marker position when component mounts
    updateMarkerPosition('home');

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
    setIsMenuOpen(false);
  };

  return (
    <section id='nav'>
      <div className='gradient-blur fixed'></div>
      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200" className='fixed z-50 w-full'>
        <div className='container px-10 lg:px-10 2xl:px-0'>
          <div className='flex items-center justify-between pb-10 pt-10 2xl:pb-14 2xl:pt-14'>
            <div className='justify-between items-center flex w-full md:w-auto'>
              <div className='flex gap-1.5 2xl:gap-2 cursor-pointer' onClick={() => handleClick('home')}>
                <p className='md:text-lg text-xl font-semibold text-white 2xl:text-3xl'>
                  Dave Tech
                </p>
                <div className='mt-[15px] md:mt-3.5 h-1.5 w-1.5 rounded-full bg-[#FFA051] p-0 2xl:mt-6'></div>
              </div>

              {/* Hamburger Icon */}
              <div className='md:hidden flex items-center relative'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='relative text-white'>
                  <div className={`absolute transition-transform duration-500 ease-in-out ${isMenuOpen ? 'transform rotate-45' : 'transform rotate-0'}`}>
                    <HiMenu size={25} className={`transition-opacity duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  </div>
                  <div className={`transition-transform duration-500 ease-in-out ${isMenuOpen ? 'transform rotate-90' : 'transform rotate-0'}`}>
                    <HiX size={25} className={`transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex md:relative md:rounded-3xl md:bg-gradient-to-b md:from-[#ff9f5125] md:to-[#ffa05100] md:p-px'>
              <div className='md:rounded-[calc(1.5rem-1px)] md:bg-gradient-to-br md:from-[#8F878766] md:to-[#8F878766] md:px-9 md:py-3 md:dark:bg-black'>
                <ul className='relative flex gap-8 text-sm font-light text-[#FFFFFF] 2xl:gap-9 2xl:text-base'>
                  <li 
                    data-section="home" 
                    onClick={() => handleClick('home')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'home' ? 'text-[#FFA051] font-normal delay-[600ms]' : ''}`}
                  >
                    Home
                  </li>
                  <li 
                    data-section="about" 
                    onClick={() => handleClick('about')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'about' ? 'text-[#FFA051] font-normal delay-[600ms]' : ''}`}
                  >
                    About
                  </li>
                  <li 
                    data-section="projects" 
                    onClick={() => handleClick('projects')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'projects' ? 'text-[#FFA051] font-normal delay-[600ms]' : ''}`}
                  >
                    Projects
                  </li>
                  <li 
                    data-section="contact" 
                    onClick={() => handleClick('contact')} 
                    className={`scroll-smooth relative cursor-pointer hover:text-[#FFA051] ${activeSection === 'contact' ? 'text-[#FFA051] font-normal delay-[600ms]' : ''}`}
                  >
                    Contact Me
                  </li>

                  <div 
                    ref={markerRef} 
                    className='absolute -bottom-1 h-[3px] transition-all duration-300 delay-500'
                  >
                    <Image src={markerImage} alt="Marker" layout='fill' objectFit='contain' />
                  </div>
                </ul>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-24 left-0 right-0 bg-[#0E0D0F] px-4 pb-14 h-lvh flex flex-col items-center justify-evenly transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-[600ms]`}>
              <ul className='flex flex-col items-center gap-12 text-lg font-light text-[#FFFFFF]'>
                <li 
                  data-section="home" 
                  onClick={() => handleClick('home')} 
                  className={`scroll-smooth cursor-pointer hover:text-[#FFA051] ${activeSection === 'home' ? 'text-[#FFA051] font-normal' : ''}`}
                >
                  Home
                </li>
                <li 
                  data-section="about" 
                  onClick={() => handleClick('about')} 
                  className={`scroll-smooth cursor-pointer hover:text-[#FFA051] ${activeSection === 'about' ? 'text-[#FFA051] font-normal' : ''}`}
                >
                  About
                </li>
                <li 
                  data-section="projects" 
                  onClick={() => handleClick('projects')} 
                  className={`scroll-smooth cursor-pointer hover:text-[#FFA051] ${activeSection === 'projects' ? 'text-[#FFA051] font-normal' : ''}`}
                >
                  Projects
                </li>
                <li 
                  data-section="contact" 
                  onClick={() => handleClick('contact')} 
                  className={`scroll-smooth cursor-pointer hover:text-[#FFA051] ${activeSection === 'contact' ? 'text-[#FFA051] font-normal' : ''}`}
                >
                  Contact Me
                </li>
              </ul>
              <div className='flex justify-center mt-4'>
                <button className='rounded-full bg-white px-5 py-3 text-xs font-black 2xl:text-base'>
                  Download Résumé
                </button>
              </div>
            </div>

            <div>
              <button className='hidden md:block rounded-full bg-white px-5 py-3 text-xs font-black 2xl:text-base'>
                Download Résumé
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
