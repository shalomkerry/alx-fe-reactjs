import React from "react";
import { Navigate } from "react-router-dom";

  import { useState } from "react";
const ProtectedRoute = ({ isAuthenticated, children }) => {

const useAuth = () => {
  // Simulate authentication state (replace with real logic)
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to `false` for testing unauthenticated behavior

  const login = () => setIsAuthenticated(true);  // Mock login function
  const logout = () => setIsAuthenticated(false); // Mock logout function


  return { isAuthenticated, login, logout };
};
};

export default ProtectedRoute;
