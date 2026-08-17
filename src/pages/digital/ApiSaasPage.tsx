import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ArrowRight, RefreshCw, Lock, Layers, Globe } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function ApiSaasPage() {
  const features = [
    {
      icon: <Settings size={36} className="text-blue-600" />,
      title: 'API-udvikling og integration',
      description: 'Vi designer og bygger RESTful og GraphQL API\'er der binder dine systemer og tjenester sammen – sikkert og skalerbart.'
    },
    {
      icon: <RefreshCw size={36} className="text-blue-600" />,
      title: 'Systemintegration',
      description: 'Magnora Marketing integrerer dine eksisterende platforme – CRM, ERP, betalingsløsninger, marketing-tools – i et sammenhængende digitalt setup.'
    },
    {
      icon: <Layers size={36} className="text-blue-600" />,
      title: 'SaaS-platforme',
      description: 'Vi bygger skalerbare SaaS-løsninger med multi-tenant arkitektur, abonnementsstyring og automatiserede brugerflows.'
    },
    {
      icon: <Lock size={36} className="text-blue-600" />,
      title: 'Sikker datahåndtering',
      description: 'Alle API\'er og integrationer bygges med GDPR og datasikkerhed i centrum – tokenstyring, kryptering og adgangskontrol inkluderet.'
    }
  ];

  const useCases = [
    'CRM-integration (HubSpot, Salesforce, Pipedrive)',
    'Betalingsgateway-opsætning (Stripe, Quickpay)',
    'ERP-kobling (e-conomic, Dinero, Business Central)',
    'Email-marketing automation (Mailchimp, ActiveCampaign)',
    'Webhook og event-drevet arkitektur',
    'Single Sign-On (SSO) og OAuth 2.0',
    'Data-pipeline og rapporteringsintegration',
    'Tredjepartsplatforme og marketplace-API\'er'
  ];

  return (
    <>
      <SEO
        title="API & SaaS Udvikling | Magnora Marketing – Systemintegration og Platforme"
        description="Magnora Marketing udvikler robuste API-løsninger og SaaS-platforme der binder dine systemer sammen. Skalerbar arkitektur og sikker datahåndtering."
        canonical="/digital/api-saas"
        keywords="API udvikling, SaaS platform, systemintegration, REST API, GraphQL, Magnora Marketing digital"
      />

      <HeroSection
        title="API & SaaS Løsninger fra Magnora Marketing"
        subtitle="Vi bygger de digitale broer der får dine systemer til at tale sammen – og platforme der skalerer med din forretning."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad Magnora Marketing tilbyder inden for API & SaaS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fra enkle integrationer til komplekse SaaS-produkter – vi har teknologien og erfaringen til at levere robuste digitale løsninger.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt="API og SaaS udvikling hos Magnora Marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Integrationer vi arbejder med</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi har erfaring med en bred vifte af platforme og teknologier – og er vant til at bygge brugerdefinerede integrationer der passer præcis til jeres behov.
              </p>
              <ul className="space-y-3">
                {useCases.map((u, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Diskuter dit projekt <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe size={48} className="text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Skalerbare løsninger der vokser med dig</h2>
            <p className="text-lg text-gray-600 mb-8">
              Uanset om du skal integrere to systemer eller bygge en fuld SaaS-platform fra bunden, sikrer Magnora Marketing at arkitekturen kan håndtere din vækst – nu og fremover.
            </p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Kom i gang <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Har du et API- eller SaaS-projekt?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fortæl os hvad du har brug for – vi leverer et konkret og uforpligtende tilbud inden for 24 timer.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Magnora Marketing nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">API-Udvikling og SaaS-Platforme – Skalerbare Digitale Løsninger fra Magnora Marketing</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing's digitale team specialiserer sig i at designe og bygge robuste API-løsninger og SaaS-platforme der binder dine systemer og tjenester sammen på en sikker, skalerbar og vedligeholdelsesvenlig måde. Vi arbejder med både RESTful og GraphQL API'er og har dybdegående erfaring med systemintegrationer til CRM-systemer (HubSpot, Salesforce, Pipedrive), ERP-løsninger (e-conomic, Business Central), betalingsgateways (Stripe, Quickpay) og marketingplatforme (Mailchimp, ActiveCampaign). Alle API'er og integrationer bygges med GDPR og datasikkerhed som grundpillerne – tokenstyring, kryptering og adgangskontrol er altid inkluderet.
            </p>
            <p className="text-gray-600 mb-6">
              Magnora Marketing bygger skalerbare SaaS-løsninger med multi-tenant arkitektur, abonnementsstyring og automatiserede brugerflows. Vi håndterer alt fra indledende kravspecifikation og teknisk arkitektur til fuld implementering, testning og lancering – og leverer fuld teknisk dokumentation og kildekodeoverdragelse. Vores CI/CD-pipeline og cloud-infrastruktur på Vercel og AWS sikrer hurtig deployment og høj oppetid.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> REST og GraphQL API-design og implementering</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> CRM, ERP og betalingsgateway integrationer</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Multi-tenant SaaS-platforme med abonnementsstyring</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> GDPR-compliant med tokenstyring og kryptering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Systemintegration og API-Forbindelser der Automatiserer din Forretning</h2>
            <p className="text-gray-600 mb-4">
              En velfungerende systemintegration eliminerer manuelle dataoverførsler, reducerer fejl og frigiver dine medarbejdere til at fokusere på det der skaber reel værdi. Magnora Marketing kortlægger dine eksisterende systemer og arbejdsprocesser, identificerer de vigtigste integrationspunkter og designer en teknisk løsning der forbinder det hele i et sammenhængende og effektivt digitalt setup. Fra webhook og event-drevet arkitektur til Single Sign-On (SSO) og OAuth 2.0 – vi har kompetencerne til at løse selv komplekse integrationsprojekter.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk for et uforpligtende estimat på dit API- eller SaaS-projekt. Vi sender et tilbud inden for 24 timer.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad er en API-integration?', answer: 'En API-integration forbinder to eller flere systemer så de kan udveksle data automatisk – f.eks. dit CRM med din hjemmeside eller et betalingssystem.' },
        { question: 'Kan I bygge en SaaS-platform fra bunden?', answer: 'Ja – Magnora Marketing har erfaring med at designe og udvikle komplette SaaS-applikationer med brugeradministration, betalingsintegration og skalerbar infrastruktur.' },
        { question: 'Hvad er en webhook?', answer: 'En webhook er en automatisk notifikation der sendes fra ét system til et andet, når en bestemt hændelse opstår – f.eks. når en ordre er gennemført.' },
        { question: 'Kan I integrere med eksisterende systemer?', answer: 'Ja – vi har erfaring med integrationer til de mest populære CRM-, ERP- og marketingsystemer.' },
        { question: "Hvad er REST vs GraphQL?", answer: "REST og GraphQL er to forskellige tilgange til API-design. REST er den mest udbredte standard. GraphQL giver mere fleksible datakald. Vi arbejder med begge." },
        { question: "Hvad er en microservice?", answer: "En microservice er en lille, selvstændig del af en applikation der udfører én specifik opgave. Det giver bedre skalerbarhed og vedligeholdelighed." },
        { question: "Kan I bygge et admin-panel til vores SaaS?", answer: "Ja – vi bygger brugertilpassede admin-interfaces til brugeradministration, abonnementsstyring og dataovervågning." },
        { question: "Hvad er en 'rate limit'?", answer: "En rate limit sætter et loft over hvor mange API-kald der kan foretages inden for en given tidsperiode. Det beskytter systemet mod overbelastning." },
        { question: "Kan I integrere med betalingssystemer?", answer: "Ja – vi har erfaring med Stripe, Reepay, MobilePay og andre betalingsudbydere." },
        { question: "Hvad er serverless?", answer: "Serverless er en cloud-arkitektur hvor du ikke administrerer servere selv. Det reducerer omkostninger og giver automatisk skalering." },
        { question: "Kan I bygge multi-tenant SaaS?", answer: "Ja – vi har erfaring med at bygge multi-tenant arkitekturer, hvor én platform betjener mange kunder med isolerede data." },
        { question: "Hvad er en sandbox?", answer: "En sandbox er et testmiljø der er isoleret fra produktionssystemet. Det bruges til at teste nye funktioner sikkert." },
        { question: "Hvad koster et API-projekt?", answer: "Prisen afhænger af scope og kompleksitet. Kontakt os for et uforpligtende estimat baseret på dine behov." },
        { question: "Kan I hjælpe med dokumentation?", answer: "Ja – vi leverer altid teknisk dokumentation og API-dokumentation som del af projektet." },
      ]} />
      <CTASection
        title="Lad Magnora Marketing bygge din næste API eller SaaS-løsning"
        subtitle="Skalerbare digitale platforme og integrationer der driver din forretning fremad."
        primaryText="Start dit projekt"
        primaryLink="/kontakt"
      />
    </>
  );
}
