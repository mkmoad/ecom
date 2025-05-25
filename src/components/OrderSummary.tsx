import React from 'react';
import { useCart } from '../context/CartContext';

interface OrderSummaryProps {
  showCheckoutButton?: boolean;
  onCheckout?: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  showCheckoutButton = true,
  onCheckout 
}) => {
  const { getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };
  
  return (
    <div className="bg-gray-50 p-6 border border-gray-200">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-base">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between text-base">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">
            {shipping === 0 
              ? 'Free' 
              : `$${shipping.toFixed(2)}`
            }
          </p>
        </div>
        
        <div className="flex justify-between text-base">
          <p className="text-gray-600">Tax (8%)</p>
          <p className="font-medium">${tax.toFixed(2)}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-medium">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
      
      {showCheckoutButton && (
        <button
          onClick={handleCheckout}
          className="w-full mt-6 bg-gray-900 text-white py-3 font-medium hover:bg-black transition-colors"
        >
          Proceed to Checkout
        </button>
      )}
      
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <span className="text-gray-700 text-sm">Secure checkout</span>
        </div>
        <p className="text-gray-500 text-xs">
          All transactions are secure and encrypted. Your payment information is never stored on our servers.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;