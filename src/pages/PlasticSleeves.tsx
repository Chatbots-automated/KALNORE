import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Leaf, BarChart3, Sun } from 'lucide-react';
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
            <p className="text-xl text-gray-300">
              Modernus ir ekonomiškas grūdų saugojimo sprendimas, leidžiantis efektyviai valdyti derlių be brangių sandėlių.
            </p>
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
              <p className="text-gray-600 leading-relaxed mb-6">
                Naudojant plastiko rankoves, ūkininkai gali lanksčiai plėsti saugojimo talpą pagal sezono derlių, nepriklausyti nuo komercinių sandėlių ir priimti palankesnius pardavimo sprendimus nebijodami laiko spaudimo. Rankovės sudaro anaerobinę aplinką – jose beveik nėra deguonies, tačiau gausu anglies dioksido, kas natūraliai apsaugo grūdus nuo vabzdžių, pelėsių ir kitų veiksnių be chemikalų.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#9bc329]/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Grūdų saugojimas"
                className="relative rounded-xl shadow-2xl"
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
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6">Techninė informacija</h2>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Specialios polietileno rankovės pasižymi atsparumu UV spinduliams, lietui ir temperatūros pokyčiams. Jos leidžia laikyti net šiek tiek drėgnesnius grūdus (2–3 % virš ribos), tačiau rekomenduojama reguliariai tikrinti jų būklę.
                  </p>
                  <p className="text-gray-300">
                    Rankovės dedamos ant lygios, gerai išvalytos vietos, idealiai – Šiaurės–Pietų kryptimi, kad sumažėtų saulės poveikis.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Svarbu žinoti</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#9bc329] rounded-full mr-3"></div>
                      Reguliari būklės kontrolė
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#9bc329] rounded-full mr-3"></div>
                      Greitas pažeidimų taisymas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#9bc329] rounded-full mr-3"></div>
                      Tinka įvairioms medžiagoms
                    </li>
                  </ul>
                </div>
              </div>
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
    </>
  );
};

export default PlasticSleeves;