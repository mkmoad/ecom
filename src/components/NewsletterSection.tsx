import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a backend service
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals, special offers, and exclusive events.
          </p>
          
          {subscribed ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-md">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">We're excited to share our latest collections with you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-black transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;