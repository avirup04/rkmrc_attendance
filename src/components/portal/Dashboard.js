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
            if(data.status === "success") {
                setStats(data.data);
                if(data.data.length > 0) setSelectedSub(data.data[0]);
            }
        });
    }, [myRoll]);

    return (
        <div className="main-content-wrapper p-3 p-md-4">
            {/* --- BAR GRAPH SECTION --- */}
            <div className="card shadow-sm border-0 mb-4 rounded-4">
                <div className="card-body">
                    <h6 className="fw-bold mb-4">Attendance Overview (%)</h6>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={stats}>
                                <XAxis dataKey="subject" />
                                <YAxis domain={[0, 100]} />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="percentage" radius={[5, 5, 0, 0]}>
                                    {stats.map((entry, index) => (
                                        <Cell key={index} fill={entry.percentage < 75 ? '#dc3545' : '#198754'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* --- DETAILED ANALYSIS CARD --- */}
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-white border-0 pt-4 px-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Course Analysis</h5>
                        <select 
                            className="form-select w-auto shadow-sm"
                            onChange={(e) => setSelectedSub(stats.find(s => s.subject === e.target.value))}
                        >
                            {stats.map((s, i) => <option key={i} value={s.subject}>{s.subject}</option>)}
                        </select>
                    </div>
                </div>
                
                {selectedSub && (
                    <div className="card-body p-4">
                        <div className="row g-4 text-center">
                            <div className="col-6 col-md-4">
                                <div className="p-3 bg-light rounded-3">
                                    <div className="small text-muted">Attendance</div>
                                    <h3 className={`fw-bold ${selectedSub.percentage < 75 ? 'text-danger' : 'text-success'}`}>
                                        {selectedSub.percentage}%
                                    </h3>
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className="p-3 bg-light rounded-3">
                                    <div className="small text-muted">Total / Present</div>
                                    <h3 className="fw-bold">{selectedSub.total_happened} / {selectedSub.present}</h3>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="p-3 border border-success rounded-3">
                                    <div className="small text-success fw-bold">Calculated Marks</div>
                                    <h3 className="fw-bold text-success">{selectedSub.marks} / 5</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-warning bg-opacity-10 border border-warning rounded-3 d-flex align-items-center">
                            <i className="bi bi-exclamation-triangle-fill text-warning me-3 fs-4"></i>
                            <div>
                                <span className="fw-bold">Safety Margin:</span> You can afford to miss 
                                <span className="badge bg-warning text-dark mx-2">{selectedSub.can_miss}</span> 
                                more classes to stay above the 75% limit.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}