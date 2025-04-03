import React from 'react';

const ProductSection = ({ 
  title, 
  description, 
  imageUrl, 
  origin, 
  specs = [] 
}: { 
  title: string; 
  description: string; 
  imageUrl: string; 
  origin?: string;
  specs?: string[];
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
    <div className="aspect-w-16 aspect-h-9 relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[300px] object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {specs.length > 0 && (
        <ul className="mb-4 space-y-2">
          {specs.map((spec, index) => (
            <li key={index} className="text-gray-600 flex items-center">
              <span className="mr-2">•</span> {spec}
            </li>
          ))}
        </ul>
      )}
      {origin && (
        <p className="text-sm text-gray-500 mt-4">
          <span className="font-semibold">Kilmės šalis:</span> {origin}
        </p>
      )}
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Produkcija</h1>
      
      <p className="text-lg text-gray-600 mb-12">
        Platus žemės ūkio technikos pasirinkimas: nuo grūdų kimštuvų iki vagonų pakrovimo įrangos. 
        Dirbame tik su patikimais gamintojais.
      </p>

      <div className="space-y-16">
        {/* KOBZARENKO Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">KOBZARENKO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductSection
              title="Grūdų kimštuvai ir iškrovimo mašinos"
              description="ZAVOD KOBZARENKO prikabinami grūdų kimštuvai ZPM ir iškrovimo mašinos ZRM yra skirti grūdų laikymui plastiko rankovėse. Puikiai tinka sprendžiant grūdų saugojimo vietos trūkumą – su nedidelės galios traktoriumi galima pasiekti didelį našumą lauko sąlygomis."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/kimstuvasiskrovimas1.jpg"
              origin="Ukraina"
              specs={[
                "ZPM-180 pildo 9 pėdų diametro rankoves",
                "ZPM-180P turi papildomus maišytuvus išspaudoms",
                "ZRM-180 iškrauna grūdus iš rankovių"
              ]}
            />
            
            <ProductSection
              title="Grūdų perkrovimo puspriekabės"
              description="PBN puspriekabės efektyvina kombainų darbą ir leidžia greitai perkelti grūdus į kimštuvus ar sandėliavimo vietas. Tinka įvairioms darbo sąlygoms, pasižymi didele talpa ir našumu iki 12 t/min."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/101692302_2928764860570500_1291603120966598656_o-Copy.jpg"
              origin="Ukraina"
            />

            <ProductSection
              title="Vagonų iškrovimo įranga"
              description="RVM serijos įranga skirta biriems kroviniams iškrauti tiesiai iš vagonų į puspriekabes ar kitus transportavimo įrenginius. Specialūs sraigtai apsaugo grūdus nuo pažeidimų."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/iskrovimo1.jpg"
              origin="Ukraina"
            />

            <ProductSection
              title="Vagonų pakrovimo įranga"
              description="BNP įranga skirta grūdų ir birių medžiagų pakrovimui į traukinių vagonus. Sraigtinė sistema leidžia efektyviai valdyti krovos procesą. Galimos elektrinės ir PTO versijos."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/BNP-12_Kovcheg-1-1.jpg"
              origin="Ukraina"
            />

            <ProductSection
              title="Krovinius išstumiančios puspriekabės"
              description="ATLANT TZP puspriekabės turi horizontalaus išstūmimo sistemą, kuri leidžia lengvai iškrauti grūdus ar mėšlą. Konstrukcija paremta judančia priekine siena. Talpa iki 49 m³."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/istumiancios1.jpg"
              origin="Ukraina"
            />

            <ProductSection
              title="Savikrovės ritinių puspriekabės"
              description="PT modeliai automatizuotai pakrauna, perveža ir iškrauna ritinius. Tinka ūkiams su dideliais plotais. Valdymas atliekamas vieno žmogaus."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/savikroves1.jpg"
              origin="Ukraina"
            />
          </div>
        </section>

        {/* AGRIPAK Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">AGRIPAK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductSection
              title="Grūdų kimštuvai"
              description="R9 ir RW9 modeliai sukurti grūdų saugojimui plastiko rankovėse. Tinka ir išspaudoms. Paprastas naudojimas ir didelis našumas lauko sąlygomis."
              imageUrl="https://kalnore.lt/wp-content/uploads/2022/11/D__8386.jpg"
              origin="Lenkija"
            />

            <ProductSection
              title="Grūdų iškrovimo mašinos"
              description="RP 9 iškrauna grūdus ir kukurūzus iš plastiko rankovių. Pasižymi unikaliu adapteriu šlapiam kukurūzui, veikia su 6–10 pėdų rankovėmis."
              imageUrl="https://kalnore.lt/wp-content/uploads/2022/11/D__0886.jpg"
              origin="Lenkija"
            />

            <ProductSection
              title="Mobilūs grūdų traiškytuvai / malūnai"
              description="G serija skirta traiškytų grūdų gamybai ir laikymui rankovėse. RSA modelis leidžia grūdus malti ir kimšti. Galima dirbti ir su konservantais."
              imageUrl="https://kalnore.lt/wp-content/uploads/2022/11/D__8418.jpg"
              origin="Lenkija"
            />

            <ProductSection
              title="Mobilūs pašarų maišytuvai"
              description="MM-5000 ruošia kombinuotą pašarą iš vietinių žaliavų. Turi 5 t bunkerio talpą, filtrų sistemą ir tikslų svėrimą. Tinka kelių ūkių aptarnavimui."
              imageUrl="https://kalnore.lt/wp-content/uploads/2022/11/MK30323-w-3-scaled.jpg"
              origin="Lenkija"
            />
          </div>
        </section>

        {/* RICHIGER Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">RICHIGER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductSection
              title="Grūdų kimštuvai"
              description="R990 ir R1090 modeliai užtikrina greitą ir patikimą kimšimą į plastiko rankoves. Našumas iki 900 t/h. Lengvas valdymas ir kompaktiškas dizainas."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/grudukimsutvas1.jpg"
              origin="Argentina"
            />

            <ProductSection
              title="Grūdų iškrovimo mašinos"
              description="E-6910 modelis leidžia iškrauti iki 350 t/h. Tinka įvairaus diametro rankovėms. Reikalauja tik 60 AG galios traktoriaus."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/iskrovimomasina1.png"
              origin="Argentina"
            />

            <ProductSection
              title="Grūdų traiškytuvai"
              description="R950M, R950MX ir R6 Plus traiško tiek sausus, tiek drėgnus grūdus. Veikia su 6–9 pėdų rankovėmis. Didelis našumas iki 250 t/h."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/grudutraiskytuvai1.jpg"
              origin="Argentina"
            />
          </div>
        </section>

        {/* Additional Equipment Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Papildoma įranga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductSection
              title="Vogelscheuche Aitvarai"
              description="Delta aitvarai imituoja plėšrūnų skrydį ir efektyviai baido paukščius. Patikrinti sprendimai sodams, laukams ir pramonei. Atsparūs vėjui, naudingi ištisus metus."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/5c189adeb6ad2119382929.jpg"
            />

            <ProductSection
              title="KEHRFIX valytuvai / šepečiai"
              description="Cinkuota, be aptarnavimo sistema grūdų, sniego ir siloso valymui. Montuojama ant krautuvų, traktorių ar kitos technikos. Itin ilgaamžiai."
              imageUrl="https://kalnore.lt/wp-content/uploads/2021/01/5bf7f4213c17a079666126.jpg"
              origin="Vokietija"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;