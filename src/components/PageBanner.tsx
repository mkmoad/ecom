import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/4207779/pexels-photo-4207779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
}) => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-light mb-4">{title}</h1>
        {subtitle && (
          <p className="text-white text-lg max-w-2xl mx-auto opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;