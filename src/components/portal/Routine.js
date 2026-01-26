import React, { useState, useEffect } from 'react';

export default function Routine() {
    // 1. Initialize State (Memory)
    const [routineData, setRoutineData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Get User Info from Storage
    const myDept = localStorage.getItem('dept');
    const mySem = localStorage.getItem('sem');

    // 3. Define Matrix Columns (Time Slots)
    const timeSlots = [
        "10.30-11.15",
        "11.15-12.00",
        "12.00-12.45",
        "12.45-1.30",
        "1.30-2.00",
        "2.00-2.45",
        "2.45-3.30",
        "3.30-4.15",
        "4.15-5.00"
    ];

    // 4. Define Matrix Rows (Days)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // 5. Fetch Data Effect (Runs once when component loads)
    useEffect(() => {
        // Safety Check
        if (!myDept || !mySem) {
            setError("No Department or Semester found. Please login again.");
            setLoading(false);
            return;
        }

        // Fetch API
        fetch('http://localhost/react_apps/rkmrc_attendance/rkmrc_attendance_api/get_routine.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dept: myDept, sem: mySem })
        })
        .then(res => res.json())
        .then(data => {
            console.log("API Data:", data); // Debugging Log
            if (data.status === "success" && Array.isArray(data.data)) {
                setRoutineData(data.data);
            } else {
                setRoutineData([]); 
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Fetch Error:", err);
            setError("Connection Failed. Check URL.");
            setLoading(false);
        });
    }, [myDept, mySem]);

    // 6. Helper Function to Find Classes
    const getClass = (day, time) => {
        if (!routineData || !Array.isArray(routineData)) return "-";
        const foundClass = routineData.find(r => r.day === day && r.time === time);
        return foundClass ? foundClass.subject : "-";
    };

    // 7. Render the Component
    if (error) {
        return <div className="alert alert-danger m-4">{error}</div>;
    }

    return (
        <div className="container-fluid p-4">
            <h4 className="mb-3 text-success">
                Routine ({myDept ? myDept.replace('_', ' ') : ''} - Sem {mySem})
            </h4>

            {loading ? (
                <div className="d-flex justify-content-center p-5">
                    <div className="spinner-border text-success"></div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle table-sm border-dark">
                        <thead className="table-success border-dark">
                            <tr>
                                <th className="py-3 bg-success text-white">DAY / TIME</th>
                                {timeSlots.map((slot, i) => (
                                    <th key={i} className="bg-light" style={{minWidth: '90px', fontSize:'0.9rem'}}>
                                        {slot}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {days.map((day, row) => (
                                <tr key={row}>
                                    <td className="fw-bold bg-secondary text-white">{day}</td>
                                    {timeSlots.map((time, col) => {
                                        const subject = getClass(day, time);
                                        const isBreak = time === "1.30-2.00";
                                        
                                        return (
                                            <td key={col} className={subject !== "-" ? "bg-primary text-white fw-bold" : (isBreak ? "bg-warning fw-bold" : "")}>
                                                {isBreak && subject === "-" ? "RECESS" : subject}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}