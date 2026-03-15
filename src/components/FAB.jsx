import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FAB = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="tel:+639360561354" className="bg-[#2D5A27] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FAB;