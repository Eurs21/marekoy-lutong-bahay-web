import React from 'react';
import { Phone, Utensils } from 'lucide-react';
import marekoyLogo from '../assets/marekoy-logo.png'; // 1. Import the logo from assets

const Hero = () => {
  return (
    <section className="relative bg-[#FDFBF7] min-h-[80vh] flex items-center px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Branding */}
        <div className="space-y-6">
          
          {/* 2. Place the logo here, giving it a good size and alignment */}
          <div className="flex items-center gap-4">
            <img 
              src={marekoyLogo}
              alt="Marekoy Lutong Bahay Logo" 
              className="h-24 w-24 object-contain" // Size looks balanced here
            />
            <div className='flex flex-col'>
                <span className="text-[#2D5A27] font-semibold tracking-widest uppercase text-sm">
                    Authentic Nasugbu Flavors
                </span>
                <span className='text-xs text-gray-400'>Since 2015</span> {/* Reference from the logo itself! */}
            </div>
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

        {/* Right Side: Visuals (The food image stays) */}
        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1974&auto=format&fit=crop" 
            alt="Delicious Filipino Food" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;