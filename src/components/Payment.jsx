import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CreditCard, Lock, Calendar, User, Shield, CheckCircle } from 'lucide-react';

const Payment = () => {
  const { isDark } = useTheme();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });
  const [processing, setProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Get selected plan from localStorage
    const planData = localStorage.getItem('selectedPlan');
    if (planData) {
      setSelectedPlan(JSON.parse(planData));
    }
  }, []);

  // Dynamic booking data based on selected plan or default tour booking
  const bookingDetails = selectedPlan ? {
    tourName: `${selectedPlan.name} Subscription Plan`,
    date: "Starts immediately",
    guests: 1,
    duration: "Monthly subscription",
    subtotal: parseFloat(selectedPlan.price.replace('$', '')),
    tax: parseFloat(selectedPlan.price.replace('$', '')) * 0.1,
    total: parseFloat(selectedPlan.price.replace('$', '')) * 1.1
  } : {
    tourName: "Maasai Mara Safari Adventure",
    date: "March 15, 2024",
    guests: 2,
    duration: "4 days",
    subtotal: 1198,
    tax: 119.80,
    total: 1317.80
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setPaymentData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setPaymentData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    handleInputChange('cardNumber', formatted);
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    handleInputChange('expiryDate', formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setPaymentComplete(true);
    }, 3000);
  };

  if (paymentComplete) {
    return (
      <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className={`max-w-md w-full mx-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8 text-center`}>
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={32} />
          </div>
          
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Payment Successful!
          </h2>
          
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Your booking has been confirmed. You will receive a confirmation email shortly.
          </p>
          
          <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 mb-6`}>
            <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Booking Reference
            </h3>
            <p className="text-green-500 font-mono text-lg">TM360-{Date.now().toString().slice(-6)}</p>
          </div>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 h-fit`}>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Order Summary
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {bookingDetails.tourName}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {bookingDetails.date} • {bookingDetails.duration}
                </p>
                {!selectedPlan && (
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {bookingDetails.guests} guests
                  </p>
                )}
                {selectedPlan && (
                  <div className={`mt-3 p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <p className={`text-sm font-medium ${isDark ? 'text-green-400' : 'text-green-600'} mb-2`}>
                      Plan Features:
                    </p>
                    <ul className="text-xs space-y-1">
                      {selectedPlan.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          • {feature}
                        </li>
                      ))}
                      {selectedPlan.features.length > 3 && (
                        <li className={`${isDark ? 'text-gray-400' : 'text-gray-500'} italic`}>
                          +{selectedPlan.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-4 space-y-2`}>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Subtotal</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    ${bookingDetails.subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Tax</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    ${bookingDetails.tax}
                  </span>
                </div>
                <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-2 flex justify-between font-bold`}>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>Total</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    ${bookingDetails.total}
                  </span>
                </div>
              </div>
            </div>
            
            <div className={`mt-6 p-4 ${isDark ? 'bg-green-900/20' : 'bg-green-50'} border border-green-200 rounded-lg`}>
              <div className="flex items-center">
                <Shield className="text-green-500 mr-2" size={20} />
                <span className={`text-sm ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                  Secure payment protected by SSL encryption
                </span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Payment Details
              </h2>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Payment Method
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'card' 
                      ? 'border-blue-500 bg-blue-50' 
                      : isDark ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <CreditCard className="mr-3" size={24} />
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>Credit/Debit Card</span>
                  </label>
                  
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'paypal' 
                      ? 'border-blue-500 bg-blue-50' 
                      : isDark ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="w-6 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">P</span>
                    </div>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>PayPal</span>
                  </label>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Card Information */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Card Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Card Number
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
                          <input
                            type="text"
                            value={paymentData.cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Expiry Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                              type="text"
                              value={paymentData.expiryDate}
                              onChange={handleExpiryChange}
                              placeholder="MM/YY"
                              maxLength="5"
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            CVV
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                              type="text"
                              value={paymentData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
                              placeholder="123"
                              maxLength="4"
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Cardholder Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-gray-400" size={20} />
                          <input
                            type="text"
                            value={paymentData.cardholderName}
                            onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                            placeholder="John Doe"
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Billing Address
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Street Address
                        </label>
                        <input
                          type="text"
                          value={paymentData.billingAddress.street}
                          onChange={(e) => handleInputChange('billingAddress.street', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            City
                          </label>
                          <input
                            type="text"
                            value={paymentData.billingAddress.city}
                            onChange={(e) => handleInputChange('billingAddress.city', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                            required
                          />
                        </div>
                        
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            value={paymentData.billingAddress.zipCode}
                            onChange={(e) => handleInputChange('billingAddress.zipCode', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Country
                        </label>
                        <select
                          value={paymentData.billingAddress.country}
                          onChange={(e) => handleInputChange('billingAddress.country', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                          required
                        >
                          <option value="">Select Country</option>
                          <option value="KE">Kenya</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="CA">Canada</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-4 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      `Pay $${bookingDetails.total}`
                    )}
                  </button>
                </form>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">P</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    PayPal Payment
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                    You will be redirected to PayPal to complete your payment securely.
                  </p>
                  <button
                    onClick={() => {
                      setProcessing(true);
                      setTimeout(() => {
                        setProcessing(false);
                        setPaymentComplete(true);
                      }, 2000);
                    }}
                    disabled={processing}
                    className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {processing ? 'Redirecting...' : 'Continue with PayPal'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;