import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RobotDetails from './pages/RobotDetails';

// Import new providers
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Import CSS files
import './styles/global.css';
import './styles/darkMode.css';
import './styles/rtl.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Simple authentication handler
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/robots/:id" 
                  element={
                    <ProtectedRoute>
                      <RobotDetails />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;