import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-700">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-green-600">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{user?.name || 'User Name'}</h1>
              <p className="text-green-100 text-lg">{user?.email || 'user@example.com'}</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-green-700 mt-2">
                ✓ Verified Traveler
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {['Profile', 'My Bookings', 'Settings'].map((tab, index) => {
                const tabKey = ['profile', 'bookings', 'settings'][index];
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tabKey
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user?.name || ''}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue={user?.email || ''}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        placeholder="Nairobi, Kenya"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about yourself and your travel interests..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    Update Profile
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">3 Active</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">12 Completed</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: 'Maasai Mara Safari Adventure', location: 'Maasai Mara National Reserve', date: 'March 15-20, 2024', status: 'Confirmed', price: '$1,200' },
                    { title: 'Mount Kenya Hiking Expedition', location: 'Mount Kenya National Park', date: 'April 5-8, 2024', status: 'Pending', price: '$800' },
                    { title: 'Diani Beach Getaway', location: 'Diani Beach, Mombasa', date: 'May 12-16, 2024', status: 'Confirmed', price: '$600' }
                  ].map((booking, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{booking.title}</h4>
                          <p className="text-gray-600 mt-1">{booking.location}</p>
                          <p className="text-sm text-gray-500 mt-2">{booking.date}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                          <p className="text-lg font-bold text-gray-900 mt-2">{booking.price}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-3">
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                          View Details
                        </button>
                        <button className="text-gray-600 hover:text-gray-700 font-medium text-sm">
                          Download Receipt
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-700">Email Notifications</span>
                            <p className="text-sm text-gray-500">Receive booking confirmations and updates</p>
                          </div>
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-700">SMS Notifications</span>
                            <p className="text-sm text-gray-500">Get text updates for urgent matters</p>
                          </div>
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-700">Marketing Emails</span>
                            <p className="text-sm text-gray-500">Receive travel deals and promotions</p>
                          </div>
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
                      <div className="space-y-3">
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm block">
                          Change Password
                        </button>
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm block">
                          Two-Factor Authentication
                        </button>
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm block">
                          Download My Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                    Delete Account
                  </button>
                  <p className="text-sm text-gray-500 mt-2">This action cannot be undone.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;