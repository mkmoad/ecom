import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import QuantitySelector from './QuantitySelector';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex py-6 border-b border-gray-200">
      {/* Product image */}
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
        <img 
          src={item.images[0]} 
          alt={item.name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Product details */}
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-medium text-gray-900">
              <Link to={`/product/${item.id}`} className="hover:underline">
                {item.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Color: {item.selectedColor}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Size: {item.selectedSize}
            </p>
          </div>
          
          <p className="text-base font-medium text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <QuantitySelector
            quantity={item.quantity}
            onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
          />
          
          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={`Remove ${item.name} from cart`}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;