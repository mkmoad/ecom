import React from 'react';
import CategoryBanner from './CategoryBanner';

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 text-center">Shop by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Explore our curated collections for every style and occasion.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          <CategoryBanner 
            title="Women's Collection"
            description="Elegant essentials for the modern woman's wardrobe."
            imageUrl="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            linkTo="/products/women"
            align="left"
          />
          
          <CategoryBanner 
            title="Men's Collection"
            description="Timeless pieces designed for comfort and style."
            imageUrl="https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            linkTo="/products/men"
            align="right"
          />
          
          <CategoryBanner 
            title="Accessories"
            description="Complete your look with our premium accessories."
            imageUrl="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            linkTo="/products/accessories"
            align="left"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;