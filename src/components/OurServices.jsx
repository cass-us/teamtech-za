
import { useEffect, useState,useRef } from 'react'
import { BsCloud } from "react-icons/bs";
import { FaArrowRight, FaHeadset } from 'react-icons/fa';
import { BsHddNetwork } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";
import { LuChevronsLeftRight } from "react-icons/lu";


const OurServices = () => {

    const [isSticky, setIsSticky] = useState(false)
    const [offsetTop, setOffsetTop] = useState(0);
    const servicesRef = useRef(null);

  useEffect(() => {
    
    if (servicesRef.current) {
      setOffsetTop(servicesRef.current.offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY > offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetTop]);

  return (
    <div className="container mx-auto px-5 max-w-6xl py-20 grid grid-cols-1 md:grid-cols-2">
        {/* Our Services */}
        <div>
            <div ref={servicesRef} className={`${isSticky ? 'md:fixed md:top-[100px]' : ''} hidden md:block transition-all duration-300`} style={{ zIndex: 10 }}>
                <h1 className="text-blue-950 text-[30px] font-bold">Our Services</h1>
                <div className="bg-red-500 mt-5 h-0.5 w-12"></div>
                <div className="max-w-md">
                    <p className="py-5">TEAMTECH IT Solutions was established in 2024 in Johannesburg, South Africa and specialises in IT Consulting. TEAMTECH IT actively provides skills and expertise for businesses across the SADC, including: South Africa, Mozambique.</p>
                </div>
            </div>
            <div className="block md:hidden">
                <h1 className="text-blue-950 text-[30px] font-bold">Our Services</h1>
                <div className="bg-red-500 mt-5 h-0.5 w-12"></div>
                <div className="max-w-md">
                    <p className="py-5">TEAMTECH IT Solutions was established in 2024 in Johannesburg, South Africa and specialises in IT Consulting. TEAMTECH IT actively provides skills and expertise for businesses across the SADC, including: South Africa, Mozambique.</p>
                </div>
            </div>
        </div>
        {/* services */}
        <div>
           <div  className="relative border-l-2 border-dotted border-gray-400 h-auto"  >
                <div className="ml-5 px-5 ">
                    <div className="border-b border-b-gray-300">
                        <div className="absolute -left-[15px] h-7 w-7 rounded-full bg-red-500 text-center text-white">1</div>
                        <div className="pb-5 text-blue-950">
                            <BsCloud size={45}/>
                        </div>
                        <h1 className="text-blue-950 text-[20px] font-bold">Cloud Services</h1>
                        <div className="max-w-xl">
                            <p className="py-5 text-[13px]">Looking to move your business to the cloud? Our cloud services offer flexible and scalable solutions for businesses of all sizes. From Infrastructure as a Service (IaaS) to Software as a Service (SaaS) and Backup as a Service (BaaS), our cloud solutions are designed to meet your organisation’s unique needs.</p>
                        </div>
                        <div className="mb-5">
                            <button className="bg-red-500 flex gap-2 text-white px-5 py-2 rounded-md transform transition-transform duration-300  hover:scale-110 border border-black hover:text-black">
                                Learn more <FaArrowRight size={10} className="mt-2.5" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="ml-5 px-5 mt-10">
                    <div className="border-b border-b-gray-300">
                        <div className="absolute -left-[15px]  h-7 w-7 rounded-full bg-red-500 text-center text-white">2</div>
                        <div className="pb-5 text-blue-950">
                            <FaHeadset size={45}/>
                        </div>
                        <h1 className="text-blue-950 text-[20px] font-bold">Call Centre Solutions</h1>
                        <div className="max-w-xl">
                            <p className="pt-5 text-[13px]">Looking for a complete call centre solution that can streamline your customer support processes and help you improve your team’s productivity? Look no further than our call center solutions!</p>
                            <p className="py-5 text-[13px]">Our services include Dialler as a Service, and a call centre CRM software, all of which are designed to help you better manage your customer relationships and provide personalized customer experiences across multiple channels.</p>
                        </div>
                        <div className="mb-5">
                            <button className="bg-red-500 flex gap-2 text-white px-5 py-2 rounded-md transform transition-transform duration-300  hover:scale-110 border border-black hover:text-black">
                                Learn more <FaArrowRight size={10} className="mt-2.5" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="ml-5 px-5 mt-10">
                    <div className="border-b border-b-gray-300">
                        <div className="absolute -left-[15px] h-7 w-7 rounded-full bg-red-500 text-center text-white">3</div>
                        <div className="pb-5 text-blue-950">
                            <BsHddNetwork size={45}/>
                        </div>
                        <h1 className="text-blue-950 text-[20px] font-bold">Network Security</h1>
                        <div className="max-w-xl">
                            <p className="py-5 text-[13px]">Protect your business from cyber threats with our Network Security solutions. Our team of experts provides Managed Network Security services, Firewall/VPN setup, and Endpoint Security to keep your network secure. We offer both onsite and hosted firewall solutions tailored to your business needs. Click to learn more about our Network Security services.</p>
                        </div>
                        <div className="mb-5">
                            <button className="bg-red-500 flex gap-2 text-white px-5 py-2 rounded-md transform transition-transform duration-300  hover:scale-110 border border-black hover:text-black">
                                Learn more <FaArrowRight size={10} className="mt-2.5" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="ml-5 px-5 mt-10">
                    <div className="border-b border-b-gray-300">
                        <div className="absolute -left-[15px] h-7 w-7 rounded-full bg-red-500 text-center text-white">4</div>
                        <div className="pb-5 text-blue-950">
                            <GiServerRack size={45}/>
                        </div>
                        <h1 className="text-blue-950 text-[20px] font-bold">IT Consulting</h1>
                        <div className="max-w-xl">
                            <p className="py-5 text-[13px]">Our team of seasoned IT consultants will work with you to understand your unique business needs and design custom solutions to maximize efficiency, streamline processes, and achieve your goals. From cyber-security assessments to IT infrastructure analysis to business analysis, we have the expertise to help your business thrive in today’s ever-changing technological landscape.</p>
                        </div>
                        <div className="mb-5">
                            <button className="bg-red-500 flex gap-2 text-white px-5 py-2 rounded-md transform transition-transform duration-300  hover:scale-110 border border-black hover:text-black">
                                Learn more <FaArrowRight size={10} className="mt-2.5" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="ml-5 px-5 mt-10">
                    <div className="border-b border-b-gray-300">
                        <div className="absolute -left-[15px] h-7 w-7 rounded-full bg-red-500 text-center text-white">5</div>
                        <div className="pb-5 text-blue-950">
                            <LuChevronsLeftRight size={45}/>
                        </div>
                        <h1 className="text-blue-950 text-[20px] font-bold">Software Development</h1>
                        <div className="max-w-xl">
                            <p className="py-5 text-[13px]">Our experienced team of developers will work closely with you to understand your unique requirements and build robust, scalable, and user-friendly applications. From web and mobile app development to enterprise software solutions, we have the expertise to turn your vision into reality. </p>
                        </div>
                        <div className="mb-5">
                            <button className="bg-red-500 flex gap-2 text-white px-5 py-2 rounded-md transform transition-transform duration-300  hover:scale-110 border border-black hover:text-black">
                                Learn more <FaArrowRight size={10} className="mt-2.5" />
                            </button>
                        </div>
                    </div>
                </div>
           </div>

        </div>
    </div>
  )
}

export default OurServices