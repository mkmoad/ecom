import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  align?: 'left' | 'right';
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({
  title,
  description,
  imageUrl,
  linkTo,
  align = 'right'
}) => {
  return (
    <div className="relative overflow-hidden bg-gray-100 h-[500px] group">
      {/* Background image */}
      <div 
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className={`container mx-auto px-4 md:px-8 ${align === 'right' ? 'text-right' : 'text-left'}`}>
          <div className={`max-w-md ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}>
            <h2 className="text-white text-3xl md:text-4xl font-light mb-4">{title}</h2>
            <p className="text-white text-lg mb-6 opacity-90">{description}</p>
            <Link 
              to={linkTo} 
              className="inline-block bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;