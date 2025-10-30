import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Logout from './components/auth/Logout';
import Contact from './components/Contact';
import Profile from './components/Profile';
import About from  './components/About';
import ProfessionalSetup from './components/ProfessionalSetup';
import GuideSubscriptionPlans from './components/GuideSubscriptionPlans';
import Booking from './components/Booking';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Payment from './components/Payment';
import Tourdetails from './components/Tourdetails';
import Tours from './components/Tours';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';
import './App.css';

function AppContent() {
  const { isDark } = useTheme();
  const { user } = useAuth();
  
  return (
    <div className={`App min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' : 'tour-theme'} fun-dots`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        } />
        <Route path="/professional-setup" element={
          <ProtectedRoute>
            <ProfessionalSetup />
          </ProtectedRoute>
        } />
        <Route path="/subscription-plans" element={
          <ProtectedRoute>
            {user?.userType === 'professional' ? <GuideSubscriptionPlans /> : <Navigate to="/" replace />}
          </ProtectedRoute>
        } />
        <Route path="/booking" element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/tourdetails" element={
          <ProtectedRoute>
            <Tourdetails />
          </ProtectedRoute>
        } />
        <Route path="/tours" element={
          <ProtectedRoute>
            <Tours />
          </ProtectedRoute>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>} /> 
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
