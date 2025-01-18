import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

// PrivateRoute component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useAuth();

  return (
    <Route
      {...rest}
      element={
        authToken ? (
          <Component />
        ) : (
          <Navigate to="/" replace /> 
        )
      }
    />
  );
};

export default PrivateRoute;
