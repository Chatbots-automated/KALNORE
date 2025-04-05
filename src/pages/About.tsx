import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, History, Target } from 'lucide-react';
import StatCounter from '../components/StatCounter';

const About = () => {
  const milestones = [
    {
      year: "2006",
      title: "Įmonės įkūrimas",
      description: "Pradėjome veiklą su aiškia vizija - teikti aukščiausios kokybės žemės ūkio techniką Lietuvos ūkininkams."
    },
    {
      year: "2010",
      title: "Plėtra į naujas rinkas",
      description: "Tapome oficialiais KOBZARENKO atstovais Lietuvoje."
    },
    {
      year: "2015",
      title: "Technologijų revoliucija",
      description: "Pristatėme inovatyvias plastiko rankovių sistemas Lietuvos rinkai."
    },
    {
      year: "2020",
      title: "Rinkos lyderiai",
      description: "Tapome pirmaujančia įmone plastiko rankovių ir grūdų saugojimo sprendimų srityje."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2400&q=80"
            alt="Žemės ūkio technika"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apie Kalnorę</h1>
            <p className="text-xl text-gray-300 mb-8">
              Nuo 2006 metų kuriame inovatyvius sprendimus Lietuvos žemės ūkiui
            </p>
            <Link
              to="/kontaktai"
              className="inline-flex items-center px-6 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
            >
              Susisiekite su mumis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mūsų istorija</h2>
            <p className="text-lg text-gray-600 mb-6">
              UAB „Kalnorė" – žemės ūkio technikos įmonė, veikianti nuo 2006 metų. 
              Mūsų tikslas – pasiūlyti aukščiausios kokybės techniką bei profesionalų 
              aptarnavimą ūkininkams visoje Lietuvoje.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Dirbame tik su patikimais partneriais: KOBZARENKO, RICHIGER, AGRIPAK ir kitais. 
              Savo veiklą grindžiame atsakomybe, sąžiningumu ir ilgamečiu bendradarbiavimu 
              su klientais.
            </p>
            <Link
              to="/technika"
              className="inline-flex items-center px-6 py-3 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
            >
              Peržiūrėti produkciją
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#9bc329]/10 rounded-2xl transform rotate-3"></div>
            <img
              src="https://kalnore.lt/wp-content/uploads/2021/01/15.jpg"
              alt="Kalnorė company"
              className="relative rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <StatCounter end={17} suffix="+" description="Metų patirties" />
          <StatCounter end={500} suffix="+" description="Patenkintų klientų" />
          <StatCounter end={1000} suffix="+" description="Įgyvendintų projektų" />
          <StatCounter end={7} description="Patikimi partneriai" />
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Award className="w-12 h-12 text-[#9bc329] mb-4" />
            <h3 className="text-xl font-bold mb-4">Kokybė</h3>
            <p className="text-gray-600">
              Dirbame tik su aukščiausios kokybės technika ir patikimais gamintojais, 
              užtikrindami ilgalaikį produktų tarnavimą.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="w-12 h-12 text-[#9bc329] mb-4" />
            <h3 className="text-xl font-bold mb-4">Profesionalumas</h3>
            <p className="text-gray-600">
              Mūsų komanda - savo srities ekspertai, visada pasiruošę patarti ir 
              padėti išsirinkti tinkamiausią sprendimą.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Target className="w-12 h-12 text-[#9bc329] mb-4" />
            <h3 className="text-xl font-bold mb-4">Inovacijos</h3>
            <p className="text-gray-600">
              Nuolat sekame rinkos tendencijas ir pristatome naujausius technologinius 
              sprendimus Lietuvos ūkininkams.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mūsų kelias</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-2xl font-bold text-[#9bc329]">{milestone.year}</span>
                </div>
                <div className="flex-grow bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Pradėkime bendradarbiauti</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Esame pasiruošę padėti jums rasti geriausią sprendimą jūsų ūkiui. 
            Susisiekite su mumis ir aptarkime galimybes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/kontaktai"
              className="inline-flex items-center px-8 py-4 bg-[#9bc329] text-white rounded-lg hover:bg-opacity-90 transition-colors group"
            >
              Susisiekti dabar
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/technika"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Peržiūrėti produkciją
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;