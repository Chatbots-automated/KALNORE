import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Leaf, BarChart3, Sun, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';

const PlasticSleeves = () => {
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

  return (
    <>
      <Helmet>
        <title>Plastiko Rankovės | Kalnorė</title>
        <meta name="description" content="Modernus grūdų saugojimo būdas plastiko rankovėse - ekonomiškas ir efektyvus sprendimas ūkininkams." />
      </Helmet>

      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2400&q=80"
            alt="Grūdų laukai"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plastiko Rankovės</h1>
            <p className="text-xl text-gray-300 mb-8">
              Modernus ir ekonomiškas grūdų saugojimo sprendimas, leidžiantis efektyviai valdyti derlių be brangių sandėlių.
            </p>
            <Link
              to="/kontaktai"
              className="inline-flex items-center px-6 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
            >
              Sužinoti daugiau
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed mb-6">
                Grūdų saugojimas plastiko rankovėse yra modernus, patikrintas ir visame pasaulyje taikomas metodas, leidžiantis saugiai laikyti derlių lauko sąlygomis be poreikio statyti brangius sandėlius. Ši technologija ypač išplito Argentinoje, kur daugiau nei pusė visų grūdų yra saugoma būtent šiuo būdu.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Naudojant plastiko rankoves, ūkininkai gali lanksčiai plėsti saugojimo talpą pagal sezono derlių, nepriklausyti nuo komercinių sandėlių ir priimti palankesnius pardavimo sprendimus nebijodami laiko spaudimo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/technika"
                  className="inline-flex items-center px-6 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
                >
                  Peržiūrėti įrangą
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/kontaktai"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#9bc329] text-[#9bc329] rounded-lg hover:bg-[#9bc329] hover:text-white transition-colors"
                >
                  Susisiekti
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#9bc329]/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://i.imgur.com/eDmH1po.png"
                alt="Plastiko rankovės"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Kodėl verta rinktis plastiko rankoves?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#9bc329] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#9bc329]/10 rounded-2xl transform -rotate-3"></div>
              <img
                src="https://i.imgur.com/uVORlUM.jpeg"
                alt="Plastiko rankovių privalumai"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Įspūdingi skaičiai</h2>
            <p className="text-gray-600">Pasitikėjimas ir patirtis skaičiais</p>
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
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Pradėkite taupyti jau šiandien</h2>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlasticSleeves;