import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Added 'Navigate'
import './App.css'; 

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Donate from "./components/Donate"; // Make sure path is correct

// Portal Components
import Dashboard from "./components/portal/Dashboard";
import Attendance from './components/portal/Attendance';
import Routine from './components/portal/Routine';
import SideNav from './components/portal/SideNav'; 

// --- 1. THE SECURITY GUARD ---
// This component checks if you are allowed to enter
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('roll_no'); // Check for roll number
  
  if (!isAuthenticated) {
    // If not logged in, kick them to Login page
    return <Navigate to="/login" replace />;
  }
  // If logged in, let them see the page
  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('roll_no'));

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem('roll_no'));
    };
    window.addEventListener('storage', checkLogin);
    window.addEventListener('auth-change', checkLogin); 
    return () => {
        window.removeEventListener('storage', checkLogin);
        window.removeEventListener('auth-change', checkLogin);
    };
  }, []);

  return (
    <Router>
      <Navbar title="RKMRC ATTENDANCE" />

      {/* Sidebar appears on ALL pages if logged in */}
      {isLoggedIn && <SideNav />}

      <div 
        className={isLoggedIn ? "main-page-wrapper" : "container-fluid"} 
        style={{ paddingTop: '80px' }} 
      >
        <Routes>
            {/* PUBLIC ROUTES (Anyone can see these) */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donate" element={<Donate />} />
            
            {/* --- PROTECTED ROUTES (Only Logged-in Users) --- */}
            {/* We wrap these in our new Security Guard */}
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/attendance" element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            } />
            
            <Route path="/routine" element={
              <ProtectedRoute>
                <Routine />
              </ProtectedRoute>
            } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;