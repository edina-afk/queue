import React from 'react';
import { Navigate } from 'react-router-dom'; 

const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const clientId = localStorage.getItem('clientId'); // Check if a token exists in localStorage

  return isAuthenticated && clientId ? <Element /> : <Navigate to="/register" />; // Redirect to sign-up page if not authenticated
};

export default ProtectedRoute;
