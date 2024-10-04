import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">About Drop</h2>
          <p className="text-gray-400">
            Drop is transforming the way people commute with its cutting-edge technology, offering a safe, fast, and comfortable experience. Join us on the road to a smarter commute.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-dropOrange transition duration-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-dropOrange transition duration-200">Contact</a></li>
            <li><a href="/terms" className="hover:text-dropOrange transition duration-200">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-dropOrange transition duration-200">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-6">
            <li>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-2xl hover:text-dropOrange transition duration-200"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl hover:text-dropOrange transition duration-200"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl hover:text-dropOrange transition duration-200"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl hover:text-dropOrange transition duration-200"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Drop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
