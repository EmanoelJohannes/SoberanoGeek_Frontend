import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
