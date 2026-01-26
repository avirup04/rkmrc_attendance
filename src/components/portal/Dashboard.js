import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    // [1] Check if the 'studentName' exists in browser memory
    const user = localStorage.getItem('studentName');
    const dept = localStorage.getItem('dept');

    useEffect(() => {
        // [2] If no user is found, stop them from seeing the portal
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    // [3] Don't render the content if there is no user
    if (!user) return null;

    return (
        <div className="container mt-5 text-center">
            <div className="card shadow border-0 p-5">
                <h1 className="display-4 fw-bold text-primary">Hello, {user}!</h1>
                <p className="lead text-muted">Attendance Portal: Department of {dept}</p>
                <hr className="my-4" />
                <p>You have successfully authenticated via your college credentials.</p>
            </div>
        </div>
    );
}