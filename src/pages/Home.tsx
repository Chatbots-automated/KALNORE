import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock, ChevronRight, Star } from 'lucide-react';
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
    { url: 'https://i.imgur.com/VvSAaTV.png', alt: 'Partner 8' }
  ];

  const productGallery = [
    {
      id: 'kobzarenko-zpm',
      image: 'https://i.imgur.com/NVAhII9.png',
      title: 'Grūdų kimštuvai',
      manufacturer: 'KOBZARENKO'
    },
    {
      id: 'perkrovimo-puspriekabes',
      image: 'https://i.imgur.com/CRdkCKU.png',
      title: 'Perkrovimo puspriekabės',
      manufacturer: 'KOBZARENKO'
    },
    {
      id: 'fields-fireman',
      image: 'https://i.imgur.com/lwZzbPx.png',
      title: 'Fields Fireman',
      manufacturer: 'FIELDS FIREMAN'
    },
    {
      id: 'agripak-r9',
      image: 'https://i.imgur.com/qjtCSF0.png',
      title: 'Grūdų kimštuvai',
      manufacturer: 'AGRIPAK'
    },
    {
      id: 'richiger-r990',
      image: 'https://i.imgur.com/pr6bgQ4.png',
      title: 'Grūdų kimštuvai',
      manufacturer: 'RICHIGER'
    }
  ];

  const testimonials = [
    {
      name: 'Audrius Vaišvylas',
      role: 'Ūkininkas',
      quote: 'Ūkininkas neslepia, kad visa plėvelė ir šiai technologijai reikalinga technika kainavo pigiau nei siekė 2017-aisiais patirti nuostoliai. Be to, jo pastebėjimu, grūdus pilti į kauges, dengti jas plėvele taip pat nėra pigu, nes ir ši plėvelė kainuoja panašiai tiek pat, kiek plastiko rankovė. Šios grūdų laikymo technologijos pagrindas – žarnos formos trisluoksnė plėvelė, į kurią grūdai pilami tam skirta mašina – kimštuvu, o iškraunami specialia grūdų iškrovimo mašina. Į vieną 90 m ilgio plastiko rankovę telpa apie 300 t kviečių. A. Vaišvylos skaičiavimu, vienai tonai grūdų supilti rankovės kaina sudaro apie 2 eurus.',
      source: 'MANO ŪKIS 2019/10'
    },
    {
      name: 'Viktoras Radionovas',
      role: 'Ūkininkas',
      quote: '„Bokštai brangiai kainuoja, greitai jų nepastatysi, tad rankovės man pasirodė labai tinkama alternatyva", – patikina Viktoras, savo ūkiui pasirinkęs optimalių išmatavimų rankoves – 60 m ilgio ir 9 pėdų (2,7 m) skersmens. Kad nereikėtų leisti ilgų nuobodžių valandų eilėse prie grūdų supirkimo punktų, Viktoras nutarė pabandyti alternatyvų variantą ir dalį 2014 m. derliaus supylė į dvi plastiko rankoves po 200 tonų – būtent tiek grūdų netilpo į sandėlius.',
      source: 'MANO ŪKIS 2016/05'
    }
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Profesionalūs sprendimai žemės ūkiui
            </h1>
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

      {/* Product Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Produktų galerija</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productGallery.map((product) => (
              <Link
                key={product.id}
                to={`/technika#${product.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold text-[#9bc329] mb-2">{product.manufacturer}</p>
                    <h3 className="text-xl font-bold">{product.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <StatCounter
                end={95000000}
                suffix=" t"
                description="Argentinoje užaugintų grūdų yra saugojama plastiko rankovėse"
              />
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <StatCounter
                end={282000}
                suffix=" t"
                description="2024 metais mūsų klientai Lietuvoje plastiko rankovėse saugo įvairių grūdinių kultūrų"
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
                  className="max-h-20 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ką sako mūsų klientai</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Patirtis ir atsiliepimai iš pirmų lūpų
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <Star className="w-8 h-8 text-[#9bc329] mr-2" />
                  <Star className="w-8 h-8 text-[#9bc329] mr-2" />
                  <Star className="w-8 h-8 text-[#9bc329] mr-2" />
                  <Star className="w-8 h-8 text-[#9bc329] mr-2" />
                  <Star className="w-8 h-8 text-[#9bc329]" />
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.source}</p>
                </div>
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