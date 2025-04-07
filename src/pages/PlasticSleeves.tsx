import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Leaf, BarChart3, Sun, ArrowRight, Check, ChevronRight, Clock, Package, Truck, DollarSign, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';
import Modal from '../components/Modal';

const PlasticSleeves = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-[#9bc329]" />,
      title: "Anaerobinė apsauga",
      description: "Natūrali grūdų apsauga be chemikalų dėl deguonies trūkumo ir CO₂ gausos"
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#9bc329]" />,
      title: "Ekologiška",
      description: "Draugiška aplinkai saugojimo sistema be papildomų statinių"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#9bc329]" />,
      title: "Lankstumas",
      description: "Galimybė plėsti saugojimo talpą pagal poreikį"
    },
    {
      icon: <Sun className="w-8 h-8 text-[#9bc329]" />,
      title: "UV Atsparumas",
      description: "Specialios rankovės atsparios saulei ir oro sąlygoms"
    }
  ];

  const features = [
    "Tinka įvairiems grūdams ir kultūroms",
    "Minimali investicija į infrastruktūrą",
    "Greitas įdiegimas ir pradėjimas",
    "Lengvas transportavimas",
    "Apsauga nuo kenkėjų",
    "Ekonomiškas sprendimas",
    "Lankstus talpos didinimas",
    "Mažos eksploatacijos išlaidos"
  ];

  const processSteps = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Pasiruošimas",
      description: "Rankovių ir įrangos paruošimas darbui",
      time: "30 min"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Kimšimas",
      description: "Grūdų kimšimas į rankoves",
      time: "2-4 val"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Saugojimas",
      description: "Saugus grūdų laikymas",
      time: "Iki 18 mėn"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Iškrovimas",
      description: "Grūdų iškrovimas pagal poreikį",
      time: "2-3 val"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      title: "Grūdų laukai",
      description: "Derliaus nuėmimas ir saugojimas"
    },
    {
      url: "https://i.imgur.com/eDmH1po.png",
      title: "Plastiko rankovės",
      description: "Modernus saugojimo sprendimas"
    },
    {
      url: "https://i.imgur.com/uVORlUM.jpeg",
      title: "Grūdų kimšimas",
      description: "Efektyvus procesas"
    }
  ];

  const costComparison = [
    {
      type: "Tradicinis sandėlis",
      costs: [
        "Didelės pradinės investicijos",
        "Pastovi priežiūra",
        "Nelanksčios išlaidos",
        "Papildomi mokesčiai"
      ],
      icon: <DollarSign className="w-12 h-12 text-red-500" />
    },
    {
      type: "Plastiko rankovės",
      costs: [
        "Mažos pradinės išlaidos",
        "Minimali priežiūra",
        "Mokate tik už naudojamą talpą",
        "Nėra papildomų mokesčių"
      ],
      icon: <DollarSign className="w-12 h-12 text-[#9bc329]" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plastiko Rankovės | Kalnorė</title>
        <meta name="description" content="Modernus grūdų saugojimo būdas plastiko rankovėse - ekonomiškas ir efektyvus sprendimas ūkininkams." />
      </Helmet>

      {/* Hero Section with Parallax Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center bg-no-repeat transform scale-110" style={{ transform: 'scale(1.1)' }}>
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Revoliucinis Grūdų Saugojimo Sprendimas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Modernios plastiko rankovės - ekonomiškas ir efektyvus būdas saugoti derlių be brangių sandėlių
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontaktai"
              className="inline-flex items-center px-8 py-4 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
            >
              Sužinoti daugiau
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/technika"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Peržiūrėti įrangą
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Process Timeline Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paprastas ir Efektyvus Procesas</h2>
            <p className="text-xl text-gray-600">Keturi žingsniai iki saugaus derliaus</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#9bc329]/20" />
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center text-sm text-[#9bc329] font-semibold gap-1">
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-[#9bc329] rounded-full z-10">
                    {step.icon}
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kodėl Verta Rinktis Plastiko Rankoves?</h2>
            <p className="text-xl text-gray-600">Modernūs sprendimai šiuolaikiniam ūkininkui</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Grūdų Saugojimo Galerija</h2>
            <p className="text-xl text-gray-600">Pažvelkite į modernų grūdų saugojimo procesą</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Išlaidų Palyginimas</h2>
            <p className="text-xl text-gray-600">Tradicinis sandėliavimas vs. Plastiko rankovės</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {costComparison.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{option.type}</h3>
                  {option.icon}
                </div>
                <ul className="space-y-4">
                  {option.costs.map((cost, costIndex) => (
                    <li key={costIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">{cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Įspūdingi Skaičiai</h2>
            <p className="text-xl text-gray-600">Pasitikėjimas ir patirtis skaičiais</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <StatCounter
                end={95000000}
                suffix=" t"
                description="Argentinoje užaugintų grūdų saugojama plastiko rankovėse"
              />
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <StatCounter
                end={282000}
                suffix=" t"
                description="Lietuvos ūkininkai saugo grūdus plastiko rankovėse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pradėkite Taupyti Jau Šiandien
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sužinokite, kaip plastiko rankovės gali padėti jūsų ūkiui. 
            Mūsų ekspertai pasiruošę atsakyti į visus jūsų klausimus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/kontaktai"
              className="inline-flex items-center px-8 py-4 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
            >
              Gauti pasiūlymą
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/technika"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Peržiūrėti įrangą
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Gallery"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        )}
      </Modal>
    </>
  );
};

export default PlasticSleeves;