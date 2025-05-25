import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5698849/pexels-photo-5698849.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-lg">
            <h1 className="text-white text-4xl md:text-6xl font-light mb-6 leading-tight">
              New Season <br />
              <span className="font-semibold">New Style</span>
            </h1>
            <p className="text-white text-lg mb-8 opacity-90">
              Discover our latest collection of premium essentials designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products/all" 
                className="bg-white text-gray-900 px-8 py-4 font-medium inline-flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                Shop Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/collections/summer" 
                className="border border-white text-white px-8 py-4 font-medium inline-flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Summer Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-white bg-opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;