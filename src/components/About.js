import React from 'react'

export default function About(props) {
  return (
    <>
    <div className='conatiner my-5 text-center'>
        <div className='row justify-content-center'>
            <div className='col-lg-8'>
                <i className='bi bi-info-circle text-primary' style={{fontSize: "3rem"}}></i>
                <h2 className='display-6 fw-bold mt-3'>About Our Project</h2>
                <p className='lead mt-4 text-start'>
                    This attaendance tracker was built specifically for the <strong>{props.dept}</strong> at RKMRC. 
                    Its goal is to help us track our daily lectures and avoid debarment.
                </p>
                <div className='p-4 bg-light border rounded-3 text-start mt-4'>
                    <h3 className='h5 fw-bold'>Current Features:</h3>
                    <ul>
                        <li>Visual Semester Routines</li>
                        <li>Attendance Percentage Logic</li>
                        <li>Public Github Documentation</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
