import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
    const navigate = useNavigate();
    const user = localStorage.getItem('studentName');
    
    // 1. State to control the Menu manually
    const [isOpen, setIsOpen] = useState(false);
    
    // 2. Ref to detect clicks inside the navbar
    const navRef = useRef(null);

    const handleLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
        window.dispatchEvent(new Event("auth-change"));
        navigate('/login');
        setIsOpen(false); // Close menu on logout
    };

    // 3. The Magic "Click Outside" Listener
    useEffect(() => {
        function handleClickOutside(event) {
            // If menu is open AND click is NOT inside the navbar ref
            if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        
        // Add the listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);
        
        // Clean up when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={navRef}> {/* Attach Ref here to track clicks */}
            <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/"> {props.title} </Link>
                    
                    {/* 4. Manual Toggler Button */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setIsOpen(!isOpen)} // Toggle State
                        aria-expanded={isOpen}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 5. Dynamic Class: We add 'show' if isOpen is true */}
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav w-100 align-items-center">
                            
                            {/* CLOSE MENU WHEN LINK IS CLICKED */}
                            <li className="nav-item">
                                <Link className='nav-link' to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/about" onClick={() => setIsOpen(false)}>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link text-success fw-bold' to="/donate" onClick={() => setIsOpen(false)}>
                                    <i className="bi bi-heart-fill me-1"></i> Support Me
                                </Link>
                            </li>

                            {!user ? (
                                <>
                                    <li className="nav-item ms-lg-auto">
                                        <Link className='nav-link' to="/register" onClick={() => setIsOpen(false)}>Registration</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='btn btn-primary btn-sm' to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item ms-lg-auto d-flex align-items-center">
                                    <Link
                                        to="/dashboard"
                                        className="me-3 text-primary fw-bold text-decoration-none"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Dashboard, {user}
                                    </Link>
                                    <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}