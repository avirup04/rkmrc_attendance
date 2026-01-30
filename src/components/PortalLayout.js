import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideNav from './portal/SideNav';

export default function PortalLayout() {
    const navigate = useNavigate();

    // SECURITY CHECK: If no roll_no, kick them back to login
    useEffect(() => {
        const roll = localStorage.getItem('roll_no');
        if (!roll) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <SideNav />
            <div className="main-page-wrapper" style={{ paddingTop: '70px' }}>
                <Outlet />
            </div>
        </>
    );
}