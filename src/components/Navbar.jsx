import React from "react";


const Navbar = () => {
    return(
        <div className="flex flex-row items-center justify-between bg-white px-3 h-20">
            <div className="flex flex-row items-center justify-center">
                <img src="../../public/icon.png" alt="DropApp Icon" className="w-10 h-10 rounded-full" style={{ objectFit: 'contain'}}/>
                <p className="text-2xl" style={{fontFamily: "Gowun-Butang"}}>Drop</p>
            </div>
            <div className="flex flex-row items-center justify-between space-x-20">
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out">
                    Home
                </p>
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out">
                    Services
                </p>
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out">
                    About
                </p>
                <p className="cursor-pointer font-playfair relative pb-1 border-b-2 border-transparent hover:border-dropOrange hover:translate-y-1 transition duration-300 ease-in-out">
                    Contact Us
                </p>
            </div>


            <div style={{ borderColor: '#F27E05', borderWidth: 2}} className="rounded-full px-6 py-3 text-white bg-dropOrange hover:bg-white hover:text-black transition-ease duration-300 cursor-pointer">
                <p style={{ fontFamily: 'Geologica' }}>Download Our App</p>
            </div>
        </div>
    )
}

export default Navbar;