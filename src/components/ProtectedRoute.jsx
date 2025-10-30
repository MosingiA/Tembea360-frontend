import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredUserType }) => {
  const { user, loading } = useAuth();
  console.log('ProtectedRoute - User:', user, 'Required type:', requiredUserType);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredUserType && user.userType !== requiredUserType) {
    console.log('Access denied. Required:', requiredUserType, 'User type:', user.userType);
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;