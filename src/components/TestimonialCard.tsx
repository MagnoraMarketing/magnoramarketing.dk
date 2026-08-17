import React from 'react';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = '' }) => {
  return (
    <div className={`card p-6 ${className}`}>
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.title}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic relative">
        <span className="text-4xl text-blue-200 absolute -top-4 -left-2">"</span>
        <p className="relative z-10 pl-4">{testimonial.quote}</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;