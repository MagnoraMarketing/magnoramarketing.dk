import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const faqs = [
    { question: "Hvordan kommer vi i gang med et samarbejde?", answer: "Vi starter med et uforpligtende møde, hvor vi diskuterer jeres behov og mål. Herefter udarbejder vi en skræddersyet løsning til jer." },
    { question: "Hvad koster det at samarbejde med Magnora Marketing?", answer: "Vi tilbyder fleksible prismodeller tilpasset jeres behov. Kontakt os for et skræddersyet tilbud baseret på jeres specifikke ønsker og mål." },
    { question: "Hvordan bliver jeg freelance sælger hos Magnora Marketing?", answer: "Start med at sende din ansøgning gennem vores kontaktformular. Vi inviterer dig derefter til en samtale, hvor vi diskuterer mulighederne." },
    { question: "Hvilke krav er der til freelance sælgere?", answer: "Vi søger engagerede personer med gode kommunikationsevner. Du skal have et hjemmekontor med stabilt internet og kunne arbejde minimum 20 timer om ugen." },
    { question: "Svarer I på henvendelser i weekenden?", answer: "Vi er tilgængelige mandag-fredag 8-16. Henvendelser modtaget i weekenden besvares den følgende hverdag." },
    { question: "Hvordan kontakter jeg Magnora Marketing?", answer: "Send os en email på mail@magnoramarketing.dk, så vender vi tilbage inden for én hverdag." },
    { question: "Hvad skal jeg inkludere i min henvendelse?", answer: "Fortæl os kort om din virksomhed, hvad du har brug for hjælp til, og hvad dit budget er. Jo mere info, jo bedre kan vi forberede samtalen." },
    { question: "Hvor lang tid tager det at få et tilbud?", answer: "Typisk sender vi et første udkast til tilbud inden for 2-3 hverdage efter den indledende samtale." },
    { question: "Kan jeg booke et møde online?", answer: "Ja – brug kontaktformularen til at angive dine ønsker, og vi kontakter dig for at aftale et tidspunkt." },
    { question: "Hvad sker der efter jeg har sendt en formular?", answer: "Du modtager en bekræftelse, og en af vores specialister kontakter dig inden for én hverdag." },
    { question: "Kan jeg stille anonyme spørgsmål?", answer: "Ja – du er velkommen til at kontakte os med spørgsmål uden at forpligte dig til noget." },
    { question: "Tilbyder I møder på video?", answer: "Ja – vi mødes gerne på video via Teams, Zoom eller Meet, alt efter hvad der passer dig bedst." },
    { question: "Er der mulighed for et fysisk møde?", answer: "Ja – vi holder gerne et fysisk møde på vores kontorer i Aarhus eller Valencia, eller hos dig." },
    { question: "Hvad koster den første samtale?", answer: "Den første samtale er altid gratis og uforpligtende. Vi ønsker at lære din virksomhed at kende, før vi anbefaler en løsning." },
  ];

  return (
    <>
      <SEO
        title="Kontakt Magnora Marketing | Få et uforpligtende tilbud"
        description="Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe din virksomhed med professionel telemarketing, mødebooking eller digital udvikling. ✓ Gratis rådgivning ✓ Skræddersyede løsninger"
        canonical="/kontakt"
        keywords="kontakt, telemarketing bureau, mødebooking bureau, digital udvikling, B2B salg, rådgivning"
      />

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">Kontakt Magnora Marketing</h1>
            <p className="text-lg text-gray-600">
              Vi er klar til at hjælpe dig med dine spørgsmål om telemarketing,
              mødebooking eller jobmuligheder. Udfyld formularen nedenfor, eller
              kontakt os direkte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-2">Send os en besked</h2>
                <p className="text-gray-500 text-sm mb-7">Vælg hvad din henvendelse drejer sig om, så lander den hos den rette specialist med det samme.</p>
                <ContactForm sourceLabel="Kontaktsiden" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Kontaktoplysninger</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-medium text-lg mb-3">Magnora Marketing</h3>
                    <div className="flex items-start">
                      <MapPin size={24} className="text-blue-600 mr-4 mt-1" />
                      <p className="text-gray-600">
                        Calle Purisima 5<br />
                        46540 El Puig<br />
                        Valencia, Spanien
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={24} className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:mail@magnoramarketing.dk" className="hover:text-blue-600">mail@magnoramarketing.dk</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">Website</h3>
                    <p className="text-gray-600">
                      <a href="https://www.magnoramarketing.dk" className="hover:text-blue-600">www.magnoramarketing.dk</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">Åbningstider</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Mandag - Torsdag:</span>
                    <span>8:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fredag:</span>
                    <span>8:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lørdag - Søndag:</span>
                    <span>Lukket</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Optimized Content */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Professionel Mødebooking & Telemarketing Partner</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Magnora Marketing er din professionelle partner inden for B2B telemarketing og mødebooking.
                Med over 20 års erfaring i branchen har vi specialiseret os i at skabe værdifulde forbindelser
                mellem virksomheder og hjælpe vores kunder med at vækste gennem målrettede salgsaktiviteter.
              </p>
              <p className="mb-4">
                Vores dedikerede team af erfarne telemarketingkonsulenter og mødebookere arbejder målrettet
                med at generere kvalificerede leads og booke møder med beslutningstagere i jeres målgruppe.
                Vi tilbyder skræddersyede løsninger tilpasset jeres specifikke behov og branche.
              </p>
              <p className="mb-4">
                Som samarbejdspartner får I adgang til:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Professionel telemarketing og leadgenerering</li>
                <li>Kvalificeret mødebooking med beslutningstagere</li>
                <li>Erfarne konsulenter med branchekendskab</li>
                <li>Detaljeret rapportering og opfølgning</li>
                <li>Fleksible samarbejdsmodeller</li>
              </ul>
              <p>
                Kontakt os i dag for en uforpligtende snak om, hvordan vi kan hjælpe jeres virksomhed
                med at nå jeres salgsmål gennem professionel telemarketing og mødebooking.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Kontakt Magnora Marketing – Din Vækstpartner inden for Telesalg, Mødebooking og AI</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing er din direkte vej til professionelt B2B telesalg, kvalificeret mødebooking, datadrevet leadgenerering og moderne webudvikling med AI-integration. Vi er let tilgængelige og svarer altid hurtigt – send os en email på mail@magnoramarketing.dk, og vi vender tilbage inden for én hverdag med et konkret og uforpligtende svar på din henvendelse.
            </p>
            <p className="text-gray-600 mb-6">
              Uanset om du er en etableret B2B virksomhed der ønsker at outsource dit salg, en startup der søger at vækste hurtigt, eller en freelance sælger der ønsker spændende projekter – Magnora Marketing har en løsning til dig. Vores team er klar til at tage en uforpligtende samtale om dine behov og vise dig præcis hvordan Magnora Marketing kan hjælpe din virksomhed med at nå sine vækstmål.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Kom Hurtigt i Gang med Magnora Marketing – Fra Første Samtale til Første Resultater</h2>
            <p className="text-gray-600 mb-4">
              Processen fra første kontakt til aktiv kampagne er enkel og hurtig hos Magnora Marketing. Du kontakter os, vi tager en indledende samtale om dine behov og mål, og udarbejder herefter et skræddersyet tilbud inden for 24 timer. Efter godkendelse gennemfører vi en grundig opstartsbriefing, og typisk kan vi starte aktiv indsats inden for 1-2 uger. De første kvalificerede møder eller leads kan forventes inden for 2-3 uger efter kampagnestart.
            </p>
            <p className="text-gray-600 mb-4">
              Magnora Marketing tilbyder en gratis indledende rådgivningssession, hvor vi gennemgår din situation og anbefaler den bedste løsning. Ingen forpligtelse, ingen skjulte dagsordener – bare ærlig og kompetent rådgivning om hvad der vil skabe de bedste resultater for din virksomhed.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Kom i gang med Magnora Marketing – helt uforpligtende"
        subtitle="Udfyld formularen eller ring til os. Vi vender tilbage inden for én hverdag."
        primaryText="Se vores ydelser"
        primaryLink="/ydelser"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default ContactPage;
