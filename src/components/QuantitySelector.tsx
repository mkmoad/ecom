import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onQuantityChange,
  min = 1,
  max = 10
}) => {
  const decreaseQuantity = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };
  
  return (
    <div className="flex">
      <button
        type="button"
        onClick={decreaseQuantity}
        disabled={quantity <= min}
        className={`w-10 h-10 border border-r-0 border-gray-300 flex items-center justify-center ${
          quantity <= min ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
        }`}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value) && value >= min && value <= max) {
            onQuantityChange(value);
          }
        }}
        className="w-12 h-10 border border-gray-300 text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />
      
      <button
        type="button"
        onClick={increaseQuantity}
        disabled={quantity >= max}
        className={`w-10 h-10 border border-l-0 border-gray-300 flex items-center justify-center ${
          quantity >= max ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
        }`}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;