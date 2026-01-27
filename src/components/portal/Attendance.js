import React, { useState, useEffect, useCallback } from 'react';

export default function Attendance() {
    // 1. STATE MANAGEMENT
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [dailyClasses, setDailyClasses] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const myRoll = localStorage.getItem('roll_no');
    const myDept = localStorage.getItem('dept');
    const mySem = localStorage.getItem('sem');

    // Helper: Get Day Name
    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    // 2. FETCH DATA (Wrapped in useCallback to fix the dependency warning)
    const fetchDailyLog = useCallback(() => {
        setLoading(true);
        const day = getDayName(selectedDate);

        fetch('http://localhost/react_apps/rkmrc_attendance/rkmrc_attendance_api/get_daily_log.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_no: myRoll,
                dept: myDept,
                sem: mySem,
                date: selectedDate,
                day: day
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") setDailyClasses(data.data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [selectedDate, myRoll, myDept, mySem]);

    // Trigger fetch on date change
    useEffect(() => {
        fetchDailyLog();
    }, [fetchDailyLog]);

    // 3. MARK ATTENDANCE FUNCTION
    const handleMark = (cls, status) => {
        fetch('http://localhost/react_apps/rkmrc_attendance/rkmrc_attendance_api/mark_attendance.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_no: myRoll,
                dept: myDept,
                sem: mySem,
                subject: cls.subject,
                date: selectedDate,
                day: getDayName(selectedDate),
                time_slot: cls.time,
                status: status
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                fetchDailyLog(); // Refresh UI
            }
        });
    };

    return (
       <div className="container-fluid p-3 p-md-4">
        {/* 1. HEADER SECTION (Mobile Friendly) */}
        <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
                <div className="row align-items-center g-3">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h5 className="text-success mb-0">Daily Attendance</h5>
                        <small className="text-muted">
                            {getDayName(selectedDate)}, {selectedDate}
                        </small>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                        <input 
                            type="date" 
                            className="form-control shadow-sm w-auto"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>

        {loading ? (
            <div className="text-center p-5">
                <div className="spinner-border text-success"></div>
            </div>
        ) : (
            /* 2. THE GRID (Horizontal on Desktop, Vertical on Mobile) */
            /* 'row-cols-1' = 1 card per line on mobile */
            /* 'row-cols-md-3' = 3 cards per line on laptops */
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {dailyClasses && dailyClasses.length > 0 ? (
                    dailyClasses.map((cls, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 shadow-sm border-0 overflow-hidden">
                                <div className={`card-header text-white py-3 ${
                                    cls.current_status === 'Present' ? 'bg-primary' : 
                                    cls.current_status === 'Absent' ? 'bg-danger' : 
                                    cls.current_status === 'Dismissed' ? 'bg-secondary' : 'bg-dark'
                                }`}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="badge bg-light text-dark">{cls.time}</span>
                                        <small className="opacity-75">Sem {mySem}</small>
                                    </div>
                                    <h6 className="mt-2 mb-0 text-truncate">{cls.subject}</h6>
                                </div>
                                <div className="card-body text-center bg-white">
                                    <p className="small text-muted mb-3">
                                        Status: <span className={`fw-bold ${!cls.current_status ? 'text-warning' : ''}`}>
                                            {cls.current_status || "Not Marked"}
                                        </span>
                                    </p>
                                    <div className="btn-group w-100 shadow-sm">
                                        <button onClick={() => handleMark(cls, 'Present')} className={`btn btn-sm ${cls.current_status === 'Present' ? 'btn-primary' : 'btn-outline-primary'}`}>P</button>
                                        <button onClick={() => handleMark(cls, 'Absent')} className={`btn btn-sm ${cls.current_status === 'Absent' ? 'btn-danger' : 'btn-outline-danger'}`}>A</button>
                                        <button onClick={() => handleMark(cls, 'Dismissed')} className={`btn btn-sm ${cls.current_status === 'Dismissed' ? 'btn-secondary' : 'btn-outline-secondary'}`}>D</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="alert alert-info text-center shadow-sm">
                            <i className="bi bi-info-circle me-2"></i>
                            No classes scheduled for {getDayName(selectedDate)}.
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
    );
}