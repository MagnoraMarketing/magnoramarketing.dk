import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, ArrowRight, BarChart3, Database, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const LeadGenerationPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Leadgenerering | Magnora Marketing – Varme B2B Leads til dit Salgsteam"
        description="Magnora Marketing's datadrevne leadgenerering leverer salgsklar B2B leads direkte til dit CRM. Vi kombinerer multi-kanal tilgang med præcis segmentering for at maksimere din salgspipeline."
        canonical="/leadgenerering"
        keywords="leadgenerering, B2B leads, Magnora Marketing leadgenerering, salgspipeline, varme leads, lead scoring"
      />

      <HeroSection
        title="Datadrevet Leadgenerering med Magnora Marketing"
        subtitle="Magnora Marketing leverer salgsklar B2B leads direkte til dit salgsteam – screenet, kvalificeret og klar til kontakt. Spar tid, øg hitrate og skalér din vækst."
        ctaText="Få leads nu"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-leadgen.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Magnora Marketing's Leadgenereringsproces</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores strukturerede og datadrevne tilgang sikrer en konstant strøm af høj-kvalitets leads til dit salgsteam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-12 h-12 text-blue-600" />, title: 'Præcis Segmentering', desc: 'Vi identificerer din ideelle kundeprofil og segmenterer målgruppen præcist efter branche, størrelse, geografi og beslutningsrolle.' },
              { icon: <Database className="w-12 h-12 text-blue-600" />, title: 'Lead Research & Scoring', desc: 'Vi researcher, validerer og scorer hvert lead baseret på købssignaler og fit med din løsning – kun de bedste emner leveres.' },
              { icon: <Zap className="w-12 h-12 text-blue-600" />, title: 'Aktivering & Levering', desc: 'Kvalificerede leads aktiveres via målrettede outreach-kampagner og leveres direkte til dit CRM – klar til opfølgning.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvorfor vælge Magnora Marketing til Leadgenerering?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Leadgenerering handler ikke om kvantitet – det handler om kvalitet. Magnora Marketing leverer leads der konverterer, fordi vi investerer tid i at forstå din forretning og dine kunders behov.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Fokus på kvalitet – ikke kun volumen',
                  'Flerkanalsstrategi: telefon, email, LinkedIn og mere',
                  'Leads leveret direkte til dit CRM-system',
                  'Løbende optimering baseret på konverteringsdata',
                  'Fuldt transparent rapportering og lead-oversigt',
                  'Skalerbar indsats tilpasset dine vækstmål'
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                Start leadgenerering med Magnora Marketing <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <BarChart3 className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Hvad Magnora Marketing leverer</h3>
                <ul className="space-y-3">
                  {[
                    'Validerede og opdaterede kontaktdata',
                    'Lead-profiling med virksomhedsinfo og beslutningsrolle',
                    'Prioriteringsscore baseret på købsintention',
                    'Segmentering efter branche og målgruppe',
                    'Klar CRM-integration med dine systemer',
                    'Ugentlig lead-rapport med status og pipeline-oversigt'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til en stærkere salgspipeline?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt Magnora Marketing og find ud af, hvordan vi kan levere varme, salgsklar B2B leads til din virksomhed.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt os i dag <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professionel B2B Leadgenerering – Fra Kold Database til Varme, Salgsklar Emner</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing's datadrevne leadgenerering er fundamentet for en stærk salgspipeline. Vi arbejder struktureret med at identificere din ideelle kundeprofil, segmentere målgruppen præcist efter branche, virksomhedsstørrelse, geografi og beslutningsrolle, og leverer herefter validerede, kvalificerede leads direkte til dit CRM-system. Hvert lead er gennemgået, valideret og scoret baseret på købssignaler og fit med din løsning – kun de bedste emner rammer dit salgsteam.
            </p>
            <p className="text-gray-600 mb-6">
              Magnora Marketing's flerkanalsstrategi for leadgenerering kombinerer telefonisk opsøgning, emailkampagner og LinkedIn-outreach med AI-drevne løsninger for at maksimere reach og konverteringsrate. Vi leverer ugentlige lead-rapporter med status og pipeline-oversigt, og optimerer løbende indsatsen baseret på konverteringsdata. Integration med HubSpot, Salesforce, Pipedrive og andre CRM-systemer sikrer et gnidningsfrit leadflow direkte ind i dit eksisterende salgssystem.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Præcis målgruppesegmentering efter ICP-kriterier</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Lead scoring og prioritering baseret på købssignaler</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Flerkanalsstrategi: telefon, email og LinkedIn</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> CRM-integration med HubSpot, Salesforce og Pipedrive</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Leadgenerering der Konverterer – Kvalitet Frem for Kvantitet</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing's tilgang til leadgenerering handler om kvalitet frem for kvantitet. Vi investerer tid i at forstå din forretning, dine kunder og din konkurrencesituation, og bruger denne indsigt til at identificere de leads der faktisk konverterer. Vores lead-profiling inkluderer virksomhedsinfo, beslutningsrolle og en prioriteringsscore baseret på købsintention – så dit salgsteam altid starter med de varmeste emner og bruger minimum tid på at nå maksimale resultater.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk for at høre mere om vores leadgenererings-løsninger og få et uforpligtende tilbud tilpasset din virksomheds behov og vækstmål.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad er leadgenerering?', answer: 'Leadgenerering er processen med at identificere og tiltrække potentielle kunder (leads) til din virksomhed gennem målrettede marketingaktiviteter og opsøgende salg.' },
        { question: 'Hvad er forskellen på et koldt og varmt lead?', answer: 'Et koldt lead er en potentiel kunde der endnu ikke har vist interesse. Et varmt lead har vist interesse og er klar til at blive kontaktet af dit salgsteam.' },
        { question: 'Kan I integrere leads direkte i vores CRM?', answer: 'Ja – Magnora Marketing leverer leads i det format der passer til dit CRM-system, så leadflow er så gnidningsfrit som muligt.' },
        { question: 'Hvad er lead scoring?', answer: 'Lead scoring er en metode til at rangere leads baseret på deres sandsynlighed for at konvertere, baseret på adfærd, demografi og engagementniveau.' },
        { question: 'Hvor mange leads kan vi forvente?', answer: 'Det afhænger af branche, budget og kampagnelængde. Vi sætter realistiske mål og rapporterer løbende på resultater.' },
        { question: "Hvad er forskellen på leadgenerering og mødebooking?", answer: "Leadgenerering identificerer og kvalificerer potentielle kunder. Mødebooking er næste skridt – at booke et møde med de identificerede leads." },
        { question: "Kan I integrere med HubSpot eller Salesforce?", answer: "Ja – vi har erfaring med integration til de mest populære CRM-systemer inkl. HubSpot, Salesforce og Pipedrive." },
        { question: "Hvad er en 'kold liste'?", answer: "En kold liste er en database af potentielle kunder som endnu ikke har haft kontakt med din virksomhed. Vi bruger målrettede lister til effektiv opsøgning." },
        { question: "Kan I bygge en ny database til os?", answer: "Ja – vi kan opbygge og berige salgsdatabaser baseret på jeres ønskede målgruppe, branche og geografi." },
        { question: "Hvad koster et lead?", answer: "Prisen per lead afhænger af branche, kompleksitet og kvalitetskrav. Kontakt os for en specifik prisberegning." },
        { question: "Hvad er et 'varmt' lead i praksis?", answer: "Et varmt lead har vist konkret interesse – f.eks. ved at downloade materiale, besvare et opkald positivt eller anmode om mere information." },
        { question: "Kan I hjælpe med indhold til at tiltrække leads?", answer: "Via vores digitale tjenester kan vi hjælpe med landingssider, whitepapers og andre leadmagneter." },
        { question: "Hvad er conversion rate på jeres leads?", answer: "Conversion rate varierer per branche og produkt, men vores leads er altid kvalitetssikrede for at maksimere din salgsstyrkes tid." },
        { question: "Kan I segmentere leads efter virksomhedsstørrelse?", answer: "Ja – vi kan filtrere og segmentere leads efter omsætning, medarbejderantal, geografi, branche og meget mere." },
        { question: "Hvad er en lead nurturing-strategi?", answer: "Lead nurturing er processen med at pleje leads over tid med relevant indhold og opfølgning, indtil de er klar til at købe." },
      ]} />
      <CTASection
        title="Start din leadgenerering med Magnora Marketing i dag"
        subtitle="Struktureret, datadrevet leadgenerering der leverer salgsklar emner direkte til dit CRM."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default LeadGenerationPage;
