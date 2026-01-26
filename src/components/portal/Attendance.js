import React from 'react';

export default function Attendance() {
    return (
        <div className="container-fluid p-4">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Mark Attendance</h4>
                </div>
                <div className="card-body text-center p-5">
                    <i className="bi bi-calendar-check display-1 text-primary mb-3"></i>
                    <h2 className="mb-3">Hello, Student!</h2>
                    <p className="text-muted lead">
                        The attendance marking system is ready to be connected.
                    </p>
                    <button className="btn btn-outline-primary mt-3">
                        View Today's Status
                    </button>
                </div>
            </div>
        </div>
    );
}