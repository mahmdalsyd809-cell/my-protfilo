import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300">
      {/* Navbar Container */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-gold-400/40 shadow-gold-glow relative z-50">
        <a className="flex items-center space-x-3 group" href="#">
          <div className="w-10 h-10 rounded-full border border-gold-500 flex items-center justify-center bg-marble-50 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
            <span className="font-serifHeading text-base font-bold text-gold-700 group-hover:text-white transition-colors">Mo</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serifHeading tracking-[0.25em] text-xs font-bold text-obsidian-950">my portfolio</span>
            <span className="font-sansMeta tracking-[0.3em] text-[9px] text-gold-600 uppercase">MOHAMED AHMED</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a className="font-serifHeading text-xs uppercase tracking-widest text-obsidian-800 hover:text-gold-500 transition-colors" href="#hero">Who iam</a>
          <a className="font-serifHeading text-xs uppercase tracking-widest text-obsidian-800 hover:text-gold-500 transition-colors" href="#odyssey">The Journey</a>
          <a className="font-serifHeading text-xs uppercase tracking-widest text-obsidian-800 hover:text-gold-500 transition-colors" href="#masterpieces">Skills</a>
          <a className="font-serifHeading text-xs uppercase tracking-widest text-obsidian-800 hover:text-gold-500 transition-colors" href="#pillars">Projects</a>
        
        </div>

        <div className="flex items-center space-x-4">


          {/* Hamburger Icon */}
          <button 
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-obsidian-950 transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-obsidian-950 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-obsidian-950 transition-all duration-300 ease-in-out ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <div className="flex flex-col items-center space-y-8 w-full px-6">
          <a className="font-serifHeading text-2xl uppercase tracking-widest text-obsidian-900 hover:text-gold-500 transition-colors" href="#hero" onClick={() => setIsOpen(false)}>Sanctuary</a>
          <a className="font-serifHeading text-2xl uppercase tracking-widest text-obsidian-900 hover:text-gold-500 transition-colors" href="#odyssey" onClick={() => setIsOpen(false)}>The Odyssey</a>
          <a className="font-serifHeading text-2xl uppercase tracking-widest text-obsidian-900 hover:text-gold-500 transition-colors" href="#masterpieces" onClick={() => setIsOpen(false)}>Masterpieces</a>
          <a className="font-serifHeading text-2xl uppercase tracking-widest text-obsidian-900 hover:text-gold-500 transition-colors" href="#pillars" onClick={() => setIsOpen(false)}>Pillars</a>
       
          
       
        </div>
      </div>
    </header>
  );
}
