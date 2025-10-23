import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tembea360
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Home
            </Link>
            <Link to="/explore" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore
            </Link>
            <Link to="/tours" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tours
            </Link>
            <Link to="/about" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              About
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                  <User size={20} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                Home
              </Link>
              <Link to="/explore" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                Explore
              </Link>
              <Link to="/tours" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                Tours
              </Link>
              <Link to="/about" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                About
              </Link>
              
              {user ? (
                <>
                  <Link to="/profile" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                    Login
                  </Link>
                  <Link to="/signup" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;