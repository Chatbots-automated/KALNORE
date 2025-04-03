import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
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

      {/* Intro Section */}
      <section className="py-16 bg-white">
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

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://kalnore.lt/wp-content/uploads/2021/01/15-300x300.jpg"
                alt="Plastiko rankovės"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Plastiko rankovės</h3>
                <Link
                  to="/plastiko-rankoves"
                  className="inline-flex items-center text-[#9bc329] hover:underline"
                >
                  Plačiau <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://kalnore.lt/wp-content/uploads/2021/01/1596445329_zpm-180_kobzarenko-2020-2-1-300x300.png"
                alt="KOBZARENKO technika"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">KOBZARENKO technika</h3>
                <Link
                  to="/technika"
                  className="inline-flex items-center text-[#9bc329] hover:underline"
                >
                  Plačiau <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://kalnore.lt/wp-content/uploads/2021/01/BNP-12_Kovcheg-1-1-1-300x300.png"
                alt="Vagonų pakrovimo įranga"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Vagonų pakrovimo įranga</h3>
                <Link
                  to="/technika"
                  className="inline-flex items-center text-[#9bc329] hover:underline"
                >
                  Plačiau <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
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