import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, title = 'Ofte stillede spørgsmål' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="section bg-sky-50">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Find svar på de mest stillede spørgsmål herunder.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-white rounded-2xl border transition-all duration-200 ${openIndex === index ? 'border-blue-200 shadow-md shadow-blue-500/5' : 'border-slate-100 shadow-sm'}`}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
