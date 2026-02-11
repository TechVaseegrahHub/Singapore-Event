import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBookNow = () => {
    window.open('https://wa.me/6580579621?text=book%20ticket', '_blank');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1E40AF] shadow-lg' 
          : 'bg-[#1E40AF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-3xl font-black text-white tracking-tight">MAKE</span>
              <span className="text-3xl font-black text-[#FF8C00] tracking-tight">IO</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DC2626] to-[#FF8C00] flex items-center justify-center">
                <span className="text-white font-bold text-xs">2026</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('speakers')}
              className="text-white hover:text-[#FF8C00] transition-colors font-medium"
            >
              Speakers
            </button>
            <button 
              onClick={() => scrollToSection('highlights')}
              className="text-white hover:text-[#FF8C00] transition-colors font-medium"
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection('how-to-book')}
              className="text-white hover:text-[#FF8C00] transition-colors font-medium"
            >
              How to book
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-white hover:text-[#FF8C00] transition-colors font-medium"
            >
              Partners
            </button>
            <button 
              onClick={handleBookNow}
              className="bg-[#FF8C00] hover:bg-[#DC2626] text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-slide-in-from-top">
            <button 
              onClick={() => scrollToSection('speakers')}
              className="block w-full text-left text-white hover:text-[#FF8C00] transition-colors font-medium py-2"
            >
              Speakers
            </button>
            <button 
              onClick={() => scrollToSection('highlights')}
              className="block w-full text-left text-white hover:text-[#FF8C00] transition-colors font-medium py-2"
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection('how-to-book')}
              className="block w-full text-left text-white hover:text-[#FF8C00] transition-colors font-medium py-2"
            >
              How to book
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="block w-full text-left text-white hover:text-[#FF8C00] transition-colors font-medium py-2"
            >
              Partners
            </button>
            <button 
              onClick={handleBookNow}
              className="w-full bg-[#FF8C00] hover:bg-[#DC2626] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 mt-4"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;