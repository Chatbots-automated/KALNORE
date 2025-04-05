import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://i.imgur.com/mFm6Vcm.png" 
                alt="Kalnorė" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-8 mr-8">
              {[
                { path: '/', label: 'Pagrindinis' },
                { path: '/technika', label: 'Technika' },
                { path: '/plastiko-rankoves', label: 'Plastiko Rankovės' },
                { path: '/apie-mus', label: 'Apie Mus' },
                { path: '/kontaktai', label: 'Kontaktai' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative font-medium transition-colors duration-200 ${
                    location.pathname === path
                      ? 'text-[#9bc329]'
                      : 'text-gray-700 hover:text-[#9bc329]'
                  }`}
                >
                  {label}
                  {location.pathname === path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9bc329] transform origin-left"></span>
                  )}
                </Link>
              ))}
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/Kalnore.lt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#9bc329] transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/kalnore.lt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#9bc329] transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/kalnor%C4%97/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#9bc329] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#9bc329] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-sm`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {[
            { path: '/', label: 'Pagrindinis' },
            { path: '/technika', label: 'Technika' },
            { path: '/plastiko-rankoves', label: 'Plastiko Rankovės' },
            { path: '/apie-mus', label: 'Apie Mus' },
            { path: '/kontaktai', label: 'Kontaktai' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                location.pathname === path
                  ? 'text-[#9bc329] bg-[#9bc329]/10'
                  : 'text-gray-700 hover:text-[#9bc329] hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          
          {/* Mobile Social Media Icons */}
          <div className="flex items-center space-x-4 px-3 py-2">
            <a 
              href="https://www.facebook.com/Kalnore.lt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#9bc329] transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/kalnore.lt/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#9bc329] transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/kalnor%C4%97/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#9bc329] transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;