import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FreelancersPage from './pages/FreelancersPage';
import PartnersPage from './pages/PartnersPage';
import PricingPage from './pages/PricingPage';
import OutsourcingPage from './pages/OutsourcingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Layout from './components/Layout';
import ContactSubmissions from './pages/admin/ContactSubmissions';

// Blog Posts
import SaaSLoesninger2026 from './pages/blog/SaaSLoesninger2026';
import AIAutomation2026 from './pages/blog/AIAutomation2026';
import Modebooking2026 from './pages/blog/Modebooking2026';
import Telesalg2026 from './pages/blog/Telesalg2026';
import OutboundSales2026 from './pages/blog/OutboundSales2026';
import HvorforSaaS2026 from './pages/blog/HvorforSaaS2026';
import SaaSVsOnPremise from './pages/blog/SaaSVsOnPremise';
import BedsteSaaSTools2026 from './pages/blog/BedsteSaaSTools2026';
import SaaSIntegration2026 from './pages/blog/SaaSIntegration2026';
import SaaSSecurityGDPR from './pages/blog/SaaSSecurityGDPR';
import HvorforMagnoraWebudvikling from './pages/blog/HvorforMagnoraWebudvikling';
import HvorforMagnoraAiIntegration from './pages/blog/HvorforMagnoraAiIntegration';
import HjemmesideTilVaekst2026 from './pages/blog/HjemmesideTilVaekst2026';
import AiIntegrationROI2026 from './pages/blog/AiIntegrationROI2026';
import WebsitekonverteringTips from './pages/blog/WebsitekonverteringTips';
import HvorforMagnoraTelesalg from './pages/blog/HvorforMagnoraTelesalg';
import HvorforMagnoraMoedebooking from './pages/blog/HvorforMagnoraMoedebooking';
import OutsourcingTelesalg2026 from './pages/blog/OutsourcingTelesalg2026';
import B2BSalgStrategi2026 from './pages/blog/B2BSalgStrategi2026';
import MoedebookingScripts2026 from './pages/blog/MoedebookingScripts2026';
import LeadgenerseringStrategier2026 from './pages/blog/LeadgenerseringStrategier2026';
import HvadErBANT2026 from './pages/blog/HvadErBANT2026';
import VaekstPartnerGuide from './pages/blog/VaekstPartnerGuide';
import StartupTilVaekst2026 from './pages/blog/StartupTilVaekst2026';
import ColdCallingVsInbound from './pages/blog/ColdCallingVsInbound';

// Samarbejde & Vækst blog posts
import HvorforSamarbejdeMagnora from './pages/blog/HvorforSamarbejdeMagnora';
import IdeudviklingMedMagnora from './pages/blog/IdeudviklingMedMagnora';
import FraIdeTilSalg from './pages/blog/FraIdeTilSalg';
import MoedebookingPartnerMagnora from './pages/blog/MoedebookingPartnerMagnora';
import OutsourceMoedebookingFordele from './pages/blog/OutsourceMoedebookingFordele';
import TelesalgPartnerMagnora from './pages/blog/TelesalgPartnerMagnora';
import B2BTelesalgSamarbejde from './pages/blog/B2BTelesalgSamarbejde';
import VaekstpartnerIdeMoedeTelesalg from './pages/blog/VaekstpartnerIdeMoedeTelesalg';
import SaadanForegaarSamarbejdet from './pages/blog/SaadanForegaarSamarbejdet';
import HvorforOutsourceSalgMoedebooking from './pages/blog/HvorforOutsourceSalgMoedebooking';

// AI blog posts
import FremtidensAiLoesninger2026 from './pages/blog/FremtidensAiLoesninger2026';
import AiAgenterAutomatisering2026 from './pages/blog/AiAgenterAutomatisering2026';
import AiSparerTidVirksomhed from './pages/blog/AiSparerTidVirksomhed';
import AiKundeserviceDoegnetRundt from './pages/blog/AiKundeserviceDoegnetRundt';
import GenerativAiForretningsvaerdi from './pages/blog/GenerativAiForretningsvaerdi';
import AiReceptionTelefonassistent from './pages/blog/AiReceptionTelefonassistent';
import HvorforAiNu2026 from './pages/blog/HvorforAiNu2026';
import AiSalgMoedebookingFremtid from './pages/blog/AiSalgMoedebookingFremtid';
import BedsteAiLoesningerSMV from './pages/blog/BedsteAiLoesningerSMV';
import BlivAiKonsulentKarriere from './pages/blog/BlivAiKonsulentKarriere';
import HundredeBudAiOpgaveloesning from './pages/blog/HundredeBudAiOpgaveloesning';

// Job Landing Pages
import RemoteWorkPage from './pages/jobs/RemoteWorkPage';
import WebBureauPage from './pages/jobs/WebBureauPage';
import LedLightingPage from './pages/jobs/LedLightingPage';
import EnergySalesPage from './pages/jobs/EnergySalesPage';
import CoffeeServicePage from './pages/jobs/CoffeeServicePage';
import SolarEnergyPage from './pages/jobs/SolarEnergyPage';
import MatServicePage from './pages/jobs/MatServicePage';
import PensionPage from './pages/jobs/PensionPage';
import DebtCollectionPage from './pages/jobs/DebtCollectionPage';
import InsuranceBrokerPage from './pages/jobs/InsuranceBrokerPage';
import AiConsultantPage from './pages/jobs/AiConsultantPage';

// Digital Project Pages
import WebDevelopmentPage from './pages/digital/WebDevelopmentPage';
import ApiSaasPage from './pages/digital/ApiSaasPage';
import WebsitesPage from './pages/digital/WebsitesPage';
import AiIntegrationPage from './pages/digital/AiIntegrationPage';
import AiWidgetPage from './pages/digital/AiWidgetPage';
import AiReceptionPage from './pages/digital/AiReceptionPage';

// Meeting Booking Page
import MeetingBookingPage from './pages/MeetingBookingPage';

// Lead Generation Page
import LeadGenerationPage from './pages/LeadGenerationPage';

export function AppRoutes() {
  const redirects = [
    {from: '/forside', to: '/'},
    {from: '/arbejd-hjemmefra-freelance', to: '/jobs/arbejd-hjemmefra'},
    {from: '/moedebooker-inden-for-solceller-og-vedvarende-energi', to: '/jobs/solenergi'},
    {from: '/privat-strom-salg', to: '/jobs/energi-salg'},
    {from: '/samarbejde-med-nexusmarketing', to: '/samarbejdspartner'},
    {from: '/om-nexusmarketing', to: '/om-os'},
    {from: '/moedebooker-hjemmeside-seo-og-marketing', to: '/jobs/webudvikling-salg'},
    {from: '/kontakt-nexusmarketing', to: '/kontakt'},
    {from: '/freelance-modebooker-pension', to: '/jobs/pensionsordning'},
    {from: '/nexusmarketing-freelance-moedebooker', to: '/jobs/arbejd-hjemmefra'},
    {from: '/nexusmarketing.dk/contact', to: '/kontakt'},
    {from: '/nexusmarketing.dk/jobs/remote-work', to: '/jobs/arbejd-hjemmefra'},
    {from: '/contact', to: '/kontakt'},
    {from: '/partners', to: '/samarbejdspartner'},
    {from: '/freelancers', to: '/freelance-telemarketing'},
    {from: '/freelancere', to: '/freelance-telemarketing'},
    {from: '/telemarketing-freelance-opgave-inkasso/', to: '/jobs/inkasso'},
    {from: '/hvorfor-outsource', to: '/hvorfor-os'},
    {from: '/hvorfor-nexny', to: '/hvorfor-os'}
  ];

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {redirects.map(({from, to}) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          
          <Route path="/ydelser" element={<ServicesPage />} />
          <Route path="/freelance-telemarketing" element={<FreelancersPage />} />
          <Route path="/samarbejdspartner" element={<PartnersPage />} />
          <Route path="/priser" element={<PricingPage />} />
          <Route path="/hvorfor-os" element={<OutsourcingPage />} />
          <Route path="/hvorfor-nexusmarketing" element={<Navigate to="/hvorfor-os" replace />} />
          <Route path="/om-os" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Blog Posts */}
          <Route path="/blog/saas-loesninger-2026" element={<SaaSLoesninger2026 />} />
          <Route path="/blog/ai-automation-2026" element={<AIAutomation2026 />} />
          <Route path="/blog/modebooking-2026" element={<Modebooking2026 />} />
          <Route path="/blog/telesalg-2026" element={<Telesalg2026 />} />
          <Route path="/blog/outbound-sales-2026" element={<OutboundSales2026 />} />
          <Route path="/blog/hvorfor-saas-2026" element={<HvorforSaaS2026 />} />
          <Route path="/blog/saas-vs-on-premise" element={<SaaSVsOnPremise />} />
          <Route path="/blog/bedste-saas-tools-2026" element={<BedsteSaaSTools2026 />} />
          <Route path="/blog/saas-integration-2026" element={<SaaSIntegration2026 />} />
          <Route path="/blog/saas-security-gdpr" element={<SaaSSecurityGDPR />} />
          <Route path="/blog/hvorfor-magnora-webudvikling" element={<HvorforMagnoraWebudvikling />} />
          <Route path="/blog/hvorfor-magnora-ai-integration" element={<HvorforMagnoraAiIntegration />} />
          <Route path="/blog/hjemmeside-til-vaekst-2026" element={<HjemmesideTilVaekst2026 />} />
          <Route path="/blog/ai-integration-roi-2026" element={<AiIntegrationROI2026 />} />
          <Route path="/blog/websitekonvertering-tips" element={<WebsitekonverteringTips />} />
          <Route path="/blog/hvorfor-magnora-telesalg" element={<HvorforMagnoraTelesalg />} />
          <Route path="/blog/hvorfor-magnora-moedebooking" element={<HvorforMagnoraMoedebooking />} />
          <Route path="/blog/outsourcing-telesalg-2026" element={<OutsourcingTelesalg2026 />} />
          <Route path="/blog/b2b-salg-strategi-2026" element={<B2BSalgStrategi2026 />} />
          <Route path="/blog/moedebooking-scripts-2026" element={<MoedebookingScripts2026 />} />
          <Route path="/blog/leadgenerering-strategier-2026" element={<LeadgenerseringStrategier2026 />} />
          <Route path="/blog/hvad-er-bant-2026" element={<HvadErBANT2026 />} />
          <Route path="/blog/vaekst-partner-guide" element={<VaekstPartnerGuide />} />
          <Route path="/blog/startup-til-vaekst-2026" element={<StartupTilVaekst2026 />} />
          <Route path="/blog/cold-calling-vs-inbound" element={<ColdCallingVsInbound />} />

          {/* Samarbejde & Vækst */}
          <Route path="/blog/hvorfor-samarbejde-magnora" element={<HvorforSamarbejdeMagnora />} />
          <Route path="/blog/ideudvikling-med-magnora" element={<IdeudviklingMedMagnora />} />
          <Route path="/blog/fra-ide-til-salg" element={<FraIdeTilSalg />} />
          <Route path="/blog/moedebooking-partner-magnora" element={<MoedebookingPartnerMagnora />} />
          <Route path="/blog/outsource-moedebooking-fordele" element={<OutsourceMoedebookingFordele />} />
          <Route path="/blog/telesalg-partner-magnora" element={<TelesalgPartnerMagnora />} />
          <Route path="/blog/b2b-telesalg-samarbejde" element={<B2BTelesalgSamarbejde />} />
          <Route path="/blog/vaekstpartner-ide-moedebooking-telesalg" element={<VaekstpartnerIdeMoedeTelesalg />} />
          <Route path="/blog/saadan-foregaar-samarbejdet" element={<SaadanForegaarSamarbejdet />} />
          <Route path="/blog/hvorfor-outsource-salg-og-moedebooking" element={<HvorforOutsourceSalgMoedebooking />} />

          {/* AI blog posts */}
          <Route path="/blog/fremtidens-ai-loesninger-2026" element={<FremtidensAiLoesninger2026 />} />
          <Route path="/blog/ai-agenter-automatisering-2026" element={<AiAgenterAutomatisering2026 />} />
          <Route path="/blog/ai-sparer-tid-virksomhed" element={<AiSparerTidVirksomhed />} />
          <Route path="/blog/ai-kundeservice-doegnet-rundt" element={<AiKundeserviceDoegnetRundt />} />
          <Route path="/blog/generativ-ai-forretningsvaerdi" element={<GenerativAiForretningsvaerdi />} />
          <Route path="/blog/ai-reception-telefonassistent" element={<AiReceptionTelefonassistent />} />
          <Route path="/blog/hvorfor-ai-nu-2026" element={<HvorforAiNu2026 />} />
          <Route path="/blog/ai-salg-moedebooking-fremtid" element={<AiSalgMoedebookingFremtid />} />
          <Route path="/blog/bedste-ai-loesninger-smv" element={<BedsteAiLoesningerSMV />} />
          <Route path="/blog/bliv-ai-konsulent-karriere" element={<BlivAiKonsulentKarriere />} />
          <Route path="/blog/100-bud-ai-opgaveloesning" element={<HundredeBudAiOpgaveloesning />} />
          
          {/* Admin Routes */}
          <Route path="/admin/contact-submissions" element={<ContactSubmissions />} />
          
          {/* Job Landing Pages */}
          <Route path="/jobs/arbejd-hjemmefra" element={<RemoteWorkPage />} />
          <Route path="/jobs/webudvikling-salg" element={<WebBureauPage />} />
          <Route path="/jobs/web-bureau" element={<Navigate to="/jobs/webudvikling-salg" replace />} />
          <Route path="/jobs/led-belysning" element={<LedLightingPage />} />
          <Route path="/jobs/energi-salg" element={<EnergySalesPage />} />
          <Route path="/jobs/kaffe-service" element={<CoffeeServicePage />} />
          <Route path="/jobs/solenergi" element={<SolarEnergyPage />} />
          <Route path="/jobs/matte-service" element={<MatServicePage />} />
          <Route path="/jobs/pensionsordning" element={<PensionPage />} />
          <Route path="/jobs/inkasso" element={<DebtCollectionPage />} />
          <Route path="/jobs/forsikring-hjemmefra" element={<InsuranceBrokerPage />} />
          <Route path="/jobs/ai-konsulent" element={<AiConsultantPage />} />

          {/* Digital Project Pages */}
          <Route path="/digital/webudvikling" element={<WebDevelopmentPage />} />
          <Route path="/digital/api-saas" element={<ApiSaasPage />} />
          <Route path="/digital/hjemmesider" element={<WebsitesPage />} />
          <Route path="/digital/ai-integration" element={<AiIntegrationPage />} />
          <Route path="/digital/ai-widget" element={<AiWidgetPage />} />
          <Route path="/digital/ai-reception" element={<AiReceptionPage />} />

          {/* Meeting Booking Page */}
          <Route path="/modebooking-priser" element={<MeetingBookingPage />} />
          <Route path="/modebooking" element={<Navigate to="/modebooking-priser" replace />} />

          {/* Lead Generation Page */}
          <Route path="/leadgenerering" element={<LeadGenerationPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;