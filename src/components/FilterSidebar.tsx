import React from 'react';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  activeCategory,
  onCategoryChange
}) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'accessories', name: 'Accessories' }
  ];

  // These would be dynamic in a real application
  const colors = ['Black', 'White', 'Grey', 'Blue', 'Navy', 'Brown'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const priceRanges = [
    { id: 'under-50', name: 'Under $50' },
    { id: '50-100', name: '$50 - $100' },
    { id: '100-200', name: '$100 - $200' },
    { id: 'over-200', name: 'Over $200' }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 flex transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>
      
      {/* Sidebar */}
      <div className="relative flex-shrink-0 w-80 max-w-full bg-white h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close filters"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-md font-medium text-gray-900 mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    onClose();
                  }}
                  className={`block w-full text-left px-2 py-1 rounded-sm ${
                    activeCategory === category.id 
                      ? 'bg-gray-100 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-md font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map(range => (
                <div key={range.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`price-${range.id}`}
                    className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label 
                    htmlFor={`price-${range.id}`} 
                    className="ml-2 text-gray-600"
                  >
                    {range.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Colors */}
          <div className="mb-8">
            <h3 className="text-md font-medium text-gray-900 mb-3">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map(color => (
                <div 
                  key={color} 
                  className="flex flex-col items-center"
                >
                  <button
                    className={`w-8 h-8 rounded-full border ${
                      color.toLowerCase() === 'white' ? 'border-gray-300 bg-white' : ''
                    }`}
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' 
                        ? 'white' 
                        : color.toLowerCase() === 'black'
                        ? 'black'
                        : color.toLowerCase() === 'navy'
                        ? 'navy'
                        : color.toLowerCase() === 'grey'
                        ? 'grey'
                        : color.toLowerCase() === 'blue'
                        ? 'blue'
                        : color.toLowerCase() === 'brown'
                        ? 'brown'
                        : color
                    }}
                    aria-label={`Filter by ${color}`}
                  ></button>
                  <span className="text-xs mt-1">{color}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-md font-medium text-gray-900 mb-3">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className="min-w-[40px] h-10 border border-gray-300 flex items-center justify-center hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="pt-4 flex gap-4">
            <button
              className="w-1/2 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset All
            </button>
            <button
              onClick={onClose}
              className="w-1/2 py-2 bg-gray-900 text-white hover:bg-black transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;