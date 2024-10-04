import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close button

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-row items-center justify-between bg-white px-3 h-20 relative">
            {/* Logo Section */}
            <div className="flex flex-row items-center justify-center space-x-2">
                <img
                    src="../../public/icon.png"
                    alt="DropApp Icon"
                    className="w-10 h-10 rounded-full object-contain"
                />
                <p className="text-2xl" style={{ fontFamily: "Gowun-Butang" }}>Drop</p>
            </div>

            {/* Navigation Links for large screens */}
            <div className="hidden md:flex flex-row items-center justify-between space-x-6 lg:space-x-20">
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out text-lg">
                    Home
                </p>
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out text-lg">
                    Services
                </p>
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out text-lg">
                    About
                </p>
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out text-lg">
                    Contact Us
                </p>
            </div>

            {/* Hamburger Icon for small screens */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <FiX className="text-3xl text-dropOrange" />
                    ) : (
                        <FiMenu className="text-3xl text-dropOrange" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-0 right-0 w-2/3 h-screen bg-white shadow-lg z-50 p-6 flex flex-col space-y-6">
                    <button className="self-end" onClick={() => setMenuOpen(false)}>
                        <FiX className="text-3xl text-dropOrange" />
                    </button>
                    <p className="cursor-pointer font-playfair text-lg" onClick={() => setMenuOpen(false)}>
                        Home
                    </p>
                    <p className="cursor-pointer font-playfair text-lg" onClick={() => setMenuOpen(false)}>
                        Services
                    </p>
                    <p className="cursor-pointer font-playfair text-lg" onClick={() => setMenuOpen(false)}>
                        About
                    </p>
                    <p className="cursor-pointer font-playfair text-lg" onClick={() => setMenuOpen(false)}>
                        Contact Us
                    </p>
                </div>
            )}

            {/* Download App Button */}
            <div
                style={{ borderColor: '#F27E05', borderWidth: 2 }}
                className="hidden md:block rounded-full px-6 py-3 text-white bg-dropOrange hover:bg-white hover:text-black transition-ease duration-300 cursor-pointer"
            >
                <p style={{ fontFamily: 'Geologica' }}>Download Our App</p>
            </div>
        </div>
    );
};

export default Navbar;
