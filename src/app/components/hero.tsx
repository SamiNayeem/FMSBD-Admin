import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Left Diagonal Section with Image and Animation */}
      <div
        className="absolute top-0 left-0 w-2/5 h-full overflow-hidden" // Increased width from w-1/3 to w-2/5
        style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}  // Diagonal shape
      >
        <div className="w-full h-full animate-slide-up"> {/* Apply animation to image container */}
          <Image
            src="/baby-in-flood.jpg" // Replace with your actual image path
            alt="Left Side Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Middle Section with Logo */}
      <div className="relative z-10 w-1/5 h-full flex flex-col items-center justify-center"> {/* Reduced width of the middle section */}
        <Image
          src="/logo-fmsbd.png" // Replace with your actual image path
          alt="Middle Logo"
          objectFit="cover"
          width={300}
          height={200}
        />
        <a href="#about-us" className="px-5 py-2.5 relative rounded group overflow-hidden text-blue-900 inline-block font-bold font-roboto">
  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
  
  <span className="relative flex items-center group-hover:text-white transition-all duration-300">
    Get Started
    <svg
      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-200"
      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  </span>
</a>


      </div>

      {/* Right Diagonal Section with Image and Animation */}
      <div
        className="absolute top-0 right-0 w-2/5 h-full overflow-hidden" // Increased width from w-1/3 to w-2/5
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}  // Diagonal shape
      >
        <div className="w-full h-full animate-slide-up"> {/* Apply animation to image container */}
          <Image
            src="/flood-rescue.jpg" // Replace with your actual image path
            alt="Right Side Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
