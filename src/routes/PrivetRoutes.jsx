import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner animation="grow" />;
  }
  console.log(location);
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoutes;

/*****
 * STEPS:
 * 1. CHECK USER LOGGED IN OR NOT
 * 2. IF UER IS LOGGED IN, THEN ALLOW THEM TO VISIT THE ROUTE
 * 3. LSE REDIRECT THE LOGIN PAGE.
 *
 * *****/
