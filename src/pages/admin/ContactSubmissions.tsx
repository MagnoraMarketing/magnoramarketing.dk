import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactSubmissions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Kontakthenvendelser</h1>
      <p className="text-gray-600">Admin-side under opbygning.</p>
    </div>
  );
}
