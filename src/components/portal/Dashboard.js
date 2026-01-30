import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function Dashboard() {
    const [stats, setStats] = useState([]);
    const [selectedSub, setSelectedSub] = useState(null);
    const myRoll = localStorage.getItem('roll_no');

    useEffect(() => {
        fetch('http://localhost/react_apps/rkmrc_attendance/rkmrc_attendance_api/get_attendance_stats.php', {
            method: 'POST',
            body: JSON.stringify({ roll_no: myRoll })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setStats(data.data);
                    // Default to the first subject if data exists
                    if (data.data.length > 0) setSelectedSub(data.data[0]);
                }
            });
    }, [myRoll]);

    return (
        <div className="main-content-wrapper p-3 p-md-4">
            {/* --- BAR GRAPH SECTION --- */}
            {/* --- BAR GRAPH SECTION --- */}
            <div className="card shadow-sm border-0 mb-4 rounded-4">
                <div className="card-body">
                    <h6 className="fw-bold mb-4">Attendance Overview (%)</h6>

                    {/* 1. SCROLLABLE WRAPPER */}
                    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '10px' }}>

                        {/* 2. INCREASED WIDTH (1000px) */}
                        <div style={{ minWidth: '1000px', height: 350 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={stats} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}> {/* Added bottom margin for rotated text */}
                                    <XAxis
                                        dataKey="subject"
                                        interval={0}
                                        angle={-45}
                                        textAnchor="end"
                                        height={100} // Increased height to prevent cutting off
                                        tick={{ fontSize: 12, fill: '#666', dy: 10 }} // dy: 10 PUSHES TEXT DOWN
                                    />
                                    <YAxis domain={[0, 100]} />
                                    <Tooltip cursor={{ fill: 'transparent' }} />
                                    <Bar dataKey="percentage" radius={[5, 5, 0, 0]} barSize={40}>
                                        {stats.map((entry, index) => (
                                            <Cell key={index} fill={entry.percentage < 75 ? '#dc3545' : '#198754'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Visual Hint */}
                    <div className="d-md-none text-center text-muted small mt-2">
                        <i className="bi bi-arrow-left-right me-1"></i> Swipe table to see more subjects
                    </div>
                </div>
            </div>

            {/* --- DETAILED ANALYSIS CARD --- */}
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-white border-0 pt-4 px-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Course Analysis</h5>

                        {/* Course Selector Dropdown */}
                        <select
                            className="form-select w-auto shadow-sm"
                            onChange={(e) => setSelectedSub(stats.find(s => s.subject === e.target.value))}
                            value={selectedSub ? selectedSub.subject : ''} // Controlled component
                        >
                            {stats.map((s, i) => <option key={i} value={s.subject}>{s.subject}</option>)}
                        </select>
                    </div>
                </div>

                {selectedSub && (
                    <div className="card-body p-4">
                        <div className="row g-4 text-center">
                            {/* Attendance % */}
                            <div className="col-6 col-md-4">
                                <div className="p-3 bg-light rounded-3">
                                    <div className="small text-muted">Attendance</div>
                                    <h3 className={`fw-bold ${selectedSub.percentage < 75 ? 'text-danger' : 'text-success'}`}>
                                        {selectedSub.percentage}%
                                    </h3>
                                </div>
                            </div>

                            {/* Classes Count */}
                            <div className="col-6 col-md-4">
                                <div className="p-3 bg-light rounded-3">
                                    <div className="small text-muted">Total / Present</div>
                                    <h3 className="fw-bold">{selectedSub.total_happened} / {selectedSub.present}</h3>
                                </div>
                            </div>

                            {/* Marks */}
                            <div className="col-12 col-md-4">
                                <div className="p-3 border border-success rounded-3">
                                    <div className="small text-success fw-bold">Calculated Marks</div>
                                    <h3 className="fw-bold text-success">{selectedSub.marks} / 5</h3>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Warning / Success Banner */}
                        <div className={`mt-4 p-3 rounded-3 d-flex align-items-center border ${selectedSub.percentage >= 75
                                ? 'bg-success bg-opacity-10 border-success text-success'
                                : 'bg-danger bg-opacity-10 border-danger text-danger'
                            }`}>
                            <i className={`bi ${selectedSub.percentage >= 75 ? 'bi-check-circle-fill' : 'bi-exclamation-octagon-fill'} me-3 fs-4`}></i>
                            <div>
                                {selectedSub.percentage >= 75 ? (
                                    <span>
                                        <strong>Good Standing:</strong> You can afford to miss
                                        <span className="badge bg-success mx-2">{selectedSub.can_miss}</span>
                                        more classes.
                                    </span>
                                ) : (
                                    <span>
                                        <strong>Action Required:</strong> You must attend the next
                                        <span className="badge bg-danger mx-2">{selectedSub.must_attend}</span>
                                        classes in a row to reach 75%.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}