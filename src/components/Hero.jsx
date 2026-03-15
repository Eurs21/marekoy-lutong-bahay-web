import React from 'react';
import { Phone, Utensils } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#FDFBF7] min-h-[80vh] flex items-center px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Branding and Text */}
        <div className="space-y-6">
          <div className='flex flex-col'>
              <span className="text-[#2D5A27] font-semibold tracking-widest uppercase text-sm">
                  Authentic Nasugbu Flavors
              </span>
              <span className='text-xs text-gray-400'>Since 2015</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif text-[#2D1E17] leading-tight pt-2">
            Your <span className="text-[#8B4513] italic">Home</span> away from Home.
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Experience the warmth of traditional Filipino cooking. Peaceful, affordable, and made with love in the heart of Batangas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#2D5A27] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition shadow-lg">
              <Utensils size={20} /> View Our Menu
            </button>
            {/* Updated Book Catering Button with correct number */}
            <a 
              href="tel:+639360561354" 
              className="border-2 border-[#8B4513] text-[#8B4513] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#8B4513] hover:text-white transition cursor-pointer"
            >
              <Phone size={20} /> Book Catering
            </a>
          </div>
        </div>

        {/* Right Side: The Specific Marekoy Logo */}
        <div className="relative flex justify-center items-center p-8 rounded-2xl">
          {/* 1. Point the src to the logo image in the public folder */}
          <img 
            src="/marekoy-logo.png" 
            alt="Marekoy Lutong Bahay Logo" 
            className="w-full max-w-md h-auto object-contain" // 2. Scale it down to look appropriate in the space
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;