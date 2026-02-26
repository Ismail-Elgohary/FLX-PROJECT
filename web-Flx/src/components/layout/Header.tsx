import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import img from "../../Assets/logo.png"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#7DA2F3' }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={img} alt="FLX Logo" className="h-12 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-base font-medium hover:underline underline-offset-4 decoration-2">
            Home
          </Link>
          <Link to="/contact" className="text-base font-medium hover:underline underline-offset-4 decoration-2">
            Contact
          </Link>
          <Link to="/about" className="text-base font-medium hover:underline underline-offset-4 decoration-2">
            About
          </Link>
          <Link to="/categories" className="text-base font-medium hover:underline underline-offset-4 decoration-2">
            categories
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hover:text-gray-200 transition-colors">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </button>

          <button className="hover:text-gray-200 transition-colors">
            <FontAwesomeIcon icon={faSearch} className="text-xl" />
          </button>

          <button className="hover:text-gray-200 transition-colors">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden hover:text-gray-200 transition-colors">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};
