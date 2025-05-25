import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesSection from '../components/CategoriesSection';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header transparent={true} />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoriesSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;