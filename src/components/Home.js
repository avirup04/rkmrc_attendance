import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <div className='bg-light' p-5 mb-4 rounded-3>
            <div className='container-fluid py-5'>
              <div className='row align-items-center'>
                {/* Left Column */}
                <div className='col-md-7 text-start'>
                  <h1 className='display-5 fw-bold'>Welcome, {this.props.dept} Students</h1>
                  <p className='col-md-8 fs-4'>Track your attendance across your specific semester routine and stay ahead of debarment.</p>
                  <button className='btn btn-primary btn-lg' type='button'>Check My Attendance</button>
                </div>

                {/* Right Column */}
                <div className='col-md-5 d-flex justify-content-center align-items-center'>
                  <img src='https://cdni.iconscout.com/illustration/premium/thumb/student-reading-book-illustration-download-in-svg-png-gif-file-formats--person-education-study-pack-people-illustrations-4545938.png' 
                  className="img-fluid" 
                  alt="Student Illustration" 
                  style={{ maxHeight: '300px', width: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5 text center'>
          <div className='row g-4'>
            {/* First Card */}
            <div className='col-md-4'>
              <div className='p-4 border rounded shadow-sm'>
                <i className='bi bi-calendar3 text-primary' style={{ fontSize: "2.5rem" }}></i>
                <h3 className='h5 fw-bold'>Semester routines</h3>
                <p className='text-muted'>Personalized tracking for different department schedules.</p>
              </div>
            </div>
            {/* Second Card */}
            <div className='col-md-4'>
              <div className='p-4 border rounded shadow-sm'>
                <i className="bi bi-calculator text-primary" style={{ fontSize: "2.5rem" }}></i>
                <h3 className='h5 fw-bold'>Instant Calculation</h3>
                <p className='text-muted'>Know your attendance percentage in one click. And get instant results.</p>
              </div>
            </div>
            {/* Third Card */}
            <div className='col-md-4'>
              <div className='p-4 border rounded shadow-sm'>
                <i className="bi bi-exclamation-triangle-fill text-danger" style={{ fontSize: "2.5rem" }}></i>
                <h3 className='h5 fw-bold'>Avoid Debarment</h3>
                <p className='text-muted'>Get warnings before you fall below the required criteria.</p>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}