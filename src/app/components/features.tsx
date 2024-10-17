import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 px-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Real Time Flood Information</h3>
            <p className="text-gray-600">
              Our components are optimized for performance, ensuring fast load times.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Emergency Coordination</h3>
            <p className="text-gray-600">
              Tailwind CSS makes it easy to build responsive designs that work on any device.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Community Engagement</h3>
            <p className="text-gray-600">
              Easily customize components to match your brand and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
