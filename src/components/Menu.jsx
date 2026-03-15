import React from 'react';

const menuItems = [
  {
    id: 1,
    name: "Batangas Bulalo",
    description: "Slow-cooked beef shanks with bone marrow and fresh local vegetables.",
    price: "₱450",
    category: "Main Dishes"
  },
  {
    id: 2,
    name: "Classic Chicken Adobo",
    description: "Tender chicken marinated in soy sauce, vinegar, and Batangas peppercorns.",
    price: "₱280",
    category: "Main Dishes"
  },
  {
    id: 3,
    name: "Special Lomi",
    description: "Thick egg noodles in a rich, savory broth topped with chicharon and liver.",
    price: "₱150",
    category: "Noodles"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-serif text-[#2D1E17]">Our <span className="text-[#2D5A27]">Digital Menu</span></h2>
          <p className="text-gray-600 max-w-lg mx-auto italic">Authentic "Lutong Bahay" flavors made fresh every day.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513]">{item.category}</span>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-[#2D1E17]">{item.name}</h3>
                  <span className="text-[#2D5A27] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
              <button className="mt-6 w-full py-3 rounded-xl border border-[#2D5A27] text-[#2D5A27] font-bold hover:bg-[#2D5A27] hover:text-white transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;