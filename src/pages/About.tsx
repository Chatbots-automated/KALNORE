import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Apie Mus</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            UAB „Kalnorė" – žemės ūkio technikos įmonė, veikianti nuo 2006 metų. 
            Mūsų tikslas – pasiūlyti aukščiausios kokybės techniką bei profesionalų 
            aptarnavimą ūkininkams visoje Lietuvoje.
          </p>
          <p className="text-lg text-gray-600">
            Dirbame tik su patikimais partneriais: KOBZARENKO, RICHIGER, AGRIPAK ir kitais. 
            Savo veiklą grindžiame atsakomybe, sąžiningumu ir ilgamečiu bendradarbiavimu 
            su klientais.
          </p>
        </div>

        <div>
          <img
            src="https://kalnore.lt/wp-content/uploads/2021/01/15.jpg"
            alt="Kalnorė company"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;