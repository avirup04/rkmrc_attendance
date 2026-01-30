import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; 

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Donate from "./components/Donate";

// Portal Components
import Dashboard from "./components/portal/Dashboard";
import Attendance from './components/portal/Attendance';
import Routine from './components/portal/Routine';
import SideNav from './components/portal/SideNav'; // We bring this back to App.js

function App() {
  // 1. Check Login Status
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('roll_no'));

  // 2. Listen for Login/Logout events
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem('roll_no'));
    };
    window.addEventListener('storage', checkLogin);
    // Custom event listener for immediate updates
    window.addEventListener('auth-change', checkLogin); 
    return () => {
        window.removeEventListener('storage', checkLogin);
        window.removeEventListener('auth-change', checkLogin);
    };
  }, []);

  return (
    <Router>
      <Navbar title="RKMRC ATTENDANCE" />

      {/* 3. CONDITIONAL SIDEBAR: Only shows if logged in */}
      {isLoggedIn && <SideNav />}

      {/* 4. DYNAMIC WRAPPER */}
      {/* If Logged In -> Use "main-page-wrapper" (Margin 250px)
          If Logged Out -> Use standard container (Full Width)
      */}
      <div 
        className={isLoggedIn ? "main-page-wrapper" : "container-fluid"} 
        style={{ paddingTop: '80px' }} // Pushes content down below Fixed Navbar
      >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donate" element={<Donate />} />
            
            {/* These routes function the same, but now live inside the dynamic wrapper */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/routine" element={<Routine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;