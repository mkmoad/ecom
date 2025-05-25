import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleWishlistToggle}
              className={`p-2 rounded-full ${
                isWishlisted 
                  ? 'bg-red-50 text-red-500' 
                  : 'bg-white text-gray-600 hover:text-red-500'
              } shadow-sm transition-colors`}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-black text-white text-xs px-3 py-1 font-medium">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-600 text-white text-xs px-3 py-1 font-medium">
                Sale
              </span>
            )}
          </div>
          
          {/* Quick shop button (appears on hover) */}
          <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white bg-opacity-90 text-center py-3">
              <span className="text-gray-900 font-medium">Quick Shop</span>
            </div>
          </div>
        </div>
        
        {/* Product info */}
        <div className="mt-4 space-y-1">
          <h3 className="text-gray-900 font-medium">{product.name}</h3>
          <div className="flex items-center">
            {product.originalPrice ? (
              <>
                <span className="text-red-600 font-medium">${product.price.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-gray-900">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Color options preview */}
          <div className="flex items-center space-x-1 mt-2">
            {product.colors.slice(0, 3).map((color, index) => (
              <div 
                key={index} 
                className="w-3 h-3 rounded-full border border-gray-300" 
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' 
                    ? 'white' 
                    : color.toLowerCase() === 'black'
                    ? 'black'
                    : color.toLowerCase() === 'navy'
                    ? 'navy'
                    : color.toLowerCase() === 'grey'
                    ? 'grey'
                    : color.toLowerCase() === 'cream'
                    ? '#f8f4e3'
                    : color.toLowerCase() === 'blue'
                    ? 'blue'
                    : color.toLowerCase() === 'blush'
                    ? '#ffc0cb'
                    : color.toLowerCase() === 'brown'
                    ? 'brown'
                    : color.toLowerCase() === 'camel'
                    ? '#c19a6b'
                    : color
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;