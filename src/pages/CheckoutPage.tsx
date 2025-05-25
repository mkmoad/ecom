import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderSummary from '../components/OrderSummary';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the order to a backend service
    setOrderPlaced(true);
    clearCart();
  };
  
  if (orderPlaced) {
    return (
      <>
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <div className="bg-green-50 border border-green-200 p-8 rounded-md">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h1 className="text-3xl font-light text-gray-900 mb-4">Order Confirmed</h1>
              <p className="text-gray-600 mb-8">
                Thank you for your purchase! Your order has been received and is being processed.
                You will receive a confirmation email shortly.
              </p>
              <Link
                to="/"
                className="bg-gray-900 text-white px-8 py-3 font-medium inline-block hover:bg-black transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-6">Checkout</h1>
            <p className="text-gray-600 mb-8">
              Your cart is empty. Add some items before proceeding to checkout.
            </p>
            <Link
              to="/products/all"
              className="bg-gray-900 text-white px-8 py-3 font-medium inline-block hover:bg-black transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-light text-gray-900 mb-10 text-center">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout form */}
            <div className="lg:col-span-2">
              <form onSubmit={handlePlaceOrder}>
                {/* Contact information */}
                <div className="mb-10">
                  <h2 className="text-xl font-medium text-gray-900 mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Shipping address */}
                <div className="mb-10">
                  <h2 className="text-xl font-medium text-gray-900 mb-6">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State/Province
                      </label>
                      <input
                        type="text"
                        id="state"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Payment information */}
                <div className="mb-10">
                  <h2 className="text-xl font-medium text-gray-900 mb-6">Payment Information</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="XXX"
                          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 font-medium hover:bg-black transition-colors"
                >
                  Place Order
                </button>
              </form>
            </div>
            
            {/* Order summary */}
            <div>
              <OrderSummary showCheckoutButton={false} />
              
              <div className="mt-6">
                <Link
                  to="/cart"
                  className="text-gray-900 font-medium flex items-center hover:underline"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Return to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;