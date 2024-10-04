import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 py-12 bg-gray-100 w-full">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 lg:ml-20">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-playfair text-gray-900 leading-snug text-center lg:text-left">
            Your smooth ride,
            <br /> Just a tap away
          </p>
        </div>
        <div>
          <p className="text-gray-700 font-playfair text-base md:text-lg lg:text-xl text-center lg:text-left">
            Experience hassle-free transportation with Drop,
            <br /> Reliable rides, anytime, anywhere.
          </p>
        </div>
        {/* Call to action buttons */}
        <div className="flex flex-row space-x-4 justify-center lg:justify-start">
          <img
            src="/appstore.webp"
            alt="Download on App Store"
            className="w-32 md:w-40 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <img
            src="/googleplay.webp"
            alt="Get it on Google Play"
            className="w-32 md:w-40 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src="/iphone.png"
          alt="Iphone Mockup"
          className="w-60 md:w-80 lg:w-110 object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
