import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SideNav() {
    const navigate = useNavigate();

    const studentName = localStorage.getItem('studentName') || "Student";
    const studentRoll = localStorage.getItem('roll_no');

    const handleLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
        navigate('/login');
    };

    return (
        // FIXED 1: Removed 'vh-100' so the inline style controls the height accurately
        <div className='d-flex flex-column p-3 bg-dark text-white shadow' 
             style={{ width: '250px', position: 'fixed', top: '56px', left: 0, zIndex: 1000, height: 'calc(100vh - 56px)' }}>
            
            <h3 className='text-center mb-4 border-bottom pb-2'>RKMRC</h3>

            <div className='mb-4 px-2'>
                <small className='text-info'>Welcome,</small>
                <div className='fw-bold'>{studentName}</div>
                <small className='text-muted'>{studentRoll}</small>
            </div>

            {/* FIXED 2: Typo 'felx-column' -> 'flex-column' */}
            <ul className='nav nav-pills flex-column mb-auto'>
                <li className='nav-item'>
                    {/* FIXED 3: Typo 'text-whit' -> 'text-white' */}
                    <Link to="/dashboard" className='nav-link text-white mb-2'>Dashboard</Link>
                </li>
                <li>
                    <Link to="/attendance" className='nav-link text-white mb-2'>Attendance</Link>
                </li>
                <li>
                    <Link to="/routine" className='nav-link text-white mb-2'>Weekly Routine</Link>
                </li>
            </ul>

            <button className="btn btn-outline-danger w-100 mt-auto" onClick={handleLogout}>Logout</button>
        </div>
    );
}