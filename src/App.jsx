import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import FAB from './components/FAB'

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-bold text-[#2D1E17]">
          Marekoy <span className="text-[#2D5A27]">Lutong Bahay</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-[#2D1E17]">
          <a href="#menu" className="hover:text-[#2D5A27]">Menu</a>
          <a href="#about" className="hover:text-[#2D5A27]">Our Story</a>
          <a href="#catering" className="hover:text-[#2D5A27]">Catering</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>

      <FAB />
    </div>
  )
}

export default App