import React, { useAuth } from "react";
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Redirect to="/login" />;
};
