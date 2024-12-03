import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ title, hoverColor, borderColor, textHoverColor }) => {
  // Dynamically set the hover text color
  const buttonStyle = {
    '--hover-text': textHoverColor, // Use the prop to set hover text color
  };

  return (
    <div className="flex justify-center mt-40">
      <button
        className={`bg-red-500 px-5 py-2 text-[20px] font-semibold flex gap-2 rounded-md border-2 ${borderColor} transform transition-transform duration-300 hover:scale-105`}
        style={textHoverColor ? buttonStyle : {}} // Apply the style only if textHoverColor is defined
      >
        {title}
        <FaArrowRight className="mt-2.5 text-[15px]" />
      </button>

      <style jsx>{`
        button:hover {
          color: var(--hover-text); /* Change text color on hover */
        }
      `}</style>
    </div>
  );
};

export default Button;
