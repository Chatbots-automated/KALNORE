import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#9bc329]">Kalnorė</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#9bc329]">Pagrindinis</Link>
            <Link to="/technika" className="text-gray-700 hover:text-[#9bc329]">Technika</Link>
            <Link to="/plastiko-rankoves" className="text-gray-700 hover:text-[#9bc329]">Plastiko Rankovės</Link>
            <Link to="/apie-mus" className="text-gray-700 hover:text-[#9bc329]">Apie Mus</Link>
            <Link to="/kontaktai" className="text-gray-700 hover:text-[#9bc329]">Kontaktai</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#9bc329]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-[#9bc329]"
              onClick={() => setIsOpen(false)}
            >
              Pagrindinis
            </Link>
            <Link
              to="/technika"
              className="block px-3 py-2 text-gray-700 hover:text-[#9bc329]"
              onClick={() => setIsOpen(false)}
            >
              Technika
            </Link>
            <Link
              to="/plastiko-rankoves"
              className="block px-3 py-2 text-gray-700 hover:text-[#9bc329]"
              onClick={() => setIsOpen(false)}
            >
              Plastiko Rankovės
            </Link>
            <Link
              to="/apie-mus"
              className="block px-3 py-2 text-gray-700 hover:text-[#9bc329]"
              onClick={() => setIsOpen(false)}
            >
              Apie Mus
            </Link>
            <Link
              to="/kontaktai"
              className="block px-3 py-2 text-gray-700 hover:text-[#9bc329]"
              onClick={() => setIsOpen(false)}
            >
              Kontaktai
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;