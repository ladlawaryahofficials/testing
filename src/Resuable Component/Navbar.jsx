import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Edge (A) to Title (B): Equal Spacing */}
          <div className="flex-shrink-0">
            {/* Title (B) */}
            <a href="/" className="text-xl font-bold text-gray-800">
              COMFORT CAR
            </a>
          </div>

          {/* Navigation Links (C): Center Section */}
          <div className="hidden md:flex justify-center items-center flex-grow space-x-8">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Icons (D) to Right Edge (E): Equal Spacing */}
          <div className="flex items-center  space-x-6">
            {/* Search Icon */}
            <button className="text-gray-800 hover:text-blue-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>

            {/* Message/FAQs Icon */}
            <button className="text-gray-800 hover:text-blue-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;