import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import StatCounter from '../components/StatCounter';

const Home = () => {
  const partners = [
    { url: 'https://i.imgur.com/gSM9MQn.png', alt: 'Partner 1' },
    { url: 'https://i.imgur.com/QLQJv5W.png', alt: 'Partner 2' },
    { url: 'https://i.imgur.com/dfLfSb1.png', alt: 'Partner 3' },
    { url: 'https://i.imgur.com/muu8umL.png', alt: 'Partner 4' },
    { url: 'https://i.imgur.com/Wz6j34j.png', alt: 'Partner 5' },
    { url: 'https://i.imgur.com/UuRT2SI.png', alt: 'Partner 6' },
    { url: 'https://i.imgur.com/kUKu2sD.png', alt: 'Partner 7' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://kalnore.lt/wp-content/uploads/2021/01/15.jpg"
        >
          <source src="https://kalnore.lt/wp-content/uploads/2021/01/Kalnore-Video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              ŽEMĖS ŪKIO TECHNIKOS EKSPERTAI
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Plastiko rankovės, grūdų technika ir sprendimai ūkiams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/technika"
                className="inline-flex items-center px-8 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
              >
                Peržiūrėti produkciją
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
              <Link
                to="/kontaktai"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Susisiekti
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <StatCounter
                end={95000000}
                suffix=" t"
                description="Argentinoje užaugintų grūdų yra saugojama plastiko rankovėse"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <StatCounter
                end={282000}
                suffix=" t"
                description="2020 metais mūsų klientai Lietuvoje plastiko rankovėse saugo įvairių grūdinių kultūrų"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Apie Kalnorę</h2>
              <p className="text-gray-600 text-lg mb-8">
                Esame patikimi žemės ūkio technikos tiekėjai Lietuvoje. Mūsų siūloma įranga padeda ūkininkams efektyvinti darbus, taupyti laiką ir optimizuoti grūdų bei pašarų laikymą.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/apie-mus"
                  className="inline-flex items-center px-6 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
                >
                  Sužinoti daugiau
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
                <Link
                  to="/plastiko-rankoves"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#9bc329] text-[#9bc329] rounded-lg hover:bg-[#9bc329] hover:text-white transition-colors"
                >
                  Plastiko rankovės
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#9bc329]/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://kalnore.lt/wp-content/uploads/2021/01/15.jpg"
                alt="Kalnorė equipment"
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">MŪSŲ PARTNERIAI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bendradarbiaujame su patikimais gamintojais, kad galėtume pasiūlyti aukščiausios kokybės techniką.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={partner.url}
                  alt={partner.alt}
                  className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12 bg-[#9bc329]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="grid md:grid-cols-3 gap-8 text-white text-center md:text-left flex-grow">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+37061785600" className="text-xl hover:underline">+370 617 85600</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:pardavimai@kalnore.lt" className="text-xl hover:underline">pardavimai@kalnore.lt</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-xl">Pirm–Penkt: 08:00 – 17:00</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <Link
                to="/kontaktai"
                className="inline-flex items-center px-6 py-3 bg-white text-[#9bc329] rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Susisiekti dabar
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;