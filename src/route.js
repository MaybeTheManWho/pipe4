import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RobotDetails from './pages/RobotDetails';

// This is a wrapper for protected routes
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AppRoutes = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard onLogout={onLogout} />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/robots/:id" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <RobotDetails onLogout={onLogout} />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;