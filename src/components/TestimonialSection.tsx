import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah J.',
    location: 'New York',
    text: 'The quality of their clothing is exceptional. I\'ve been a customer for over a year and everything I\'ve purchased has lasted beautifully.'
  },
  {
    id: 2,
    name: 'James M.',
    location: 'Los Angeles',
    text: 'Finally found a brand that fits perfectly and uses sustainable materials. The attention to detail is what keeps me coming back.'
  },
  {
    id: 3,
    name: 'Emma L.',
    location: 'Chicago',
    text: 'Their customer service is as impressive as their clothing. When I had an issue with sizing, they were quick to help and made the exchange process effortless.'
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">
            Read about experiences from our satisfied customers around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-gray-50 p-8 border border-gray-100">
              <div className="flex items-center mb-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div>
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;