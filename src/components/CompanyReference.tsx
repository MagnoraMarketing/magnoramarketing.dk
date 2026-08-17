import React from 'react';

interface CompanyReferenceProps {
  logo: string;
  name: string;
  quote: string;
  author: string;
  title: string;
}

const CompanyReference: React.FC<CompanyReferenceProps> = ({ logo, name, quote, author, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex items-center justify-center mb-6 h-16">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-full max-w-[180px] object-contain"
        />
      </div>
      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        <p className="relative">
          <span className="text-4xl text-blue-200 absolute -top-4 -left-2">"</span>
          <span className="relative z-10 pl-4">{quote}</span>
        </p>
      </blockquote>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-600 text-sm">{title}, {name}</p>
      </div>
    </div>
  );
};

export default CompanyReference;