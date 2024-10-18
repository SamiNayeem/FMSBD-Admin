import React from 'react';
import Image from 'next/image';

const JoinUsSection: React.FC = () => {
  return (
    <section id='join-us' className="bg-gray-100 px-20 py-16 mt-20">
      <div className="container mx-auto text-center px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We are calling on volunteers to help rescue and support flood victims in affected areas. Whether you have professional rescue skills or simply want to help, your contribution is invaluable. Together, we can make a difference!
        </p>

        {/* Image Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
          <div className="w-full lg:w-1/3">
            <Image
              src="/rescue-1.jpg"  // Replace with your actual image path
              alt="Volunteers Helping Flood Victims"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-gray-700">Work on the frontlines, helping those directly affected by the flood.</p>
          </div>

          <div className="w-full lg:w-1/3">
            <Image
              src="/rescue-2.jpg"  // Replace with your actual image path
              alt="Distributing Aid"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-gray-700">Distribute essential supplies like food, water, and medical aid to those in need.</p>
          </div>

          <div className="w-full lg:w-1/3">
            <Image
              src="/rescue-3.jpg"  // Replace with your actual image path
              alt="Rescue Team"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-gray-700">Join rescue operations and save lives with your hands-on assistance.</p>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="#join-us"
          className="inline-block bg-blue-500 text-white px-8 py-4 rounded-md text-lg hover:bg-blue-600 transition duration-300"
        >
          Volunteer Now
        </a>
      </div>
    </section>
  );
};

export default JoinUsSection;
