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
        <a
          href="#features"
          className="bg-blue-500 text-white px-8 py-2 rounded-3xl text-lg hover:bg-blue-600"
        >
          Get Started
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
