import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  
  return (
    <div className="w-full">
      {/* Main image */}
      <div className="aspect-square mb-4 overflow-hidden bg-gray-100">
        <img 
          src={mainImage} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-20 h-20 border-2 overflow-hidden ${
              mainImage === image ? 'border-gray-900' : 'border-transparent'
            }`}
            onClick={() => setMainImage(image)}
          >
            <img 
              src={image} 
              alt={`${name} view ${index + 1}`} 
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;