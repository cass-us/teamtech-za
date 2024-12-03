import  { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
  const [data, setData] = useState(
    "To strengthen our reputation as the preferred service partner of Information and Communication Technology on the African continent, through a people-centered and dynamic offering that promotes a sustainable use of resources."
  );
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="bg-blue-700 w-full text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-6xl md:gap-5 lg:gap-20 ">
        <div className="py-10 px-4">
          <div>
            <h1 className="text-[30px] font-semibold mb-5">About Us</h1>
            <div className="bg-red-500 h-0.5 w-12"></div>
          </div>
          <p className="py-5">
            With a presence in South Africa and Mozambique, we specialize in long-term infrastructure management, strategic IT consulting, and high-quality product selection and solution-selling. Our expert team provides comprehensive support, from designing and installing to maintaining and optimizing all aspects of your company’s network. With TEAMTECH IT Solutions, you can trust that your IT infrastructure is in capable hands, freeing you to focus on what matters most – growing your business.
          </p>
          <button className="bg-red-500 font-semibold text-[13px] border border-white flex gap-2 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-125">
            More about us <FaArrowRight className="mt-2 text-[10px]" />
          </button>
        </div>
        <div className="bg-blue-950 h-auto mb-10 md:my-10 rounded-md py-10 md:px-10 px-4">
          <div className="flex justify-center gap-2">
            {/* Vision Button */}
            <div className="relative flex justify-center items-center">
              <button
                onClick={() => {
                  setActiveButton(activeButton === 0 ? null : 0); 
                  setData(
                    "To strengthen our reputation as the preferred service partner of Information and Communication Technology on the African continent, through a people-centered and dynamic offering that promotes a sustainable use of resources."
                  );
                }}
                className={`bg-blue-600 flex justify-center py-2 px-4 md:px-6 lg:px-10 rounded-md relative ${
                  activeButton === 0 ? 'bg-white text-blue-600' : ''
                }`}
              >
                Vision
              </button>
              <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-white mt-1 ${activeButton === 0 ? 'block' : 'hidden'}`}></div>
            </div>

            {/* Mission Button */}
            <div className="relative flex justify-center items-center">
              <button
                onClick={() => {
                  setActiveButton(activeButton === 1 ? null : 1); 
                  setData(
                    "To deliver high-quality, specialised and professionally reliable IT products and services that meet the unique challenges of our clients and accelerate their adoption of new technologies."
                  );
                }}
                className={`bg-blue-600 flex justify-center py-2 px-4 md:px-6 lg:px-10 rounded-md relative ${
                  activeButton === 1 ? 'bg-white text-blue-600' : ''
                }`}
              >
                Mission
              </button>
              <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-white mt-1 ${activeButton === 1 ? 'block' : 'hidden'}`}></div>
            </div>

            {/* Values Button */}
            <div className="relative flex justify-center items-center">
              <button
                onClick={() => {
                  setActiveButton(activeButton === 2 ? null : 2); 
                  setData(
                    "TEAMTECH IT Solutions values honesty, integrity and loyalty – to our solutions, to each other and to our clients."
                  );
                }}
                className={`bg-blue-600 flex justify-center py-2 px-4 md:px-6 lg:px-10 rounded-md relative ${
                  activeButton === 2 ? 'bg-white text-blue-600' : ''
                }`}
              >
                Values
              </button>
              <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-white mt-1 ${activeButton === 2 ? 'block' : 'hidden'}`}></div>
            </div>
          </div>
          <p className="mt-5">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
