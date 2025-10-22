import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const bookings = [
    { title: 'Maasai Mara Safari', location: 'Maasai Mara', date: 'Mar 15-20', status: 'Confirmed', price: '$1,200' },
    { title: 'Mount Kenya Hiking', location: 'Mount Kenya', date: 'Apr 5-8', status: 'Pending', price: '$800' },
    { title: 'Diani Beach Trip', location: 'Diani Beach', date: 'May 12-16', status: 'Confirmed', price: '$600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 h-48 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-emerald-600">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <h1 className="text-4xl font-bold mb-2">{user?.name || 'User Name'}</h1>
          <p className="text-lg opacity-90 mb-3">{user?.email || 'user@example.com'}</p>
          <span className="bg-white/20 px-3 py-2 rounded-2xl text-sm">Verified</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto -mt-10 px-5">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            {['profile', 'bookings', 'settings'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-4 px-5 border-none cursor-pointer font-medium ${
                activeTab === tab ? 'bg-white text-emerald-600 font-semibold border-b-2 border-emerald-600' : 'bg-transparent text-gray-600'
              }`}>
                {tab === 'profile' ? 'Profile' : tab === 'bookings' ? 'My Bookings' : 'Settings'}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {[
                    { label: 'Full Name', type: 'text', value: user?.name },
                    { label: 'Email', type: 'email', value: user?.email },
                    { label: 'Phone', type: 'tel', placeholder: '+254 700 000 000' },
                    { label: 'Location', type: 'text', placeholder: 'Nairobi, Kenya' }
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="block font-medium mb-2 text-gray-700">{field.label}</label>
                      <input type={field.type} defaultValue={field.value || ''} placeholder={field.placeholder} className="w-full p-3 border border-gray-300 rounded-lg text-base" />
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <label className="block font-medium mb-2 text-gray-700">About Me</label>
                  <textarea rows={3} placeholder="Tell us about yourself..." className="w-full p-3 border border-gray-300 rounded-lg text-base resize-y" />
                </div>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-emerald-700">Save Changes</button>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">My Bookings</h2>
                {bookings.map((booking, i) => (
                  <div key={i} className="border border-gray-300 rounded-lg p-5 mb-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{booking.title}</h3>
                        <p className="text-gray-600 text-sm mb-1">{booking.location}</p>
                        <p className="text-gray-600 text-sm mb-3">{booking.date}</p>
                        <div className="flex gap-2">
                          <button className="px-3 py-2 border border-gray-300 rounded bg-white cursor-pointer text-sm">Details</button>
                          <button className="px-3 py-2 bg-emerald-600 text-white border-none rounded cursor-pointer text-sm">Contact</button>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 rounded-xl text-xs font-medium mb-2 ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                        <p className="text-xl font-bold text-emerald-600">{booking.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Settings</h2>
                <div className="mb-8">
                  {[
                    { title: 'Email Notifications', desc: 'Get booking updates via email' },
                    { title: 'SMS Alerts', desc: 'Receive text message updates' },
                    { title: 'Marketing Emails', desc: 'Get travel deals and offers' }
                  ].map((setting, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 ${i < 2 ? 'border-b border-gray-200' : ''}`}>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{setting.title}</h4>
                        <p className="text-sm text-gray-600">{setting.desc}</p>
                      </div>
                      <input type="checkbox" defaultChecked className="scale-110" />
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-gray-200">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-700">Delete Account</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;