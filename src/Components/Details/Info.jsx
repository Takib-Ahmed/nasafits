import React from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { FaLock } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
const InfoSection = () => {
  const sectionData = [
    {
      icon: <FaLock/>,
      title: "All secure payment methods",
      description: "Pay With",
     
      footerImage: { src: "/public/Payment & Delivery info/sslcommerz.png", alt: "SSL Commerz" },
    },
    {
      icon:<HiOutlineFaceSmile/>,
      title: "Satisfaction guaranteed",
      description: "Made with premium quality materials.",
      additionalText: "Cozy yet lasts the test of time",
      
    },
    {
      icon: <FaTruck/>,
      title: "Worldwide delivery",
      description: null,
      footerImage: { src: "/public/Payment & Delivery info/delivery.png", alt: "SSL Commerz" },
    },
  ];

  return (
    <div className="flex  gap-5 flex-col md:flex-row md:gap-0 justify-center md:justify-around md:items-start bg-gray-100 py-10 lg:px-4">
      {sectionData.map((section, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="text-2xl mb-2">{section.icon}</div>
          
          {/* Title */}
          <h3 className="font-semibold">{section.title}</h3>

          {/* Description */}
          {section.description && <p className="text-sm">{section.description}</p>}

          {/* Images */}
       
          {/* Additional Footer Image */}
          {section.footerImage && (
            <img
              src={section.footerImage.src}
              alt={section.footerImage.alt}
              className=" w-96 md:w-80 mt-2"
            />
          )}

          {/* Additional Text */}
          {section.additionalText && (
            <p className="text-sm font-semibold">{section.additionalText}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
