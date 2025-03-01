import React from "react";
// import video1 from '../assets/Videos/landingPage.mp4'
import video2 from '../assets/Videos/Background Video.mp4'
const Home1 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Optional) */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center z-10">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4">COMFORT CAR</h1>

        {/* Description */}
        <p className="text-xl text-white mb-8">
          Your journey, our comfort. Experience the best in car services.
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Home1;