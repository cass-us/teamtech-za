import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-6 text-[13px] text-black opacity-60 font-bold " id="footer">
      {/* Contact Section */}
      
      <div className="text-center">
       
        <p className="text-lg mb-2">Contact Us:</p>
        <div className="flex justify-center items-center mb-2">
          <MdEmail className="mr-2 text-xl" />
          <p>
            <a href="mailto:info@teamtechz.co.za" className="text-black hover:underline">
              info@teamtechz.co.za
            </a>
            <span> or </span>
            <a href="mailto:general@teamtechz.co.za" className="text-black hover:underline">
              general@teamtechz.co.za
            </a>
          </p>
        </div>
      </div>

      {/* Phone Section */}
      <div className="text-center">
        <p className="text-lg mb-2">Call Us:</p>
        <div className="flex justify-center items-center">
          <MdPhone className="mr-2 text-xl" />
          <p>
            <a href="tel:+27827612678" className="text-black hover:underline">
              +27 82 761 2678
            </a>
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="text-center">
        <p className="text-lg mb-2">Visit Us:</p>
        <div className="flex justify-center items-center">
          <MdLocationOn className="mr-2 text-xl" />
          <div>
            <p>189 Perth Road</p>
            <p>Westdene, Johannesburg, 2092</p>
            <p>South Africa</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="col-span-1 md:col-span-3 text-center mt-4">
        © 2024 TEAMTECHZ IT Solutions. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
