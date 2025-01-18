import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the useAuth hook

// PrivateRoute component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useAuth(); // Using the context to check if authenticated

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" /> // Redirect to sign-in page if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;
