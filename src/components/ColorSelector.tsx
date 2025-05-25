import React from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ 
  colors, 
  selectedColor, 
  onSelectColor 
}) => {
  const getColorStyle = (color: string) => {
    return { 
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
    };
  };
  
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
      
      <div className="flex items-center space-x-3">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => onSelectColor(color)}
            className={`group relative w-10 h-10 rounded-full border flex items-center justify-center ${
              color.toLowerCase() === 'white' ? 'border-gray-300' : 'border-transparent'
            } ${selectedColor === color ? 'ring-2 ring-gray-900 ring-offset-1' : ''}`}
            style={getColorStyle(color)}
            aria-label={`Select ${color} color`}
          >
            {selectedColor === color && (
              <span className={`absolute inset-0 flex items-center justify-center ${
                ['white', 'cream'].includes(color.toLowerCase()) ? 'text-black' : 'text-white'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
            <span className="sr-only">{color}</span>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {color}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;