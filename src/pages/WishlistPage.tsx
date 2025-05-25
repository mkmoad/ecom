import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, X, ShoppingBag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const handleAddToCart = (product: any) => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0]
    };
    
    addToCart(cartItem);
  };
  
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-gray-900 mb-4">Your Wishlist</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Items you've saved for later. Add them to your cart when you're ready to purchase.
            </p>
          </div>
          
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {wishlist.map(product => (
                <div key={product.id} className="group relative">
                  {/* Product image */}
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  
                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white text-gray-600 hover:text-red-500 rounded-full shadow-sm transition-colors"
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <X size={18} />
                  </button>
                  
                  {/* Product info */}
                  <div className="mt-4 space-y-1">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-gray-900 font-medium">{product.name}</h3>
                      <p className="text-gray-900">${product.price.toFixed(2)}</p>
                    </Link>
                    
                    {/* Action buttons */}
                    <div className="pt-3 flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 bg-gray-900 text-white py-2 flex items-center justify-center hover:bg-black transition-colors"
                      >
                        <ShoppingBag size={16} className="mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <Heart size={24} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8">
                Add items you love to your wishlist to save them for later.
              </p>
              <Link
                to="/products/all"
                className="bg-gray-900 text-white px-8 py-3 font-medium inline-block hover:bg-black transition-colors"
              >
                Explore Products
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WishlistPage;