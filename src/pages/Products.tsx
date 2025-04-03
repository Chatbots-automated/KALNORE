import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Modal from '../components/Modal';
import { Helmet } from 'react-helmet-async';

interface ProductDetails {
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string;
  origin?: string;
  specs?: string[];
}

interface ProductSectionProps extends ProductDetails {
  manufacturer: string;
}

const ProductSection = ({ 
  title, 
  description, 
  imageUrl, 
  fullDescription,
  origin, 
  specs = [],
  manufacturer
}: ProductSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[300px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button
            className="inline-flex items-center text-[#9bc329] hover:text-[#8ab024] font-semibold"
          >
            Skaityti daugiau <ChevronDown className="ml-2" />
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <article itemScope itemType="https://schema.org/Product">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={imageUrl}
                alt={title}
                className="w-full rounded-lg"
                itemProp="image"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" itemProp="name">{title}</h2>
              <meta itemProp="brand" content={manufacturer} />
              
              <div className="prose max-w-none" itemProp="description">
                {fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>

              {specs.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Specifikacijos</h3>
                  <ul className="space-y-2">
                    {specs.map((spec, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#9bc329] rounded-full mr-3"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {origin && (
                <div className="mt-6 flex items-center text-gray-500">
                  <span className="font-semibold">Kilmės šalis:</span>
                  <span className="ml-2">{origin}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      </Modal>
    </>
  );
};

const Products = () => {
  const products = {
    kobzarenko: [
      {
        title: "Grūdų kimštuvai ir iškrovimo mašinos",
        description: "ZAVOD KOBZARENKO grūdų kimštuvai (ZPM) ir iškrovimo mašinos (ZRM) yra patikimi įrenginiai, skirti didelės apimties grūdų laikymui.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/kimstuvasiskrovimas1.jpg",
        fullDescription: `ZAVOD KOBZARENKO grūdų kimštuvai (ZPM) ir iškrovimo mašinos (ZRM) yra patikimi įrenginiai, skirti didelės apimties grūdų laikymui naudojant plastiko rankovių technologiją. Šis metodas leidžia ūkininkams išvengti brangių sandėliavimo patalpų statybos ir greitai bei ekonomiškai reaguoti į derliaus piko metu atsirandantį saugojimo poreikį.

ZPM-180 modelis automatiškai užpildo 9 pėdų skersmens rankoves grūdais, padėdamas juos tiesiai ant paruošto paviršiaus. Modelis ZPM-180P turi papildomus maišymo velenus, leidžiančius apdoroti ne tik grūdus, bet ir išspaudas. Abu modeliai pasižymi dideliu našumu (iki 180 t/h) ir gali būti eksploatuojami su 80 AG traktoriais.

ZRM-180 – tai patogi ir mobili grūdų iškrovimo mašina, kuri leidžia efektyviai iškrauti grūdus iš rankovių, taupant laiką ir darbo jėgą. Visa įranga pagaminta Ukrainoje, pasižymi patvarumu, patikimumu ir paprastu aptarnavimu.

Tinka ūkiams, kurie ieško lankstaus sprendimo grūdų saugojimui be didelių infrastruktūros investicijų.`,
        origin: "Ukraina",
        specs: [
          "ZPM-180 pildo 9 pėdų diametro rankoves",
          "ZPM-180P turi papildomus maišytuvus išspaudoms",
          "Našumas iki 180 t/h",
          "Reikalinga 80 AG traktoriaus galia"
        ]
      },
      {
        title: "Perkrovimo puspriekabės",
        description: "PBN serijos puspriekabės maksimaliai pagreitina grūdų transportavimo procesus derliaus nuėmimo metu.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/101692302_2928764860570500_1291603120966598656_o-Copy.jpg",
        fullDescription: `Perkrovimo puspriekabės PBN serijos yra sukurtos tam, kad maksimaliai pagreitintų grūdų transportavimo procesus derliaus nuėmimo metu. Jos dirba kartu su kombainais laukuose ir užtikrina sklandų perkrovimą į laikinas saugojimo sistemas arba kimštuvus.

Šios puspriekabės pasižymi įspūdinga talpa (iki 40 m³) ir gali iškrauti grūdus sraigtiniu transportavimo būdu iki 12 tonų per minutę, priklausomai nuo traktoriaus PTO apsukų. Modeliai pritaikyti skirtingiems ūkių dydžiams, su 1–3 ašių pasirinkimu bei tvirta važiuokle.

Speciali konstrukcija sumažina grūdų pažeidimo riziką, o didelio diametro sraigtai užtikrina tolygų iškrovimą net ir sudėtingomis sąlygomis. Tai idealus sprendimas ūkiams, siekiantiems optimizuoti kombainų darbo laiką ir sumažinti laukimo tarpines.

Tai nepakeičiama priemonė efektyviam logistikos valdymui grūdų derliaus metu.`,
        origin: "Ukraina",
        specs: [
          "Talpa iki 40 m³",
          "Iškrovimo našumas iki 12 t/min",
          "1-3 ašių pasirinkimas",
          "Didelio diametro sraigtai"
        ]
      }
    ],
    agripak: [
      {
        title: "Grūdų kimštuvai (R9 / RW9)",
        description: "Modernūs kimštuvai, skirti grūdų saugojimui plastiko rankovėse tiesiai lauko sąlygomis.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2022/11/D__8386.jpg",
        fullDescription: `AGRIPAK grūdų kimštuvai R9 ir RW9 modeliai skirti grūdų saugojimui plastiko rankovėse tiesiai lauko sąlygomis. Tai moderni, ekonomiška technologija, leidžianti išvengti tradicinių grūdų sandėlių poreikio. Įranga puikiai tinka ūkininkams, kuriems svarbu greitai reaguoti į kintančius saugojimo poreikius ir sumažinti sąnaudas.

Modelis R9 užpildo 9 pėdų diametro rankoves grūdais. RW9 modelis papildomai siūlo skirtingų dydžių tunelius, leidžiančius lanksčiau prisitaikyti prie skirtingų ūkių poreikių. Abi mašinos pasižymi dideliu našumu (iki 300 t/h), yra lengvai transportuojamos ir veikia su 60–80 AG traktoriais.

Šie kimštuvai – puikus pasirinkimas norint taupyti laiką, vietą ir investicijas.`,
        origin: "Lenkija",
        specs: [
          "Našumas iki 300 t/h",
          "9 pėdų diametro rankovės",
          "Reikalinga 60-80 AG traktoriaus galia",
          "Lengvai transportuojami"
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Žemės ūkio technika | Kalnorė</title>
        <meta name="description" content="Profesionali žemės ūkio technika: grūdų kimštuvai, perkrovimo puspriekabės, vagonų pakrovimo įranga. KOBZARENKO, AGRIPAK, RICHIGER ir kiti patikimi gamintojai." />
        <meta name="keywords" content="žemės ūkio technika, grūdų kimštuvai, perkrovimo puspriekabės, KOBZARENKO, AGRIPAK, RICHIGER" />
        <link rel="canonical" href="https://www.kalnore.lt/technika" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Žemės ūkio technika | Kalnorė" />
        <meta property="og:description" content="Profesionali žemės ūkio technika: grūdų kimštuvai, perkrovimo puspriekabės, vagonų pakrovimo įranga." />
        <meta property="og:image" content="https://kalnore.lt/wp-content/uploads/2021/01/kimstuvasiskrovimas1.jpg" />
        <meta property="og:url" content="https://www.kalnore.lt/technika" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Žemės ūkio technika | Kalnorė" />
        <meta name="twitter:description" content="Profesionali žemės ūkio technika nuo patikimų gamintojų." />
        <meta name="twitter:image" content="https://kalnore.lt/wp-content/uploads/2021/01/kimstuvasiskrovimas1.jpg" />
      </Helmet>

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
              {products.kobzarenko.map((product, index) => (
                <ProductSection key={index} {...product} manufacturer="KOBZARENKO" />
              ))}
            </div>
          </section>

          {/* AGRIPAK Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">AGRIPAK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.agripak.map((product, index) => (
                <ProductSection key={index} {...product} manufacturer="AGRIPAK" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;