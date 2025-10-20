import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-gray-200 border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Tembea360
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">Explore the World</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/tours" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Explore Tours
              </Link>
              <Link to="/tours" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Tours
              </Link>
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                How it Works
              </a>
              <a href="/#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Theme Toggle & Desktop Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm font-medium text-gray-700">Welcome, {user.name}</span>
                  <Link to="/profile" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                    Profile
                  </Link>
                  <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-200">
                    Sign In
                  </Link>
                  <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Join as Traveler
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/tours" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                Explore Tours
              </Link>
              <Link to="/tours" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                Tours
              </Link>
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                How it Works
              </a>
              <a href="/#about" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                About
              </a>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                {user ? (
                  <>
                    <Link to="/profile" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                      Profile
                    </Link>
                    <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-600 hover:text-red-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200">
                      Sign In
                    </Link>
                    <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg text-base font-medium mt-2 transition-colors duration-200">
                      Join as Traveler
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;