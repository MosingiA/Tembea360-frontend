import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, professionalUpdates, markUpdateAsRead } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  
  const unreadUpdates = professionalUpdates.filter(update => !update.read);
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
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tembea360
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Home
            </Link>
            <Link to="/explore" className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore
            </Link>
            <Link to="/tours" className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tours
            </Link>
            <Link to="/travel-search" className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Search
            </Link>
            <Link to="/about" className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              About
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                {user.userType === 'traveler' && (
                  <div className="relative">
                    <button
                      onClick={() => setShowNotifications(!showNotifications)}
                      className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Bell size={20} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
                      {unreadUpdates.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {unreadUpdates.length}
                        </span>
                      )}
                    </button>
                    
                    {showNotifications && (
                      <div className={`absolute right-0 mt-2 w-80 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} z-50`}>
                        <div className="p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}">
                          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional Updates</h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {professionalUpdates.length > 0 ? (
                            professionalUpdates.slice(0, 5).map(update => (
                              <div
                                key={update.id}
                                className={`p-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:bg-gray-50 cursor-pointer ${
                                  !update.read ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => markUpdateAsRead(update.id)}
                              >
                                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {update.message}
                                </p>
                                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
                                  {new Date(update.timestamp).toLocaleTimeString()}
                                </p>
                              </div>
                            ))
                          ) : (
                            <div className="p-4 text-center">
                              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                No updates yet
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-700 rounded-full flex items-center justify-center">
                      <User className="text-white" size={16} />
                    </div>
                  )}
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    {user.name || 'Profile'}
                  </span>
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
                  className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
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
              <Link to="/travel-search" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                Search
              </Link>
              <Link to="/about" className={`block px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                About
              </Link>
              
              {user ? (
                <>
                  <Link to="/profile" className={`flex items-center px-3 py-2 hover:bg-gray-100 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}`}>
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt={user.name}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-700 rounded-full flex items-center justify-center mr-2">
                        <User className="text-white" size={12} />
                      </div>
                    )}
                    {user.name || 'Profile'}
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