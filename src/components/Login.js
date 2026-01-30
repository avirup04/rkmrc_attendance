import React, { useState } from 'react'; // [1] Import useState hook
import { useNavigate } from 'react-router-dom'; // [2] Import for redirection

export default function Login() {

    const [loginData, setLoginData] = useState({
        roll_no: '',
        password: ''
    });

    const navigate = useNavigate();

    // --- ADD THIS FUNCTION START ---
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const safeData = {
            ...loginData,
            roll_no: btoa(loginData.roll_no)
        };

        fetch('http://localhost/react_apps/rkmrc_attendance/rkmrc_attendance_api/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(safeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === "success") {
                    //saving the user's name
                    localStorage.setItem('studentName', data.user_name);
                    localStorage.setItem('roll_no', data.user)
                    // 2. Save Filter Keys (CRITICAL FOR ROUTINE)
                    localStorage.setItem('dept', data.dept);
                    // ADD THIS LINE! This is what Routine.js looks for.
                    localStorage.setItem('sem', data.sem);

                    // Add these lines so the Sidebar appears instantly!
                    window.dispatchEvent(new Event("storage"));
                    window.dispatchEvent(new Event("auth-change"));
                    alert("Login Successful!");
                    navigate('/dashboard');
                }
                else {
                    alert("Login Error: " + data.message)
                }
            })
            .catch(err => console.error("Login Connection Failed:", err));
    };
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='card shadow border-0 p-4'>
                        {/* Headings */}
                        <div className='text-center mb-4'>
                            <i className='bi bi-person-circle text-primary' style={{ fontSize: "3rem" }}></i>
                            <h2 className='fw-bold'>Student Login</h2>
                            <p className='text-muted '>Enter Your RKMRC Credentials</p>
                        </div>
                        {/* Credentials */}
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Roll Number</label>
                                <input
                                    type='text'
                                    name="roll_no" // MUST match state key
                                    className='form-control'
                                    placeholder='e.g. LSUG/124/25'
                                    value={loginData.roll_no}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Password</label>
                                <input
                                    type='password'
                                    name="password" // MUST match state key
                                    className='form-control'
                                    placeholder='••••••••'
                                    value={loginData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type='submit' className='btn btn-primary w-100 py-2 mt-2'>
                                Sign In
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
