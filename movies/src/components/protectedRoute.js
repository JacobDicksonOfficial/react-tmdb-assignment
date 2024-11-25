// src/components/protectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // Import auth from firebase.js

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
