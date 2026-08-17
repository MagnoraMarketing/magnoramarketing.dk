import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, CheckCircle, ArrowRight, Building, Globe, CalendarCheck, Phone, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Partnerskab',
      description: 'Vi behandler vores kunders forretning som vores egen og investerer i langvarige samarbejdsrelationer baseret på gensidig tillid.'
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Kompetence',
      description: 'Vores team af erfarne salgsprofessionelle og digitale eksperter leverer høj kvalitet i alt, hvad vi gør.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: 'Resultater',
      description: 'Vi sætter klare, målbare mål og holder os selv ansvarlige – din vækst er det eneste succeskriterium, der tæller.'
    }
  ];

  const deliverables = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: 'Hjemmesider',
      description: 'Moderne, konverteringsoptimerede hjemmesider og webshops – skræddersyet fra idé til færdig løsning.',
      link: '/digital/hjemmesider'
    },
    {
      icon: <CalendarCheck className="w-12 h-12 text-blue-600" />,
      title: 'Mødebooking',
      description: 'Kvalificerede salgsmøder booket direkte i din kalender hos de rette beslutningstagere.',
      link: '/modebooking-priser'
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: 'Telesalg',
      description: 'Professionelt B2B telesalg der åbner døre, skaber dialog og driver reelle forretningsresultater.',
      link: '/ydelser'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: 'AI-løsninger',
      description: 'Skræddersyede AI-integrationer og automatiseringer – udviklet efter dine ønsker og behov.',
      link: '/digital/ai-integration'
    }
  ];

  const industries = [
    { name: 'Tech & SaaS', description: 'Stærk track record inden for salg af softwareløsninger og teknologiprodukter.' },
    { name: 'Konsulentbranchen', description: 'Specialiseret erfaring med mødebooking for konsulentvirksomheder og rådgivere.' },
    { name: 'Produktion & Industri', description: 'Solid B2B erfaring inden for industri- og produktionssektoren.' },
    { name: 'Grøn Energi & Klima', description: 'Dedikeret indsats for bæredygtige løsninger og energioptimering.' }
  ];

  return (
    <>
      <SEO
        title="Om Magnora Marketing | Vækstpartner inden for Telesalg, Mødebooking og AI"
        description="Lær mere om Magnora Marketing – din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver. Stærkt team og dokumenterede resultater."
        canonical="/om-os"
        keywords="Magnora Marketing, om os, B2B salg, vækstpartner, mødebooking, digital udvikling, salgspartner"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Magnora Marketing – din dedikerede vækstpartner
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Magnora Marketing leverer professionelt B2B telesalg, kvalificeret mødebooking, skræddersyede hjemmesider og AI-løsninger efter ønske – og skaber målbare resultater for ambitiøse virksomheder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="section-label">Hvad vi leverer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Din vækstpartner inden for telesalg, mødebooking, web og AI
            </h2>
            <p className="text-lg text-gray-600">
              Magnora Marketing leverer professionelt B2B telesalg, kvalificeret mødebooking og skræddersyede digitale løsninger. Vi hjælper både virksomheder fra idéfasen – med udvikling af den løsning, der skal sælges – til veletablerede firmaer, der vil vækste med mere salg.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <span className="inline-flex items-center text-blue-600 font-semibold mt-5">
                  Læs mere <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Om Magnora Marketing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Magnora Marketing er et resultatdrevet vækstbureau med speciale i B2B mødebooking, telemarketing og digitale løsninger. Vi er stiftet af erfarne salgsprofessionelle med et klart mål: at hjælpe virksomheder med at vinde flere kunder og skabe bæredygtig vækst.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Hos Magnora Marketing tror vi på, at den bedste vej til vækst går gennem ægte relationer og præcis kommunikation. Vores team arbejder tæt sammen med kunderne om at forstå deres marked, deres kunder og deres unikke værdiskabelse.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi kombinerer menneskelig salgskraft med smarte digitale redskaber og datadrevne metoder. Det giver os mulighed for at skalere indsatsen og levere konsistente, høje resultater – uanset branche eller målgruppe.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Magnora Marketing teamsamarbejde og partnerrelationer"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vores kerneværdier</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Disse værdier guider os i vores daglige arbejde og i samarbejdet med kunder og partnere.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Professionel B2B Mødebooking & Telemarketing med Magnora Marketing</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">
                  Magnora Marketing er bygget på et fundament af erfaring og resultater. Vores mødebookere og telemarketingkonsulenter er specialister i at åbne døre og skabe dialog med relevante beslutningstagere – på tværs af brancher og virksomhedsstørrelser.
                </p>
                <p className="text-gray-600 mb-4">
                  Vi arbejder struktureret og metodisk. Fra den første lead-kvalificering til det bookede møde sikrer vi, at hvert trin i processen lever op til høje standarder. Det betyder færre no-shows, bedre mødekvalitet og højere konverteringsrater for din salgsstyrke.
                </p>
                <p className="text-gray-600 mb-4">
                  Vores tilgang er altid skræddersyet. Vi dykker ned i din virksomhed, forstår dine produkter og services, og udvikler præcise scripts og kommunikationsstrategier, der resonerer med din målgruppe. Resultatet er møder med reel forretningspotentiale.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Brancheerfaring hos Magnora Marketing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Magnora Marketing har dyb erfaring med B2B mødebooking og salgsaktiviteter på tværs af industrier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <Building className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at tage din virksomhed til næste niveau?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tag kontakt til Magnora Marketing i dag og hør, hvordan vi kan hjælpe dig med at skabe mere vækst, flere leads og bedre resultater. Vi ser frem til at møde dig.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Magnora Marketing nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Om Magnora Marketing – Resultatdrevet Vækstbureau med Speciale i B2B Salg og Digitale Løsninger</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing er et resultatdrevet vækstbureau grundlagt af erfarne salgsprofessionelle med ét klart mål: at hjælpe B2B virksomheder i Danmark og internationalt med at vinde flere kunder og skabe bæredygtig vækst. Vi kombinerer menneskelig salgskraft med moderne digitale løsninger – herunder AI-integration, webudvikling og automatiseret leadgenerering – og leverer konsistente, høje resultater uanset branche og målgruppe. Magnora Marketing har hjulpet over 200 virksomheder med konkret vækst og har dybdegående erfaring på tværs af over 16 brancher.
            </p>
            <p className="text-gray-600 mb-6">
              Hos Magnora Marketing tror vi på, at den bedste vej til vækst går gennem ægte relationer og præcis kommunikation. Vi behandler vores kunders forretning som vores egen og investerer i langvarige samarbejdsrelationer baseret på gensidig tillid og transparens. Vores tre kerneværdier – Resultater, Transparens og Partnerskab – guider os i alt hvad vi gør, fra de første opkald til de løbende optimeringsdiskussioner med vores samarbejdspartnere.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Hjulpet over 200 virksomheder med dokumenteret vækst</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Kontorer i Aarhus, Danmark og Valencia, Spanien</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> GDPR-compliant og fuldt transparent samarbejde</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Dybdegående erfaring på tværs af 16+ brancher</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Magnora Marketing's Vision og Tilgang til B2B Vækst i Danmark</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing's vision er at være Danmarks mest effektive vækstpartner for B2B virksomheder – ved at kombinere menneskelig salgskraft med datadrevne metoder og digitale løsninger under ét tag. Vi er ikke et traditionelt callcenter – vi er en strategisk partner der forstår forretning, og som tager ansvaret for hele salgsprocessen fra første leadkvalificering til bookede møder og løbende optimering. Vores tilgang er altid skræddersyet, aldrig standardiseret.
            </p>
            <p className="text-gray-600 mb-4">
              Lær os bedre at kende og hør hvordan Magnora Marketing kan hjælpe din virksomhed med at vækste. Skriv til mail@magnoramarketing.dk – vi er altid klar til en uforpligtende samtale om dine muligheder.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvilke ydelser leverer Magnora Marketing?', answer: 'Magnora Marketing leverer hjemmesider, mødebooking, telesalg og AI-løsninger efter ønske. Vi kombinerer menneskelig salgskraft med skræddersyede digitale løsninger, så du får telesalg, kvalificeret mødebooking, konverteringsoptimerede hjemmesider og AI-integrationer under ét tag.' },
        { question: 'Hvornår blev Magnora Marketing grundlagt?', answer: 'Magnora Marketing har rødder i professionel telemarketing og B2B salg og har hjulpet over 200 virksomheder med at vækste.' },
        { question: 'Hvor er Magnora Marketing baseret?', answer: 'Magnora Marketing har kontorer i Danmark (Aarhus) og Spanien (Valencia), og betjener kunder i hele Skandinavien og internationalt.' },
        { question: 'Hvad adskiller Magnora Marketing fra andre telemarketingbureauer?', answer: 'Magnora Marketing kombinerer menneskelig salgskraft med datadrevne metoder og digitale løsninger – alt under ét tag. Vi fokuserer altid på ROI og dokumenterede resultater.' },
        { question: 'Arbejder I med store og små virksomheder?', answer: 'Ja – vi samarbejder med virksomheder i alle størrelser, fra iværksættere til etablerede B2B virksomheder.' },
        { question: "Hvad er Magnora Marketing's vision?", answer: "Magnora Marketing's vision er at være Danmarks mest effektive vækstpartner for B2B virksomheder – ved at kombinere menneskelig salgskraft med digitale løsninger." },
        { question: "Hvem er typisk kunden hos Magnora Marketing?", answer: "Vores typiske kunde er en B2B virksomhed med et klart produkt eller service, der ønsker at vækste hurtigt uden at ansætte et stort internt salgsteam." },
        { question: "Er Magnora Marketing certificeret eller brancheorganiseret?", answer: "Magnora Marketing opererer i overensstemmelse med dansk markedsføringslov og branchestandarder for telemarketing og B2B salg." },
        { question: "Hvad er Magnora Marketing's værdier?", answer: "Vores tre kerneværdier er: Resultater (vi leverer det vi lover), Transparens (åben kommunikation og rapportering) og Partnerskab (vi ser os som din partner, ikke leverandør)." },
        { question: "Hvad er størrelsen på Magnora Marketing's team?", answer: "Magnora Marketing har et kernehold af specialister suppleret med et netværk af erfarne freelance sælgere der kan mobiliseres hurtigt." },
        { question: "Har Magnora Marketing vundet priser eller anerkendelse?", answer: "Magnora Marketing er anerkendt af sine kunder for høj service og dokumenterede resultater. Vi deler gerne referencer og cases ved henvendelse." },
        { question: "Hvad er Magnora Marketing's tilgang til kvalitetssikring?", answer: "Vi QA-tjekker løbende samtaler, scripts og resultater. Kvalitet er altid vigtigere end volumen hos Magnora Marketing." },
        { question: "Er Magnora Marketing GDPR-compliant?", answer: "Ja – alle processer, databaser og kommunikation hos Magnora Marketing er i fuld overensstemmelse med GDPR og dansk databeskyttelseslovgivning." },
        { question: "Hvad sker der, hvis min kontaktperson hos Magnora Marketing skifter?", answer: "Vi sikrer altid en grundig overdragelse og kontinuitet i samarbejdet. Du mister aldrig viden eller momentum ved personskifte." },
        { question: "Kan jeg besøge Magnora Marketing's kontor?", answer: "Ja – vi har kontorer i Aarhus, Danmark og Valencia, Spanien. Kontakt os for at aftale et besøg." },
      ]} />
      <CTASection
        title="Lær os bedre at kende – tag en snak med teamet"
        subtitle="Vi er klar til at fortælle mere om vores tilgang, resultater og samarbejdsmodeller."
        primaryText="Kontakt Magnora Marketing"
        primaryLink="/kontakt"
        secondaryText="Se vores ydelser"
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default AboutPage;
