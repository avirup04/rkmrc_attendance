import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function SideNav() {
    const navigate = useNavigate();
    const location = useLocation(); // Hook to detect page changes
    const [isOpen, setIsOpen] = useState(false); // State to handle open/close

    const studentName = localStorage.getItem('studentName') || "Student";
    const studentRoll = localStorage.getItem('roll_no');

    // AUTO-CLOSE: When you click a link (change location), close the menu
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
        navigate('/login');
    };

    return (
        <>
            {/* 1. MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
            <button 
                className="btn btn-success d-md-none shadow-lg" 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    position: 'fixed', 
                    bottom: '25px', 
                    right: '25px', 
                    zIndex: 2000, 
                    borderRadius: '50%', 
                    width: '60px', 
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                {/* Switch icon between List and X */}
                <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.5rem' }}></i>
            </button>

            {/* 2. BACKDROP (Dark overlay when menu is open on mobile) */}
            {isOpen && (
                <div 
                    className="side-nav-backdrop d-md-none" 
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* 3. THE SIDEBAR DRAWER */}
            {/* The 'show' class will trigger the slide-in animation from CSS */}
            <div className={`d-flex flex-column p-3 bg-dark text-white shadow side-nav-drawer ${isOpen ? 'show' : ''}`}>
                
                <h3 className='text-center mb-4 border-bottom pb-2'>RKMRC</h3>

                <div className='mb-4 px-2'>
                    <small className='text-info'>Welcome,</small>
                    <div className='fw-bold text-truncate'>{studentName}</div>
                    <small className='text-muted'>{studentRoll}</small>
                </div>

                <ul className='nav nav-pills flex-column mb-auto gap-2'>
                    <li className='nav-item'>
                        <Link to="/dashboard" className='nav-link text-white'>
                            <i className="bi bi-speedometer2 me-2"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/attendance" className='nav-link text-white'>
                            <i className="bi bi-calendar-check me-2"></i> Attendance
                        </Link>
                    </li>
                    <li>
                        <Link to="/routine" className='nav-link text-white'>
                            <i className="bi bi-calendar3 me-2"></i> Weekly Routine
                        </Link>
                    </li>
                </ul>

                <button className="btn btn-outline-danger w-100 mt-auto" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                </button>
            </div>
        </>
    );
}