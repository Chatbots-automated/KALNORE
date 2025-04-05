import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
            <Link
              to="/technika"
              className="inline-flex items-center px-8 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Peržiūrėti produkciją
              <ArrowRight className="ml-2" size={20} />
            </Link>
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
              <p className="text-gray-600 text-lg">
                Esame patikimi žemės ūkio technikos tiekėjai Lietuvoje. Mūsų siūloma įranga padeda ūkininkams efektyvinti darbus, taupyti laiką ir optimizuoti grūdų bei pašarų laikymą.
              </p>
            </div>
            <div>
              <img
                src="https://kalnore.lt/wp-content/uploads/2021/01/15.jpg"
                alt="Kalnorė equipment"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">MŪSŲ PARTNERIAI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <p className="text-xl">📞 +370 617 85600</p>
            </div>
            <div>
              <p className="text-xl">✉️ pardavimai@kalnore.lt</p>
            </div>
            <div>
              <p className="text-xl">🕒 Pirm–Penkt: 08:00 – 17:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;