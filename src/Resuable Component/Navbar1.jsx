import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);  // For mobile menu toggle
    const [showSearch, setShowSearch] = useState(false); // To toggle search input visibility
    const [searchTerm, setSearchTerm] = useState("");  // To store search term

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle search submit
    const handleSearchSubmit = () => {
        console.log("Searching for: ", searchTerm);
        setSearchTerm("");  // Clear input after search
        setShowSearch(false);  // Hide input field after submitting
    };

    return (
        <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Title */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold text-gray-800">
                            COMFORT CAR
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex justify-center items-center flex-grow space-x-8">
                        <a href="/" className="text-gray-800 hover:text-blue-500 transition duration-300">
                            Home
                        </a>
                        <a href="/about" className="text-gray-800 hover:text-blue-500 transition duration-300">
                            About
                        </a>
                        <a href="/services" className="text-gray-800 hover:text-blue-500 transition duration-300">
                            Services
                        </a>
                        <a href="/contact" className="text-gray-800 hover:text-blue-500 transition duration-300">
                            Contact
                        </a>
                    </div>

                    {/* Icons + Mobile Menu Button */}
                    <div className="flex items-center space-x-6">
                        {/* Search Icon */}
                        <button 
                            className="text-gray-800 hover:text-blue-500 focus:outline-none"
                            onClick={() => setShowSearch(!showSearch)} // Toggle search input visibility
                        >
                            <SearchIcon />
                        </button>

                        {/* Message Icon */}
                        <button className="text-gray-800 hover:text-blue-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                            </svg>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                // Close Icon
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Visible on small screens) */}
            <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Home</a>
                <a href="/about" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">About</a>
                <a href="/services" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Services</a>
                <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Contact</a>
            </div>

            {/* Search Input Field */}
            {showSearch && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md z-50 p-4">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
                            onClick={handleSearchSubmit}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar1;
