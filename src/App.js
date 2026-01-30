import './App.css'; // This is the most important line!
import React, { useState, useEffect } from 'react'; // Add these hooks

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/portal/Dashboard";
import SideNav from "./components/portal/SideNav.js";
import Attendance from './components/portal/Attendance.js';
import Routine from './components/portal/Routine.js';

function App() {
  // 1. Use State so React watches for changes
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('roll_no'));

  // 2. This effect listens for the login event
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem('roll_no'));
    };

  // Listen for storage changes (works across tabs/logouts)
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  return (
    <>
    <Router>
      <Navbar title="RKMRC ATTENDANCE" />

      <div className="d-flex">
        {isLoggedIn && <SideNav />}

        <div className="flex-grow-1 p-3" style={{ marginLeft: isLoggedIn ? '250px' : '0'}}>
          <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home dept="Department of Life Sciences" />} />
          <Route path="/about" element={<About dept="Department of Life Sciences" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register dept="Department of Life Sciences" />} />
          
          {/* Private Portal Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
 