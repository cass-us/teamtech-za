import { useState } from 'react';
import logo from "./assets/cover.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; 
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import PopUp from '../PopUp';

import { FaArrowRight, FaPhone } from 'react-icons/fa';
const NavSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };
  // text-[#84c43c]
  return (
    <div>
      <PopUp />
      <nav className="fixed top-15 left-0 z-50 w-full">
      
        <section id="navigationBar" className={`w-full flex items-center justify-between p-4 bg-gray-100 opacity-80 h-[100px] md:h-[80px] shadow-md z-10 transition-all duration-300 ${menuOpen ? 'hidden' : 'block'}`}>
          <div className="flex items-center">
            <div className="w-[300px] sm:w-[200px] md:ml-10 md:w-[400px]">
              <img src={logo} alt="TeamTech'z Logo" className="" />
            </div>
          </div>

          <div className="hidden sm:flex">
            <ul className="flex gap-1">
              <a href="#AboutUs"><li className="font-semibold text-blue-950 cursor-pointer px-5 py-2 hover:bg-gray-200 hover:rounded-md">About us</li></a>
              <a href="#Ourservices"><li className="font-semibold text-blue-950 cursor-pointer px-5 py-2 hover:bg-gray-200 hover:rounded-md">Our Services</li></a>
              <li className="font-semibold text-blue-950 cursor-pointer px-5 py-2 hover:bg-gray-200 hover:rounded-md">Careers</li>
              <a href="#footer">
              <li className="bg-red-500 flex gap-2 text-white px-5 cursor-pointer py-2 rounded-md transform transition-transform duration-300  hover:scale-110 border border-black hover:text-black">Contact us<FaArrowRight size={10} className="mt-2.5"/></li>
              </a>
            
            </ul>
          </div>

          <div onClick={toggleMenu} className="md:hidden cursor-pointer z-20">
            {!menuOpen && (
              <GiHamburgerMenu className="text-red-500 transition-transform duration-300 ease-in-out" style={{ fontSize: '2.5rem' }} />
            )}
          </div>
        </section>

      
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-cover bg-center bg-gray-100 bg-no-repeat z-30 p-4 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ backgroundImage: 'url("./assets/pexels-tima-miroshnichenko-5380619.jpg")' }}>
          <section className="flex mx-5 flex-col items-start justify-start h-full">
            <div className="flex justify-between items-center w-full ">
              <img src={logo} alt="TeamTech'z Logo" className="w-[100px] rounded-xl" />
              <IoMdClose className="text-red-500 transition-transform duration-300 ease-in-out cursor-pointer" style={{ fontSize: '2.5rem' }} onClick={toggleMenu} />
            </div>

            <ul className="mx-4 mt-8 w-full">
              <li className="font-bold text-blue-950 cursor-pointer flex items-center p-3 rounded-md w-full hover:bg-gray-200 border-b border-gray-300" onClick={toggleServices}>
                Services 
                {servicesOpen ? <IoChevronUp className="ml-auto" style={{ fontSize: '1.5rem' }} /> : <IoChevronDown className="ml-auto" style={{ fontSize: '1.5rem' }} />}
              </li>
              {servicesOpen && (
                <ul className="mx-6 mt-2 space-y-2 w-full">
                  <li className="text-blue-950 text-md cursor-pointer hover:text-blue-500 hover:font-semibold border-b border-gray-300 py-2">Software Testing</li>
                  <li className="text-blue-950 text-md cursor-pointer hover:text-blue-500 hover:font-semibold border-b border-gray-300 py-2">Web Development</li>
                  <li className="text-blue-950 text-md cursor-pointer hover:text-blue-500 hover:font-semibold border-b border-gray-300 py-2">Cloud</li>
                </ul>
              )}
              <li className="font-bold text-blue-950 cursor-pointer p-3 rounded-md w-full hover:bg-gray-200 border-b border-gray-300">About us</li>
              <li className="font-bold text-blue-950 cursor-pointer p-3 rounded-md w-full hover:bg-gray-200 border-b border-gray-300">Our Services</li>
              <li className="font-bold text-blue-950 cursor-pointer p-3 rounded-md w-full hover:bg-gray-200 border-b border-gray-300">Careers</li>
              <li className="font-semibold text-white bg-red-500 cursor-pointer py-2 rounded-md w-full text-center hover:bg-red-700 mt-4" id="#footer">Contact us</li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default NavSection;
