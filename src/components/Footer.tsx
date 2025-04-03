import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kalnorė</h3>
            <p className="text-gray-400">
              Žemės ūkio technikos ekspertai nuo 2006 metų
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuorodos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#9bc329]">Pagrindinis</Link></li>
              <li><Link to="/technika" className="text-gray-400 hover:text-[#9bc329]">Technika</Link></li>
              <li><Link to="/apie-mus" className="text-gray-400 hover:text-[#9bc329]">Apie mus</Link></li>
              <li><Link to="/kontaktai" className="text-gray-400 hover:text-[#9bc329]">Kontaktai</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktai</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tel.: +370 617 85600</li>
              <li>El. paštas: pardavimai@kalnore.lt</li>
              <li>Darbo laikas: Pirm–Penkt: 08:00 – 17:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Socialiniai tinklai</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#9bc329]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9bc329]">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9bc329]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 UAB Kalnorė. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;