import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Logout = () => {
  const { logout } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage and logout the user
    localStorage.removeItem('token');
    logout();

    // Redirect after short delay
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [logout, navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
          : 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-24 left-16 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse ${
            isDark ? 'bg-yellow-500' : 'bg-blue-500'
          }`}
        ></div>
        <div
          className={`absolute bottom-24 right-16 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse ${
            isDark ? 'bg-orange-500' : 'bg-purple-500'
          }`}
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-3">
            Logging you out...
          </h1>
          <p className="text-gray-300 text-lg">
            Please wait while we securely end your session
          </p>
        </div>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Message */}
        <p className="text-gray-400 text-sm mt-6">
          You will be redirected to the login page shortly
        </p>
      </div>

      {/* Footer (optional) */}
      <div className="absolute bottom-8 text-gray-400 text-xs tracking-wider">
        © {new Date().getFullYear()} EventConnect. All rights reserved.
      </div>
    </div>
  );
};

export default Logout;
