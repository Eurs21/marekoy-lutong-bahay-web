import React from 'react';
import { Heart, Home, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid - Visualizing the "Atmosphere" */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="rounded-2xl shadow-lg h-48 w-full object-cover"
              />
            </div>
            <div className="pt-8">
              <img 
                src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?q=80&w=1932&auto=format&fit=crop" 
                alt="Local Batangas Vibe" 
                className="rounded-2xl shadow-lg h-100 w-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-[#2D1E17]">
                More than just a meal, it's a <span className="text-[#2D5A27]">Feeling.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located right in the heart of Nasugbu, Marekoy Lutong Bahay was born from a simple dream: to serve the flavors of a mother’s kitchen to the community we love.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#FDFBF7] p-3 rounded-lg text-[#8B4513]">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D1E17]">Peaceful Atmosphere</h4>
                  <p className="text-gray-500">A comfortable space designed for families to relax and connect.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#FDFBF7] p-3 rounded-lg text-[#2D5A27]">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D1E17]">Cooked with Love</h4>
                  <p className="text-gray-500">Every dish is prepared using fresh, local ingredients from Batangas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#FDFBF7] p-3 rounded-lg text-[#D4AF37]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D1E17]">Affordable Excellence</h4>
                  <p className="text-gray-500">Authentic Filipino cuisine that doesn't break the bank.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;