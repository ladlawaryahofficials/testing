import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";
// import deltaCodeImg from '../assets/images/dc.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="maindc">
            {/* <div className="logodc  h-[70px] w-[70px] mt-[-16px] ml-3 bg-[#043566] absolute rounded-full"><img src={deltaCodeImg} alt=""/></div> */}
            <div className="textdc font-bold relative ml-[65px] bg-[#150235] w-fit p-2 rounded-3xl"> DeltaCode</div>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Information Section */}
        <div className="dcabout mt-3">
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div  className="dcabout mt-3">
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Order Status</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* My Account */}
        <div  className="dcabout mt-3">
          <h3 className="text-lg font-semibold mb-3">My Account</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Sign In</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div  className="dcabout mt-3">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhone /> +923200652258            </li>
            <li className="flex gap-4 mt-4">
              <FaFacebookF className="text-xl hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;