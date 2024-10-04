import React, { useEffect, useState } from 'react';
import testimonialsData from './data.json'; // Import the JSON file
import './t.css'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file (can use API in a real case)
    setTestimonials(testimonialsData);
  }, []);

  return (
    <div className="bg-dropDeepBlue py-12">
      {/* Testimonials Header */}
      <div className="text-center">
        <p className="text-4xl font-playfair text-white font-bold mb-2">What Our Customers Say</p>
        <p className="text-lg text-gray-300">Discover how Drop has transformed commuting for so many users.</p>
      </div>

      {/* Testimonials Row */}
      <div className="flex overflow-x-auto space-x-6 p-4 scroll-snap-x scroll-smooth hide-scrollbar mt-10">
      {testimonials.map(({ id, name, testimony }) => (
          <div key={id} className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 relative">
            {/* Quote icons */}
            <div className="absolute -top-6 left-5 text-4xl text-dropOrange">“</div>
            <div className="absolute -top-6 right-5 text-4xl text-dropOrange">”</div>

            <p className="text-lg text-gray-700 italic mb-4">{testimony}</p>
            <p className="text-sm text-dropOrange font-semibold">- {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
