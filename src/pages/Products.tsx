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
      },
      {
        title: "Vagonų pakrovimo įranga",
        description: "BNP įranga skirta grūdų ir birių medžiagų pakrovimui į traukinių vagonus. Sraigtinė sistema leidžia efektyviai valdyti krovos procesą.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/BNP-12_Kovcheg-1-1.jpg",
        fullDescription: `BNP serijos įranga leidžia efektyviai pakrauti grūdus į geležinkelio vagonus ar kitus tūrius turinčius konteinerius. Įrenginys suprojektuotas remiantis sraigtine technologija, kuri leidžia saugiai perkelti net ir jautrias medžiagas nesukeliant jų deformacijos ar suspaudimo.

Horizontali sraigtų sistema tiekia grūdus į vertikalią liniją, kuri juos perkelia į talpą. Ši konstrukcija garantuoja vienodą ir stabilų užpildymą, o galimybė naudoti elektrinę ar PTO pavara užtikrina universalų pritaikomumą įvairioms darbo sąlygoms.

BNP-12 ir BNP-12E modeliai užtikrina didelį našumą – iki 300 t/h, todėl puikiai tinka tiek dideliems žemės ūkio ūkiams, tiek grūdų eksportuotojams.

Puikus pasirinkimas ten, kur svarbu greitis, tikslumas ir kokybės kontrolė grūdų logistikos procese.`,
        origin: "Ukraina",
        specs: [
          "Našumas iki 300 t/h",
          "Elektrinė arba PTO pavara",
          "Tinka įvairiems grūdų tipams",
          "Mobili konstrukcija"
        ]
      },
      {
        title: "Krovinius išstumiančios puspriekabės",
        description: "ATLANT TZP puspriekabės turi horizontalaus išstūmimo sistemą, kuri leidžia lengvai iškrauti grūdus ar mėšlą.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/istumiancios1.jpg",
        fullDescription: `ATLANT TZP serijos puspriekabės – tai kompleksinis transportavimo sprendimas, skirtas skirtingiems biriems kroviniams. Šių puspriekabių išskirtinumas – horizontalioji išstūmimo sistema, leidžianti iškrauti krovinius greitai, tiksliai ir be išvertimo mechanizmo.

Sistemos veikimas: pirmasis hidraulinis cilindras atidaro galinį bortą, antrasis stumia priekinę sienelę kartu su dalimi dugno, o trečiasis užbaigia procesą stumdamas sienelę iki galo. Toks iškrovimo būdas puikiai tinka darbui su grūdais, mėšlu, sraigtais ir kitais komponentais.

Dėl aukštos kokybės konstrukcijos ir didelio tūrio (iki 49 m³) šios puspriekabės yra patikimas pasirinkimas tiek intensyviam ūkininkavimui, tiek pramonei. Cinkuota konstrukcija ir tvirtos ašys užtikrina ilgaamžiškumą.

Skirta tiems, kurie nori maksimalaus efektyvumo be kompromisų dėl darbo sąlygų ar krovinio tipo.`,
        origin: "Ukraina",
        specs: [
          "Talpa iki 49 m³",
          "Horizontali išstūmimo sistema",
          "Cinkuota konstrukcija",
          "Tinka įvairiems kroviniams"
        ]
      },
      {
        title: "Savikrovės ritinių puspriekabės",
        description: "PT modeliai automatizuotai pakrauna, perveža ir iškrauna ritinius. Tinka ūkiams su dideliais plotais.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/savikroves1.jpg",
        fullDescription: `PT serijos ritinių puspriekabės išsprendžia problemą, su kuria susiduria didesni gyvulininkystės ar pašarų ūkiai – kaip greitai, saugiai ir efektyviai surinkti bei perkelti didelius kiekius ritinių.

Pakrovimo procesas yra visiškai automatizuotas: ritinys įkeliamas specialiu kėlimo mechanizmu, perstumiamas link puspriekabės galo, o iškrovimas vyksta per atveriamą galinę dalį. Priekinė siena yra stumdoma, todėl ritiniai išstumti be papildomos įrangos ar žmogaus pastangų.

Modeliai skiriasi ritinių talpa (nuo 12 iki 30), išmatavimais ir pritaikymu skirtingo tipo ritiniams. Galima pasirinkti modelius tiek mažesniems ūkiams, tiek profesionaliam naudojimui didelio masto laukuose.

Optimalus pasirinkimas tiems, kas nori sumažinti darbo sąnaudas ir dirbti su maksimalia efektyvumo galia.`,
        origin: "Ukraina",
        specs: [
          "Talpa nuo 12 iki 30 ritinių",
          "Automatizuotas pakrovimas",
          "Stumdoma priekinė siena",
          "Tinka įvairių dydžių ritiniams"
        ]
      }
    ],
    agripak: [
      {
        title: "Grūdų kimštuvai (R9 / RW9)",
        description: "R9 ir RW9 modeliai sukurti grūdų saugojimui plastiko rankovėse. Tinka ir išspaudoms.",
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
      },
      {
        title: "Grūdų iškrovimo mašinos (RP 9)",
        description: "RP 9 iškrauna grūdus ir kukurūzus iš plastiko rankovių. Pasižymi unikaliu adapteriu šlapiam kukurūzui.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2022/11/D__0886.jpg",
        fullDescription: `RP 9 – tai išskirtinė grūdų iškrovimo mašina, sukurta tiek grūdams, tiek kukurūzams, įskaitant šlapius. Viena iš retų mašinų rinkoje, kuri turi specialų adapterį būtent šlapio kukurūzo iškrovimui, kas padidina jos funkcionalumą ir panaudojimo spektrą.

Mašina dirba su 6, 9 ir 10 pėdų plastiko rankovėmis, todėl idealiai tinka įvairiems ūkiams. Reikalingas tik 130 AG traktorius, o našumas siekia iki 150 t/h, priklausomai nuo grūdų tipo ir drėgmės.

Ideali tiems, kuriems svarbu universalumas, patikimumas ir tikslumas grūdų valdymo procese.`,
        origin: "Lenkija",
        specs: [
          "Našumas iki 150 t/h",
          "Tinka 6-10 pėdų rankovėms",
          "Specialus adapteris šlapiam kukurūzui",
          "Reikalinga 130 AG traktoriaus galia"
        ]
      },
      {
        title: "Mobilūs grūdų traiškytuvai / malūnai",
        description: "G serija skirta traiškytų grūdų gamybai ir laikymui rankovėse. RSA modelis leidžia grūdus malti ir kimšti.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2022/11/D__8418.jpg",
        fullDescription: `AGRIPAK G serijos traiškytuvai yra skirti grūdainio, traiškytų kukurūzų ar grūdų gamybai. Jie turi rinkoje didžiausio diametro traiškymo volus, kas užtikrina ne tik didesnį našumą, bet ir geresnę apdorojimo kokybę. Tai reiškia mažesnį energijos suvartojimą ir didesnį darbo efektyvumą.

RSA modelis veikia kaip mobilus grūdų malūnas ir kimštuvas viename – jis smulkina grūdus į skirtingas frakcijas ir kimša tiesiai į plastiko rankoves. Galima naudoti su konservantais, todėl puikiai tinka gyvulių ūkiams, kuriuose reikalingas kombinuotas pašarų paruošimas.

Tai ne tik įrenginys, o visa grūdų apdorojimo stotis ant ratų.`,
        origin: "Lenkija",
        specs: [
          "Didžiausio diametro traiškymo volai",
          "Galimybė naudoti konservantus",
          "Mobili konstrukcija",
          "Tinka įvairiems grūdams"
        ]
      },
      {
        title: "Mobilūs pašarų maišytuvai (MM-5000)",
        description: "MM-5000 ruošia kombinuotą pašarą iš vietinių žaliavų. Turi 5 t bunkerio talpą ir tikslų svėrimą.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2022/11/MK30323-w-3-scaled.jpg",
        fullDescription: `MM-5000 pašarų maišytuvas yra viskas viename – sumala, pasveria, sumaišo ir paruošia optimalų kombinuotą pašarą. Dėl integruotos elektroninės svėrimo sistemos galima tiksliai dozuoti kiekvieną komponentą, o 5 tonų maišymo talpa leidžia greitai aprūpinti kelis ūkius per dieną.

Dėl uždaros sistemos darbas yra švarus – minimalus dulkių kiekis, mažesnė tarša, mažesnis darbo jėgos poreikis. Pašaras gali būti pilamas tiesiai gyvūnams ar saugojimui.

Puikus pasirinkimas profesionaliems ūkininkams, kurie vertina tikslumą, higieną ir greitį.`,
        origin: "Lenkija",
        specs: [
          "5 tonų bunkerio talpa",
          "Elektroninė svėrimo sistema",
          "Uždara sistema",
          "Tinka keliems ūkiams aptarnauti"
        ]
      }
    ],
    richiger: [
      {
        title: "Grūdų kimštuvai (R990 / R1090)",
        description: "R990 ir R1090 modeliai užtikrina greitą ir patikimą kimšimą į plastiko rankoves. Našumas iki 900 t/h.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/grudukimsutvas1.jpg",
        fullDescription: `RICHIGER grūdų kimštuvai, gaminami Argentinoje, išsiskiria našumu – iki 900 t/h – ir itin kompaktišku kimšimu. Šie modeliai leidžia saugoti didelius kiekius grūdų tiesiai laukuose naudojant plastiko rankoves, išvengiant brangių saugojimo patalpų statybų.

Naudojami kartu su grūdų perkrovimo priekabomis, kimštuvai veikia sklandžiai ir be trikdžių. Paprasta konstrukcija, patikima pavara ir minimali priežiūra leidžia ilgą laiką išlaikyti aukštą našumą.

RICHIGER – kai reikia greitai ir efektyviai susitvarkyti su didelėmis grūdų apimtimis.`,
        origin: "Argentina",
        specs: [
          "Našumas iki 900 t/h",
          "Kompaktiška konstrukcija",
          "Minimali priežiūra",
          "Tinka didelėms apimtims"
        ]
      },
      {
        title: "Grūdų iškrovimo mašinos (E-6910)",
        description: "E-6910 modelis leidžia iškrauti iki 350 t/h. Tinka įvairaus diametro rankovėms.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/iskrovimomasina1.png",
        fullDescription: `Modelis E-6910 skirtas našiam grūdų išėmimui iš 6–10 pėdų plastiko rankovių. Mechaninė grandininė pavara užtikrina patikimą veikimą, o darbinis aukštis – beveik 5 metrai – leidžia iškrauti tiesiai į transporto priemones.

Ši mašina – vienas iš patikimiausių sprendimų ūkiams, kurie naudoja plastiko rankoves kaip pagrindinę saugojimo formą ir nori išsaugoti grūdų kokybę bei švarą iškrovimo metu.

Puikus pasirinkimas didesniems grūdų kiekiams valdyti nebrangiai ir efektyviai.`,
        origin: "Argentina",
        specs: [
          "Našumas iki 350 t/h",
          "Tinka 6-10 pėdų rankovėms",
          "5 metrų darbinis aukštis",
          "Reikalinga 60 AG traktoriaus galia"
        ]
      },
      {
        title: "Grūdų traiškytuvai (R950M / R6 Plus)",
        description: "R950M, R950MX ir R6 Plus traiško tiek sausus, tiek drėgnus grūdus. Veikia su 6–9 pėdų rankovėmis.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/grudutraiskytuvai1.jpg",
        fullDescription: `RICHIGER traiškytuvai skirti ne tik grūdainio gamybai, bet ir skaldytų, sausų bei drėgnų grūdų laikymui plastiko rankovėse. Su galimybe dirbti net 250 t/h, šie įrenginiai leidžia labai greitai paruošti pašarus ar grūdus saugojimui.

Jie tinka įvairioms sąlygoms, veikia su 6 arba 9 pėdų rankovėmis, reikalauja mažai galios ir tinka tiek lauko, tiek stacionariam naudojimui.

Geriausia alternatyva didelėms ir brangioms stacionarioms traiškymo sistemoms.`,
        origin: "Argentina",
        specs: [
          "Našumas iki 250 t/h",
          "Tinka 6-9 pėdų rankovėms",
          "Universalus pritaikymas",
          "Tinka sausiems ir drėgniems grūdams"
        ]
      }
    ],
    other: [
      {
        title: "Vogelscheuche Aitvarai",
        description: "Delta aitvarai imituoja plėšrūnų skrydį ir efektyviai baido paukščius. Patikrinti sprendimai sodams ir laukams.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/5c189adeb6ad2119382929.jpg",
        fullDescription: `Šie specialūs aitvarai yra sukurti paukščių baidymui – imituoja plėšrų paukštį, sklendžiantį danguje. Toks vaizdas sukelia natūralų baimės refleksą kenkėjams, todėl jie vengia saugomos teritorijos.

Pagaminti iš Spinnaker audinio, su teleskopiniais aliuminio stulpais ir stiklo pluošto rėmu, aitvarai yra atsparūs vėjui ir orui. Veikia net esant silpnam 0.9 m/s vėjui. Patvirtinta praktikoje ir moksliškai.

Ekologiška, tylu, veiksminga – tobulas sprendimas nuo balandžių, varnų ir žąsų.`,
        specs: [
          "Veikia nuo 0.9 m/s vėjo",
          "Spinnaker audinys",
          "Teleskopiniai aliuminio stulpai",
          "Stiklo pluošto rėmas"
        ]
      },
      {
        title: "KEHRFIX valytuvai / šepečiai",
        description: "Cinkuota, be aptarnavimo sistema grūdų, sniego ir siloso valymui. Montuojama ant krautuvų, traktorių.",
        imageUrl: "https://kalnore.lt/wp-content/uploads/2021/01/5bf7f4213c17a079666126.jpg",
        fullDescription: `KEHRFIX – tai paprasta, tačiau išskirtinai efektyvi valymo sistema, skirta traktoriams, krautuvams ar kitai technikai. Nereikalauja elektros, hidraulikos ar judančių dalių – todėl beveik nereikalauja priežiūros ir tarnauja dešimtmečius.

Idealiai tinka grūdų valymui elevatoriuose, siloso tranšėjų valymui, pašarų stūmimui, sporto aikštynams ar net sniego šalinimui. Keičiamos šepetėlių juostos, minimali priežiūra ir pilnai cinkuota konstrukcija – tai ekonomiškas ir patikimas sprendimas kasdieniams valymo darbams.

Tausokite techniką ir laiką naudodami efektyviausią valytuvą rinkoje.`,
        origin: "Vokietija",
        specs: [
          "Cinkuota konstrukcija",
          "Nereikalauja elektros",
          "Keičiamos šepetėlių juostos",
          "Universalus pritaikymas"
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

          {/* RICHIGER Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">RICHIGER</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.richiger.map((product, index) => (
                <ProductSection key={index} {...product} manufacturer="RICHIGER" />
              ))}
            </div>
          </section>

          {/* Other Equipment Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Kita įranga</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.other.map((product, index) => (
                <ProductSection key={index} {...product} manufacturer={product.title.split(' ')[0]} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;