import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Have questions about your next adventure? We're here to help you plan the perfect trip.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Email Us</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>info@tembea360.com</p>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Call Us</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>+254 700 123 456</p>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Visit Us</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;