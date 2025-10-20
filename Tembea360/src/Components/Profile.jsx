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
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #059669, #047857)', height: '200px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
        <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '1.8rem', fontWeight: 'bold', color: '#059669' }}>
            {user?.name?.charAt(0) || 'U'}
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>{user?.name || 'User Name'}</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: '0 0 10px 0' }}>{user?.email || 'user@example.com'}</p>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px 12px', borderRadius: '15px', fontSize: '0.85rem' }}>✓ Verified</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '900px', margin: '-40px auto 0', padding: '0 20px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e9ecef', backgroundColor: '#f8f9fa' }}>
            {['profile', 'bookings', 'settings'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: '15px 20px', border: 'none', backgroundColor: activeTab === tab ? 'white' : 'transparent', color: activeTab === tab ? '#059669' : '#6c757d', fontWeight: activeTab === tab ? '600' : '500', cursor: 'pointer', borderBottom: activeTab === tab ? '2px solid #059669' : 'none' }}>
                {tab === 'profile' ? 'Profile' : tab === 'bookings' ? 'My Bookings' : 'Settings'}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: '30px' }}>
            {activeTab === 'profile' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '25px', color: '#212529' }}>Personal Information</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                  {[
                    { label: 'Full Name', type: 'text', value: user?.name },
                    { label: 'Email', type: 'email', value: user?.email },
                    { label: 'Phone', type: 'tel', placeholder: '+254 700 000 000' },
                    { label: 'Location', type: 'text', placeholder: 'Nairobi, Kenya' }
                  ].map((field, i) => (
                    <div key={i}>
                      <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#495057' }}>{field.label}</label>
                      <input type={field.type} defaultValue={field.value || ''} placeholder={field.placeholder} style={{ width: '100%', padding: '10px 12px', border: '1px solid #ced4da', borderRadius: '6px', fontSize: '0.95rem' }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#495057' }}>About Me</label>
                  <textarea rows={3} placeholder="Tell us about yourself..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #ced4da', borderRadius: '6px', fontSize: '0.95rem', resize: 'vertical' }} />
                </div>
                <button style={{ backgroundColor: '#059669', color: 'white', padding: '10px 25px', borderRadius: '6px', border: 'none', fontWeight: '500', cursor: 'pointer' }}>Save Changes</button>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '25px', color: '#212529' }}>My Bookings</h2>
                {bookings.map((booking, i) => (
                  <div key={i} style={{ border: '1px solid #dee2e6', borderRadius: '8px', padding: '20px', marginBottom: '15px', backgroundColor: '#f8f9fa' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px', color: '#212529' }}>{booking.title}</h3>
                        <p style={{ color: '#6c757d', fontSize: '0.9rem', margin: '0 0 4px 0' }}>📍 {booking.location}</p>
                        <p style={{ color: '#6c757d', fontSize: '0.9rem', margin: '0 0 12px 0' }}>📅 {booking.date}</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button style={{ padding: '6px 12px', backgroundColor: 'white', border: '1px solid #ced4da', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>Details</button>
                          <button style={{ padding: '6px 12px', backgroundColor: '#059669', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>Contact</button>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: booking.status === 'Confirmed' ? '#d4edda' : '#fff3cd', color: booking.status === 'Confirmed' ? '#155724' : '#856404', marginBottom: '8px' }}>{booking.status}</span>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#059669', margin: 0 }}>{booking.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '25px', color: '#212529' }}>Settings</h2>
                <div style={{ marginBottom: '30px' }}>
                  {[
                    { title: 'Email Notifications', desc: 'Get booking updates via email' },
                    { title: 'SMS Alerts', desc: 'Receive text message updates' },
                    { title: 'Marketing Emails', desc: 'Get travel deals and offers' }
                  ].map((setting, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 2 ? '1px solid #e9ecef' : 'none' }}>
                      <div>
                        <h4 style={{ margin: '0 0 4px 0', fontWeight: '500', color: '#212529' }}>{setting.title}</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#6c757d' }}>{setting.desc}</p>
                      </div>
                      <input type="checkbox" defaultChecked style={{ transform: 'scale(1.1)' }} />
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop: '20px', borderTop: '1px solid #e9ecef' }}>
                  <button style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>Delete Account</button>
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