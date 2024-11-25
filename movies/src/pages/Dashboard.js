// src/pages/Dashboard.js
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch {
      console.error("Failed to log out");
    }
  };

  return (
    <div>
      <h1>Welcome, {currentUser.email}!</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
