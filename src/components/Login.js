import React from 'react'

export default function Login() {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='card shadow border-0 p-4'>
                        {/* Headings */}
                        <div className='text-center mb-4'>
                            <i className='bi bi-person-circle text-primary' style={{fontSize: "3rem" }}></i>
                            <h2 className='fw-bold'>Student Login</h2>
                            <p className='text-muted '>Enter Your RKMRC Credentials</p>
                        </div>
                        {/* Credentials */}
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Roll Number</label>
                                <input type='text' className='form-control' placeholder='e.g. LSUG/***/**'></input>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Password</label>
                                <input type='password' className='form-control' placeholder='••••••••'></input>
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
