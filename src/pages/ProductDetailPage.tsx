import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGallery from '../components/ProductGallery';
import SizeSelector from '../components/SizeSelector';
import ColorSelector from '../components/ColorSelector';
import QuantitySelector from '../components/QuantitySelector';
import { getProductById } from '../data/products';
import { Product, CartItem } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        // Set defaults
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      setIsAddingToCart(true);
      
      // Create cart item
      const cartItem: CartItem = {
        ...product,
        quantity,
        selectedSize,
        selectedColor
      };
      
      // Add to cart
      addToCart(cartItem);
      
      // Show success message
      setAddedToCart(true);
      
      // Reset after a delay
      setTimeout(() => {
        setIsAddingToCart(false);
        setAddedToCart(false);
      }, 2000);
    }
  };
  
  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Product not found</p>
          <Link to="/products/all" className="text-gray-900 underline mt-4 inline-block">
            Back to all products
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  const isWishlisted = product ? isInWishlist(product.id) : false;
  
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/products/all" className="text-gray-600 hover:text-gray-900 flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to all products
            </Link>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product images */}
            <ProductGallery images={product.images} name={product.name} />
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">{product.name}</h1>
              
              {/* Price */}
              <div className="mb-6">
                {product.originalPrice ? (
                  <div className="flex items-center">
                    <span className="text-xl text-red-600 font-medium mr-2">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="text-xl text-gray-900">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              {/* Color selector */}
              <ColorSelector 
                colors={product.colors} 
                selectedColor={selectedColor} 
                onSelectColor={setSelectedColor} 
              />
              
              {/* Size selector */}
              <div className="mb-8">
                <SizeSelector 
                  sizes={product.sizes} 
                  selectedSize={selectedSize} 
                  onSelectSize={setSelectedSize} 
                />
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <QuantitySelector 
                  quantity={quantity} 
                  onQuantityChange={setQuantity} 
                />
              </div>
              
              {/* Add to cart button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`flex-1 py-3 px-6 font-medium text-center ${
                    addedToCart 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-900 text-white hover:bg-black'
                  } transition-colors`}
                >
                  {isAddingToCart 
                    ? 'Adding...' 
                    : addedToCart 
                      ? 'Added to Cart ✓' 
                      : 'Add to Cart'
                  }
                </button>
                
                <button
                  onClick={handleWishlistToggle}
                  className={`flex items-center justify-center py-3 px-6 font-medium border ${
                    isWishlisted 
                      ? 'border-red-600 text-red-600 bg-red-50' 
                      : 'border-gray-300 text-gray-900 hover:border-gray-900'
                  } transition-colors`}
                >
                  <Heart size={18} className="mr-2" fill={isWishlisted ? "currentColor" : "none"} />
                  {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
              
              {/* Product details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>High-quality materials</li>
                  <li>Classic fit</li>
                  <li>Machine washable</li>
                  <li>Imported</li>
                </ul>
              </div>
              
              {/* Shipping info */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping & Returns</h3>
                <p className="text-gray-600 mb-2">
                  Free standard shipping on all orders over $100.
                </p>
                <p className="text-gray-600">
                  Free returns within 30 days of delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage;