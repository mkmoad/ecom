import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-light text-gray-900 mb-6">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-gray-600">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                  </p>
                  <button
                    onClick={clearCart}
                    className="text-gray-600 text-sm underline hover:text-gray-900"
                  >
                    Clear cart
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link
                    to="/products/all"
                    className="text-gray-900 font-medium flex items-center hover:underline"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              {/* Order summary */}
              <div>
                <OrderSummary onCheckout={handleCheckout} />
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-light text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link
                to="/products/all"
                className="bg-gray-900 text-white px-8 py-3 font-medium inline-block hover:bg-black transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;