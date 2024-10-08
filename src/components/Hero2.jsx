import React from "react";

const Hero2 = () => {
  return (
    <div className="bg-dropDeepBlue min-h-screen w-full">
      {/* Header Section */}
      <div className="w-full px-6 lg:px-0">
        <p className="text-white font-gbr text-center text-2xl lg:text-3xl pt-10 font-bold">
          How Drop Works
        </p>
        <p className="text-white font-gbr text-center text-sm lg:text-lg pt-5">
          Embrace life's vastness, venture forth, and discover the wonders waiting beyond
        </p>
        <p className="text-white font-gbr text-center text-sm lg:text-lg pt-0">
          The world beckons, seize its grand offerings now!
        </p>
      </div>

      {/* Container for the numbered sections and image */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full mx-auto mt-10 lg:mt-20 px-6 lg:px-20">
        {/* Left Column */}
        <div className="space-y-10 mb-10 lg:mb-0">
          <div className="flex items-start space-x-4">
            {/* Circle with number */}
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">1</p>
            </div>

            {/* Text Section */}
            <div>
              <p className="text-lg font-semibold text-white">Real-time Tracking</p>
              <p className="text-sm text-white">Track your ride's progress in real-time</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            {/* Circle with number */}
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">2</p>
            </div>

            {/* Text Section */}
            <div>
              <p className="text-lg font-semibold text-white">Ride Types</p>
              <p className="text-sm text-white">Choose from various ride-types for your convenience</p>
            </div>
          </div>
        </div>

        {/* Center image */}
        <div className="w-full lg:w-1/3 flex mx-auto justify-center items-center mb-10 lg:mb-0">
          <img
            src="/iphone.png"
            alt="Iphone"
            className="w-full lg:w-[600px] h-auto object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div className="flex items-start space-x-4">
            {/* Circle with number */}
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">3</p>
            </div>

            {/* Text Section */}
            <div>
              <p className="text-lg font-semibold text-white">Secure Payments</p>
              <p className="text-sm text-white">Safe and seamless payment options</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            {/* Circle with number */}
            <div className="flex items-center justify-center w-10 h-10 border border-gray-600 bg-gray-600 rounded-full">
              <p className="text-dropOrange font-semibold">4</p>
            </div>

            {/* Text Section */}
            <div>
              <p className="text-lg font-semibold text-white">Driver Ratings</p>
              <p className="text-sm text-white">Rate drivers to ensure quality service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
