import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, MapPin, Calendar, Camera, Edit3, Save, X } from 'lucide-react';

const Profile = () => {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+254 700 123 456',
    location: 'Nairobi, Kenya',
    bio: 'Adventure enthusiast and travel lover. Always looking for the next great experience!',
    dateOfBirth: '1990-05-15',
    interests: ['Safari', 'Cultural Tours', 'Adventure Sports', 'Photography']
  });

  const [bookingHistory] = useState([
    {
      id: 1,
      tourName: 'Maasai Mara Safari Adventure',
      date: '2024-03-15',
      status: 'Completed',
      price: '$599',
      rating: 5
    },
    {
      id: 2,
      tourName: 'Lamu Cultural Heritage Tour',
      date: '2024-02-10',
      status: 'Completed',
      price: '$399',
      rating: 4
    },
    {
      id: 3,
      tourName: 'Mount Kenya Climbing Expedition',
      date: '2024-04-20',
      status: 'Upcoming',
      price: '$899',
      rating: null
    }
  ]);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Save profile data
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset changes
    setIsEditing(false);
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="text-white" size={40} />
          </div>
          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
            <Camera size={16} />
          </button>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {profileData.firstName} {profileData.lastName}
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Edit3 size={16} />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
            {profileData.location}
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name
          </label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            disabled={!isEditing}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              isEditing 
                ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name
          </label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            disabled={!isEditing}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              isEditing 
                ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isEditing 
                  ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                  : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
              }`}
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isEditing 
                  ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                  : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
              }`}
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              value={profileData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isEditing 
                  ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                  : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
              }`}
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Date of Birth
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              value={profileData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isEditing 
                  ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                  : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
              }`}
            />
          </div>
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Bio
        </label>
        <textarea
          value={profileData.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          disabled={!isEditing}
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            isEditing 
              ? isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
              : isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'
          }`}
        />
      </div>

      {isEditing && (
        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Save size={16} />
            <span>Save Changes</span>
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <X size={16} />
            <span>Cancel</span>
          </button>
        </div>
      )}
    </div>
  );

  const renderBookingsTab = () => (
    <div className="space-y-6">
      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Booking History
      </h3>
      
      <div className="space-y-4">
        {bookingHistory.map((booking) => (
          <div key={booking.id} className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6`}>
            <div className="flex items-center justify-between">
              <div>
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {booking.tourName}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {new Date(booking.date).toLocaleDateString()}
                </p>
              </div>
              
              <div className="text-right">
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {booking.price}
                </p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  booking.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : booking.status === 'Upcoming'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
            
            {booking.rating && (
              <div className="mt-3 flex items-center">
                <span className={`text-sm mr-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your rating:
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-yellow-400 ${i < booking.rating ? 'fill-current' : ''}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden`}>
          {/* Tab Navigation */}
          <div className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <nav className="flex">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-4 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Booking History
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'bookings' && renderBookingsTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;