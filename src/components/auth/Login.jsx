import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Shield, RefreshCw } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: login, 2: verification
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const { login } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationCode = async () => {
    const code = generateVerificationCode();
    setSentCode(code);
    
    // Simulate sending email
    console.log(`Verification code sent to ${formData.email}: ${code}`);
    alert(`Verification code sent to ${formData.email}. For demo purposes, the code is: ${code}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for login
    setTimeout(async () => {
      // Send verification code
      await sendVerificationCode();
      setStep(2);
      setLoading(false);
    }, 1000);
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (verificationCode === sentCode) {
      // Successful verification
      setTimeout(() => {
        const userData = { 
          id: 1, 
          name: 'John Doe', 
          email: formData.email,
          profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        };
        const token = 'mock-jwt-token';
        login(userData, token);
        navigate('/');
        setLoading(false);
      }, 1000);
    } else {
      alert('Invalid verification code. Please try again.');
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    await sendVerificationCode();
    setResendLoading(false);
  };

  return (
    <div className={`min-h-screen pt-16 flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`max-w-md w-full mx-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Welcome Back</h2>
          <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sign in to your account</p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Sending Code...' : 'Sign In'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerification} className="space-y-6">
            <div className={`${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} border border-blue-200 rounded-lg p-4 mb-6`}>
              <div className="flex items-center">
                <Shield className="text-blue-500 mr-2" size={20} />
                <span className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                  We've sent a verification code to {formData.email}
                </span>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Verification Code
              </label>
              <div className="relative">
                <Shield className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  maxLength="6"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-lg font-mono ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || verificationCode.length !== 6}
              className="w-full py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify & Sign In'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendCode}
                disabled={resendLoading}
                className={`text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center justify-center mx-auto transition-colors`}
              >
                <RefreshCw className={`mr-1 ${resendLoading ? 'animate-spin' : ''}`} size={16} />
                {resendLoading ? 'Sending...' : 'Resend Code'}
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setVerificationCode('');
                  setSentCode('');
                }}
                className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
              >
                ← Back to Login
              </button>
            </div>
          </form>
        )}

        {step === 1 && (
          <p className={`mt-6 text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-500 hover:text-green-600 font-medium">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;