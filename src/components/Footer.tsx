import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="block group">
              <img 
                src="https://i.imgur.com/mFm6Vcm.png"
                alt="Kalnorė" 
                className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Žemės ūkio technikos ekspertai nuo 2006 metų. Patikimi sprendimai jūsų verslui.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/Kalnore.lt' },
                { icon: Instagram, href: 'https://www.instagram.com/kalnore.lt/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/kalnor%C4%97/about/' }
              ].map(({ icon: Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#9bc329] transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuorodos</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Pagrindinis' },
                { path: '/technika', label: 'Technika' },
                { path: '/plastiko-rankoves', label: 'Plastiko Rankovės' },
                { path: '/apie-mus', label: 'Apie mus' },
                { path: '/kontaktai', label: 'Kontaktai' }
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link 
                    to={path} 
                    className="text-gray-400 hover:text-[#9bc329] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#9bc329] rounded-full mr-2 transform group-hover:scale-125 transition-transform"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontaktai</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, content: 'Sodų g.11, LT-71136, Šakiai', href: 'https://goo.gl/maps/YOUR_MAP_LINK' },
                { icon: Phone, content: '+370 617 85600', href: 'tel:+37061785600' },
                { icon: Mail, content: 'pardavimai@kalnore.lt', href: 'mailto:pardavimai@kalnore.lt' },
                { icon: Clock, content: 'Pirm–Penkt: 08:00 – 17:00' }
              ].map(({ icon: Icon, content, href }, index) => (
                <li key={index} className="flex items-start group">
                  <Icon className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  {href ? (
                    <a href={href} className="text-gray-400 hover:text-[#9bc329] transition-colors duration-300">
                      {content}
                    </a>
                  ) : (
                    <span className="text-gray-400">{content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Rekvizitai</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="transition-colors duration-300 hover:text-[#9bc329]">
                Įmonės kodas: <span className="font-medium">303228460</span>
              </li>
              <li className="transition-colors duration-300 hover:text-[#9bc329]">
                PVM kodas: <span className="font-medium">LT100008307911</span>
              </li>
              <li className="pt-4 transition-colors duration-300 hover:text-[#9bc329]">
                Bankas: <span className="font-medium">„Swedbank" AB</span>
              </li>
              <li className="transition-colors duration-300 hover:text-[#9bc329]">
                A/S <span className="font-medium">LT87 7300 0101 4992 5182</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} UAB Kalnorė. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;