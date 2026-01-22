import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
    const navigate = useNavigate();

    // [1] Check if a student is logged in by looking for their name in browser memory
    const user = localStorage.getItem('studentName');

    // [2] Function to handle logging out
    const handleLogout = () => {
        localStorage.clear(); // Clears name and session data
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/"> {props.title} </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 align-items-center">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/about">About</Link>
                            </li>

                            {/* [3] Conditional Rendering: Show Login OR Student Name + Logout */}
                            {!user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className='nav-link' to="/register">Registration</Link>
                                    </li>
                                    <li className="nav-item ms-auto">
                                        <Link className='btn btn-primary btn-sm' to="/login">Login</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item ms-auto d-flex align-items-center">
                                    {/* Wrap the greeting in a Link component */}
                                    <Link
                                        to="/dashboard"
                                        className="me-3 text-primary fw-bold text-decoration-none"
                                        style={{ cursor: "pointer" }}
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