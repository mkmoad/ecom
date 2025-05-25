import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const { getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    (isScrolled || !transparent) 
      ? 'bg-white shadow-sm py-4' 
      : 'bg-transparent py-6'
  }`;

  const textColor = (isScrolled || !transparent) ? 'text-gray-800' : 'text-white';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold ${textColor}`}>
            ATTIRE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${textColor} hover:text-gray-500 transition-colors`}>
              Home
            </Link>
            <Link to="/products/all" className={`${textColor} hover:text-gray-500 transition-colors`}>
              All Products
            </Link>
            <Link to="/products/men" className={`${textColor} hover:text-gray-500 transition-colors`}>
              Men
            </Link>
            <Link to="/products/women" className={`${textColor} hover:text-gray-500 transition-colors`}>
              Women
            </Link>
            <Link to="/products/accessories" className={`${textColor} hover:text-gray-500 transition-colors`}>
              Accessories
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className={`${textColor} hover:text-gray-500 transition-colors`} aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className={`${textColor} hover:text-gray-500 transition-colors relative`} aria-label="Wishlist">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className={`${textColor} hover:text-gray-500 transition-colors relative`} aria-label="Cart">
              <ShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <Link to="/account" className={`${textColor} hover:text-gray-500 transition-colors hidden md:block`} aria-label="Account">
              <User size={20} />
            </Link>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden ${textColor} hover:text-gray-500 transition-colors`}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 z-50 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/products/all" className="text-gray-800 hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>
              All Products
            </Link>
            <Link to="/products/men" className="text-gray-800 hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>
              Men
            </Link>
            <Link to="/products/women" className="text-gray-800 hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>
              Women
            </Link>
            <Link to="/products/accessories" className="text-gray-800 hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>
              Accessories
            </Link>
            <Link to="/account" className="text-gray-800 hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;