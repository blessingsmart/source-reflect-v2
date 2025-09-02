// resources/js/components/Homepage/HeroBanner.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center mt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Helping You Settle with Ease, Anywhere You Go
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Seamless relocation, logistics, and support services designed to make your settling down journey stress-free, efficient, and reliable.
        </p>
        <div className="flex gap-4 justify-center">
          <button className=" flex gap-2 items-center justify-center bg-green-500 text-white sm:px-4 sm:py-2.5 px-2 py-1.5 rounded-sm hover:bg-blue-700 transition-all duration-300 group">Get Started Today</button>
          <button className=" flex gap-2 items-center justify-center border-2 border-green-500 text-green-500 sm:px-4 px-2 py-1.5 sm:py-2.5 rounded-sm hover:bg-green-500 hover:text-white transition-all duration-300 group">Request a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;