import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [professionals, setProfessionals] = useState([]);
  const [professionalUpdates, setProfessionalUpdates] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const addProfessionalUpdate = (update) => {
    const newUpdate = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...update
    };
    setProfessionalUpdates(prev => [newUpdate, ...prev]);
  };

  const markUpdateAsRead = (updateId) => {
    setProfessionalUpdates(prev => 
      prev.map(update => 
        update.id === updateId ? { ...update, read: true } : update
      )
    );
  };

  // Simulate professional updates for travelers
  useEffect(() => {
    if (user && user.userType === 'traveler') {
      const interval = setInterval(() => {
        const updates = [
          { type: 'new_guide', message: 'New wildlife expert Sarah joined in Maasai Mara' },
          { type: 'guide_update', message: 'Michael Chen updated his adventure tours portfolio' },
          { type: 'new_tour', message: 'Emma Wilson added a new cultural experience in Lamu' },
          { type: 'promotion', message: 'Special discount: 20% off cultural tours this month' }
        ];
        const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
        addProfessionalUpdate(randomUpdate);
      }, 30000); // Every 30 seconds

      return () => clearInterval(interval);
    }
  }, [user]);

  const value = {
    user,
    login,
    logout,
    loading,
    professionals,
    professionalUpdates,
    addProfessionalUpdate,
    markUpdateAsRead
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};