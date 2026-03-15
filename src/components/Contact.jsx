import React from 'react';
import { MapPin, Clock, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const address = "F. Alix St, Nasugbu, Batangas, Philippines";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif text-[#2D1E17] mb-4">Visit <span className="text-[#2D5A27]">Marekoy</span></h2>
              <p className="text-gray-600">We are located in the heart of Nasugbu. Stop by for a warm meal and a peaceful vibe.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#8B4513] mt-1"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#2D1E17]">Our Address</h4>
                  <p className="text-gray-500">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#2D5A27] mt-1"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#2D1E17]">Opening Hours</h4>
                  <p className="text-gray-500">Open 24 Hours (Mon - Sun)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#D4AF37] mt-1"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#2D1E17]">Email Us</h4>
                  <p className="text-gray-500">hello@marekoy-lutongbahay.com</p>
                </div>
              </div>
            </div>

            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D5A27] text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg"
            >
              Get Directions <ExternalLink size={18} />
            </a>
          </div>

          {/* Map Preview */}
          <div className="h-96 w-full rounded-3xl overflow-hidden shadow-xl border-8 border-[#FDFBF7]">
            <iframe 
              title="Marekoy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.582856262438!2d120.6278!3d14.0725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd908756d1c7f9%3A0x86034f4007f300!2sF.%20Alix%2C%20Nasugbu%2C%20Batangas!5e0!3m2!1sen!2sph!4v1710500000000!5m2!1sen!2sph"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;