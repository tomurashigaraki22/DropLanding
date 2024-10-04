import React from "react";

const Hero3 = () => {
  return (
    <div className="bg-dropDeepBlue min-h-screen w-full pt-10">
      {/* Header Section */}
      <div className="w-full px-6 lg:px-0">
        <p className="text-white font-gbr text-center text-2xl lg:text-3xl pt-10 font-bold">
          Ready to Ride?
        </p>
        <p className="text-white font-gbr text-center text-sm lg:text-lg pt-5">
          Embrace life's vastness, venture forth, and discover the wonders waiting beyond
        </p>
        <p className="text-white font-gbr text-center text-sm lg:text-lg pt-0">
          The world beckons, seize its grand offerings now!
        </p>
      </div>

      {/* Main Content with Images and Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[70%] mx-auto mt-10 space-y-10 lg:space-y-0">
        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Ellipse Image */}
          <img
            src="/ellipse.png"
            alt="Ellipse"
            className="absolute inset-0 w-[300px] h-[200px] lg:w-[600px] lg:h-[400px] object-contain"
          />
          {/* iPhone Image */}
          <img
            src="/iphone.png"
            alt="iPhone"
            className="relative w-[150px] h-[300px] lg:w-[250px] lg:h-[400px] object-contain"
          />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* First item */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">1</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Real-time Tracking</p>
              <p className="text-sm text-white">Track your ride's progress in real-time</p>
            </div>
          </div>

          {/* Second item */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">2</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Ride Types</p>
              <p className="text-sm text-white">Choose from various ride-types for your convenience</p>
            </div>
          </div>

          {/* Third item */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">3</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Secure Payments</p>
              <p className="text-sm text-white">Safe and seamless payment options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
