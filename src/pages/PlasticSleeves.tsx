import React from 'react';

const PlasticSleeves = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Plastiko Rankovės</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-600 mb-8">
            Aukštos kokybės plastiko rankovės grūdų, siloso, pašarų laikymui. 
            Įvairūs dydžiai ir storiai, skirti ilgam laikymui bei apsaugai nuo oro sąlygų.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Specifikacijos</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="font-semibold w-32">Storis:</span>
                <span>230–250 mikronų</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-32">Ilgis:</span>
                <span>60–120 metrų</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-32">Diametras:</span>
                <span>5–10 ft</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-32">UV apsauga:</span>
                <span>✓</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-32">Kilmės šalis:</span>
                <span>Argentina / Vokietija</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img
            src="https://kalnore.lt/wp-content/uploads/2021/01/15-300x300.jpg"
            alt="Plastiko rankovės"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PlasticSleeves;