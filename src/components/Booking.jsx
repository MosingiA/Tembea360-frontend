import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Calendar, Users, MapPin, Clock, Star, CreditCard, Mail, CheckCircle } from 'lucide-react';

const Booking = () => {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  const [bookingData, setBookingData] = useState({
    tour: null,
    date: '',
    guests: 1,
    specialRequests: '',
    contactInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    paymentMethod: 'card'
  });

  // Sample tour data (in real app, this would come from props or API)
  const selectedTour = {
    id: 1,
    name: "Maasai Mara Safari Adventure",
    location: "Maasai Mara, Kenya",
    rating: 4.9,
    duration: "4 days",
    price: 599,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
    description: "Experience the Great Migration and witness incredible wildlife in their natural habitat.",
    includes: ["Accommodation", "All meals", "Game drives", "Professional guide", "Transportation"],
    highlights: ["Big Five", "Great Migration", "Cultural Visit", "Photography"]
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setBookingData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const calculateTotal = () => {
    const basePrice = selectedTour.price * bookingData.guests;
    const tax = basePrice * 0.1; // 10% tax
    return {
      subtotal: basePrice,
      tax: tax,
      total: basePrice + tax
    };
  };

  const sendBookingConfirmationEmail = (bookingDetails) => {
    const emailContent = {
      to: bookingDetails.contactInfo.email,
      subject: `Booking Confirmation - ${selectedTour.name}`,
      body: `
        Dear ${bookingDetails.contactInfo.firstName} ${bookingDetails.contactInfo.lastName},
        
        Thank you for booking with Tembea360! Your tour booking has been confirmed.
        
        BOOKING DETAILS:
        - Tour: ${selectedTour.name}
        - Date: ${bookingDetails.date}
        - Guests: ${bookingDetails.guests}
        - Total: $${calculateTotal().total.toFixed(2)}
        - Reference: ${bookingReference}
        
        We will send you detailed itinerary and preparation information 48 hours before your tour.
        
        For any questions, please contact us at support@tembea360.com
        
        Best regards,
        The Tembea360 Team
      `
    };
    
    // Simulate email sending
    console.log('Booking confirmation email sent:', emailContent);
    return emailContent;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Generate booking reference
      const reference = `TM360-${Date.now().toString().slice(-6)}`;
      setBookingReference(reference);
      
      // Process booking
      const bookingDetails = {
        ...bookingData,
        reference,
        tour: selectedTour,
        pricing: calculateTotal(),
        timestamp: new Date().toISOString()
      };
      
      console.log('Booking submitted:', bookingDetails);
      
      // Send confirmation email
      const emailDetails = sendBookingConfirmationEmail(bookingDetails);
      
      // Show confirmation
      setBookingConfirmed(true);
      
      // Demo alert showing email was sent
      alert(`Booking confirmed! Confirmation email sent to ${bookingData.contactInfo.email}\n\nEmail Preview:\nSubject: ${emailDetails.subject}\nReference: ${reference}`);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Select Date & Guests
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Departure Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              value={bookingData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Number of Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              value={bookingData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Special Requests (Optional)
        </label>
        <textarea
          value={bookingData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          rows={4}
          placeholder="Any dietary restrictions, accessibility needs, or special occasions..."
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Contact Information
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name
          </label>
          <input
            type="text"
            value={bookingData.contactInfo.firstName}
            onChange={(e) => handleInputChange('contactInfo.firstName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name
          </label>
          <input
            type="text"
            value={bookingData.contactInfo.lastName}
            onChange={(e) => handleInputChange('contactInfo.lastName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            value={bookingData.contactInfo.email}
            onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone Number
          </label>
          <input
            type="tel"
            value={bookingData.contactInfo.phone}
            onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const pricing = calculateTotal();
    
    return (
      <div className="space-y-6">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Payment & Confirmation
        </h2>
        
        <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Booking Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {selectedTour.name} x {bookingData.guests}
              </span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                ${pricing.subtotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Tax (10%)</span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                ${pricing.tax.toFixed(2)}
              </span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Total</span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                ${pricing.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Payment Method
          </label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={bookingData.paymentMethod === 'card'}
                onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                className="mr-3"
              />
              <CreditCard className="mr-2" size={20} />
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Credit/Debit Card</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={bookingData.paymentMethod === 'paypal'}
                onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                className="mr-3"
              />
              <span className={isDark ? 'text-white' : 'text-gray-900'}>PayPal</span>
            </label>
          </div>
        </div>

        <div className={`${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} border border-blue-200 rounded-lg p-4`}>
          <div className="flex items-start">
            <Mail className="text-blue-500 mr-2 mt-0.5" size={16} />
            <div>
              <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-800'} font-medium mb-1`}>
                Email Confirmation
              </p>
              <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                A detailed confirmation email with your booking reference, itinerary, and preparation instructions will be sent to {bookingData.contactInfo.email} immediately after confirmation.
              </p>
            </div>
          </div>
        </div>
        
        <div className={`${isDark ? 'bg-green-900/20' : 'bg-green-50'} border border-green-200 rounded-lg p-4`}>
          <p className={`text-sm ${isDark ? 'text-green-300' : 'text-green-800'}`}>
            By confirming this booking, you agree to our terms and conditions.
          </p>
        </div>
      </div>
    );
  };

  if (bookingConfirmed) {
    return (
      <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className={`max-w-md w-full mx-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8 text-center`}>
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={32} />
          </div>
          
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Booking Confirmed!
          </h2>
          
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Thank you for booking with Tembea360. Your adventure awaits!
          </p>
          
          <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 mb-6`}>
            <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Booking Reference
            </h3>
            <p className="text-green-500 font-mono text-lg">{bookingReference}</p>
          </div>
          
          <div className={`${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} border border-blue-200 rounded-lg p-4 mb-6`}>
            <div className="flex items-center justify-center mb-2">
              <Mail className="text-blue-500 mr-2" size={20} />
              <span className={`font-medium ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                Email Sent!
              </span>
            </div>
            <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
              Confirmation details sent to {bookingData.contactInfo.email}
            </p>
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
          {/* Tour Details Sidebar */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 h-fit`}>
            <img
              src={selectedTour.image}
              alt={selectedTour.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {selectedTour.name}
            </h3>
            
            <div className={`flex items-center mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{selectedTour.location}</span>
            </div>
            
            <div className={`flex items-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{selectedTour.duration}</span>
              <Star className="ml-4 text-yellow-400 fill-current" size={16} />
              <span className="ml-1 text-sm">{selectedTour.rating}</span>
            </div>
            
            <div className="mb-4">
              <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Includes:
              </h4>
              <ul className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedTour.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${selectedTour.price}
              </span>
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                /person
              </span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= stepNum 
                        ? 'bg-blue-500 text-white' 
                        : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {stepNum}
                    </div>
                    <span className={`ml-2 ${
                      step >= stepNum 
                        ? isDark ? 'text-white' : 'text-gray-900'
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {stepNum === 1 ? 'Details' : stepNum === 2 ? 'Contact' : 'Payment'}
                    </span>
                    {stepNum < 3 && (
                      <div className={`w-16 h-0.5 ml-4 ${
                        step > stepNum ? 'bg-green-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className={`px-6 py-3 border rounded-lg font-semibold transition-colors ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Back
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;