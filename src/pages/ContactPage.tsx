import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calculator, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import { useCalculatorText } from '../components/PriceCalculator';
import { CalculatorLead, calculatorSteps, calculatorTopic, fromSearchParams, isStepHidden, readCalculatorLead } from '../data/priceCalculator';

interface FaqItem {
  question: string;
  answer: string;
}

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const faqs = t('contact.faqs', { returnObjects: true }) as FaqItem[];
  const seoContentList = t('contact.seoContent.list', { returnObjects: true }) as string[];
  const { search } = useLocation();
  const { stepLabel, valueText } = useCalculatorText();

  // Visitors arriving from a price calculator ("Få pris") get their choices
  // pre-filled in the message. Read after mount so the pre-rendered page matches.
  const [calculator, setCalculator] = useState<ReturnType<typeof fromSearchParams>>(null);
  const [lead, setLead] = useState<CalculatorLead | null>(null);
  useEffect(() => {
    const fromCalculator = fromSearchParams(new URLSearchParams(search));
    setCalculator(fromCalculator);
    setLead(fromCalculator ? readCalculatorLead() : null);
  }, [search]);
  const calculatorMessage = calculator && [
    t('priceCalculator.message.intro', { calculator: t(`priceCalculator.variants.${calculator.variant}.tab`) }),
    '',
    ...calculatorSteps[calculator.variant]
      .filter(step => !isStepHidden(calculator.variant, step.id, calculator.values))
      .map(step => `• ${stepLabel(calculator.variant, step.id)}: ${valueText(calculator.variant, step, calculator.values[step.id])}`),
    '',
    t('priceCalculator.message.outro'),
    '',
  ].join('\n');

  return (
    <>
      <SEO
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        canonical="/kontakt"
        keywords={t('contact.seo.keywords')}
      />

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">{t('contact.hero.title')}</h1>
            <p className="text-lg text-gray-600">
              {t('contact.hero.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div id="kontaktformular" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-2">{t('contact.form.title')}</h2>
                <p className="text-gray-500 text-sm mb-7">{t('contact.form.subtitle')}</p>
                {calculator && (
                  <div className="mb-7 flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <Calculator size={20} className="mt-0.5 flex-shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{t('priceCalculator.contactBanner.title')}</p>
                      <p className="text-sm text-slate-600">{t('priceCalculator.contactBanner.text')}</p>
                    </div>
                  </div>
                )}
                <ContactForm
                  sourceLabel={calculator ? `${t('contact.form.sourceLabel')} – ${t('priceCalculator.sourceLabel')}` : t('contact.form.sourceLabel')}
                  initialTopic={calculator ? calculatorTopic[calculator.variant] : undefined}
                  initialMessage={calculatorMessage || undefined}
                  initialCompany={lead?.company}
                  initialPhone={lead?.phone}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-medium text-lg mb-3">{t('contact.info.companyName')}</h3>
                    <div className="flex items-start">
                      <MapPin size={24} className="text-blue-600 mr-4 mt-1" />
                      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact.info.addressHtml') }} />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={24} className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">{t('contact.info.emailLabel')}</h3>
                      <p className="text-gray-600">
                        <a href="mailto:mail@magnoramarketing.dk" className="hover:text-blue-600">mail@magnoramarketing.dk</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">{t('contact.info.websiteLabel')}</h3>
                    <p className="text-gray-600">
                      <a href="https://www.magnoramarketing.dk" className="hover:text-blue-600">www.magnoramarketing.dk</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">{t('contact.hours.title')}</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>{t('contact.hours.monThuLabel')}</span>
                    <span>{t('contact.hours.monThuValue')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.hours.friLabel')}</span>
                    <span>{t('contact.hours.friValue')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.hours.weekendLabel')}</span>
                    <span>{t('contact.hours.weekendValue')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Optimized Content */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.seoContent.title')}</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                {t('contact.seoContent.p1')}
              </p>
              <p className="mb-4">
                {t('contact.seoContent.p2')}
              </p>
              <p className="mb-4">
                {t('contact.seoContent.listIntro')}
              </p>
              <ul className="list-disc pl-6 mb-4">
                {seoContentList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>
                {t('contact.seoContent.p3')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('contact.info1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('contact.info1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('contact.info1.p2')}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('contact.info2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('contact.info2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('contact.info2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title={t('contact.finalCta.title')}
        subtitle={t('contact.finalCta.subtitle')}
        primaryText={t('contact.finalCta.primaryText')}
        primaryLink="/ydelser"
        secondaryText={t('contact.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default ContactPage;
