import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ 
  sizes, 
  selectedSize, 
  onSelectSize 
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
        <button className="text-sm text-gray-500 hover:text-gray-900 underline">
          Size Guide
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {sizes.map(size => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`min-w-[60px] h-12 flex items-center justify-center transition-colors ${
              selectedSize === size 
                ? 'bg-gray-900 text-white' 
                : 'border border-gray-300 text-gray-900 hover:border-gray-900'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;