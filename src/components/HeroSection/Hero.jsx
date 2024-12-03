import React, { useState,useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {

    const slides = [
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/07/nskit3.jpeg",title:"CALL CENTER SOLUTIONS"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/07/image-6.jpeg",title:"IT CONSULTING"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/04/nskit24.jpg",title:"NETWORK SECURITY"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/04/nskit12.jpg",title:"SOFTWARE DEVELOPMENT"},
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
          );
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [slides.length]);
    
    const images = [
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/06/iTalk-Logo-Dark-01.svg"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/07/JET_LOGO_CMYK_high_res__1_-removebg-preview_sml.png"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/06/logo@2x-e1613115864189.png"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/06/NECT-logo.png"},
        {url:"https://www.nskit.co.za/wp-content/uploads/2023/07/smollan.svg"}
    ]

  return (

    <div className="pt-[50px] bg-gray-100">
        <div className="grid gird-cols-1 md:grid-cols-2 py-20 container mx-auto max-w-6xl gap-10">
            <div className="md:hidden -mt-8">
                <div className="relative w-full h-full flex justify-center items-center -mt-5 pb-[5px] ">
                    <img src={slides[currentSlide].url} alt={`Slide ${currentSlide + 1}`} className="rounded-md w-[500px] h-[390px] object-cover transition-opacity duration-1000"/>
                    <div className="absolute bottom-[-16px] md:bottom-[-2px] flex space-x-2">
                        {slides.map((_, idx) => (
                            <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentSlide ? "bg-red-500" : "bg-gray-400" }`}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-5 ">
                <h1 className="text-gray-400 font-semibold text-[13px]">High-quality IT Solutions</h1>
                <h2 className="font-bold text-[30px] py-5">Unlock the <span className="text-blue-500">Full Potential</span> of <br />Your IT Infrastructure.</h2>
                <p className="text-gray-500 text-[12px]">At NSK IT Solutions, we understand the importance of making the right investments at the right time. That’s why our expert IT consulting and management services are designed to help businesses like yours navigate the complex landscape of modern technology to achieve optimal efficiency and productivity.</p>
                <div className="py-10 flex gap-2">
                    <button className="bg-red-500 font-semibold text-[13px] text-white flex gap-2 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-105">
                        Get in touch <FaArrowRight className="mt-1.5 stext-[10px]" />
                    </button>
                    <button className="bg-red-500 font-semibold text-[13px] text-white flex gap-2 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-105 hover:text-black hover:border-2 border-black">
                        Get in touch <FaArrowRight className="mt-1.5 stext-[10px]" />
                    </button>
                </div>
                <p className="text-gray-400 font-semibold text-[13px]">TRUSTED BY BRANDS AROUND AFRICA</p>
               <div className="flex gap-5 pt-5">
               {
                    images && images.map((images) => (
                        <div >
                            <img src={images.url} className="text-gray-400 h-[45px] w-[80px] opacity-30 hover:opacity-100" />
                        </div>
                    ))
                }
               </div>
            </div>
            {/* slide */}
            <div>
                <div className="hidden md:relative w-full h-full md:flex justify-center items-center -mt-5 pb-[5px] ">
                    <img src={slides[currentSlide].url} alt={`Slide ${currentSlide + 1}`} className="rounded-md w-[500px] h-[390px] object-cover transition-opacity duration-1000"/>
                    <div className="absolute bottom-[-16px] md:bottom-[-2px] flex space-x-2">
                        {slides.map((_, idx) => (
                            <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentSlide ? "bg-red-500" : "bg-gray-400" }`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero