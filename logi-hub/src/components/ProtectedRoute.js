// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Navigate to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
