import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import './App.css'; 

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Donate from "./components/Donate"; 
import Footer from "./components/Footer"; 

// Portal Components
import Dashboard from "./components/portal/Dashboard";
import Attendance from './components/portal/Attendance';
import Routine from './components/portal/Routine';
import SideNav from './components/portal/SideNav'; 

// --- SECURITY GUARD ---
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('roll_no'); 
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
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
      {/* 1. OUTER WRAPPER: Ensures the app is at least 100% of screen height */}
      <div className="d-flex flex-column min-vh-100">
        
        <Navbar title="RKMRC ATTENDANCE" />

        {/* 2. MIDDLE SECTION: Holds Sidebar (Left) and Content (Right) */}
        <div className="d-flex flex-grow-1 position-relative">
          
          {/* Sidebar (Only shows if logged in) */}
          {isLoggedIn && <SideNav />}

          {/* 3. CONTENT AREA WRAPPER */}
          {/* We make this a Flex Column so we can push the footer down inside it */}
          <div 
            className={`${isLoggedIn ? "main-page-wrapper" : "container-fluid"} d-flex flex-column w-100`} 
            style={{ paddingTop: '80px' }} 
          >
            
            {/* 4. ROUTES WRAPPER: This grows to fill all empty space */}
            <div className="flex-grow-1">
              <Routes>
                  {/* PUBLIC ROUTES */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/donate" element={<Donate />} />
                  
                  {/* PROTECTED ROUTES */}
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

            {/* 5. FOOTER: Now it sits safely at the bottom of the content area */}
            <Footer />

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;