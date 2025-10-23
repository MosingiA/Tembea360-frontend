import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Tembea360
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-sm`}>
              Discover amazing adventures and create unforgettable memories with our expert guides and curated experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/tours" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Mail size={16} className="mr-2" />
                <span className="text-sm">info@tembea360.com</span>
              </li>
              <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+254 700 123 456</span>
              </li>
              <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} mt-12 pt-8 text-center`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            © 2024 Tembea360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;