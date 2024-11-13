import React, { createContext, useState, useContext } from 'react';

// Create a context to provide the auth state
const AuthContext = createContext();

// AuthProvider to wrap around your app and provide authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);  // Set authentication state to true
  const logout = () => setIsAuthenticated(false);  // Set authentication state to false

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication state
export const useAuth = () => useContext(AuthContext);
