import React from 'react';

export default function Dashboard() {
    // grabbing name from the local Storage
    const name =localStorage.getItem('studentName');
    return (
        <div className="container mt-5 text-center">
            <div className="card shadow border-0 p-5">
                <h1 className="display-4 fw-bold text-primary">Hello {name ? name : "Student"}!</h1>
                <p className="lead text-muted">
                    Welcome to the RKMRC Student Attendance Dashboard.
                </p>
                <hr className="my-4" />
                <p>You have successfully authenticated with your College Roll Number.</p>
            </div>
        </div>
    );
}