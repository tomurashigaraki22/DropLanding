import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-dropDeepBlue py-12 px-6 lg:px-24">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-base lg:text-lg text-gray-300 mt-2">
          We'd love to hear from you! Fill out the form below.
        </p>
      </div>

      {/* Form Section */}
      <div className="mt-10 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-dropOrange focus:border-dropOrange" 
              placeholder="Your Name"
            />
          </div>

          {/* Phone Number and Country Code */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Country Code */}
            <div className="lg:w-1/3">
              <label htmlFor="country-code" className="block text-lg font-medium text-gray-700">Country Code</label>
              <select 
                id="country-code" 
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-dropOrange focus:border-dropOrange">
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+234">+234 (Nigeria)</option>
                <option value="+61">+61 (Australia)</option>
                {/* Add more country codes as needed */}
              </select>
            </div>

            {/* Phone Number */}
            <div className="lg:w-2/3">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-dropOrange focus:border-dropOrange" 
                placeholder="Your Phone Number"
              />
            </div>
          </div>

          {/* Message Body */}
          <div>
            <label htmlFor="body" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea 
              id="body" 
              rows="6" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-dropOrange focus:border-dropOrange" 
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-dropOrange text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
