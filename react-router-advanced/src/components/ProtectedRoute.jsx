import React from "react";
import { Navigate } from "react-router-dom";

  import { useState } from "react";
const ProtectedRoute = ({ isAuthenticated, children }) => {

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to `false` for testing unauthenticated behavior

  const login = () => setIsAuthenticated(true); 
  const logout = () => setIsAuthenticated(false);


  return { isAuthenticated, login, logout };
};
};

export default ProtectedRoute;
