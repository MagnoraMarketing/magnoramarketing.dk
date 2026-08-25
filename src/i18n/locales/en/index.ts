import common from './common';
import home from './home';
import pricing from './pricing';
import partners from './partners';
import digitalAiIntegration from './digitalAiIntegration';
import digitalApiSaas from './digitalApiSaas';
import digitalWebDevelopment from './digitalWebDevelopment';
import digitalWebsites from './digitalWebsites';
import jobAiConsultant from './jobAiConsultant';
import jobCoffeeService from './jobCoffeeService';
import jobDebtCollection from './jobDebtCollection';
import jobEnergySales from './jobEnergySales';
import jobRemoteWork from './jobRemoteWork';
import jobWebBureau from './jobWebBureau';
import aiSolutionsSection from './aiSolutionsSection';
import blogArticle from './blogArticle';
import ctaSection from './ctaSection';
import contactForm from './contactForm';
import cookieConsent from './cookieConsent';
import faqSection from './faqSection';
import blogPage from './blogPage';
import blogPost from './blogPost';

export default {
  ...common,
  home,
  pricing,
  partners,
  digitalAiIntegration,
  digitalApiSaas,
  digitalWebDevelopment,
  digitalWebsites,
  jobAiConsultant,
  jobCoffeeService,
  jobDebtCollection,
  jobEnergySales,
  jobRemoteWork,
  jobWebBureau,
  ...aiSolutionsSection,
  ...blogArticle,
  ...ctaSection,
  ...contactForm,
  ...cookieConsent,
  ...faqSection,
  blogPage,
  blogPost,
};
