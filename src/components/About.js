import React from 'react'

export default function About(props) {
  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          <div className='text-center mb-5'>
            <i className='bi bi-info-circle text-primary' style={{ fontSize: "3rem" }}></i>
            <h2 className='display-6 fw-bold mt-3'>About Our Project</h2>
            <p className='lead mt-4'>
              This attendance tracker was built specifically for the <strong>{props.dept}</strong> at RKMRC. 
              Its goal is to help us track our daily lectures and avoid debarment.
            </p>
          </div>

          <div className='p-4 bg-light border rounded-3 mt-4'>
            <h3 className='h4 fw-bold mb-4 text-center'>How to get 100% out of this site:</h3>
            
            <div className='row g-4'>
              {/* Step 1 & 2: Registration & Login */}
              <div className='col-md-6'>
                <div className='d-flex align-items-start mb-3'>
                  <div className='badge bg-primary rounded-pill me-3'>1</div>
                  <div>
                    <h5 className='fw-bold'>Register & Login</h5>
                    <p className='text-muted small'>Sign up with your Semester, Roll No., Email, and Mobile. Once done, simply login with your College Roll No. and Password.</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Course Selection */}
              <div className='col-md-6'>
                <div className='d-flex align-items-start mb-3'>
                  <div className='badge bg-primary rounded-pill me-3'>2</div>
                  <div>
                    <h5 className='fw-bold'>Choose Your Courses</h5>
                    <p className='text-muted small'>Routines and class counts are personalized. Select your specific courses so the app can build your unique schedule.</p>
                  </div>
                </div>
              </div>

              {/* Step 4: Initial Setup */}
              <div className='col-md-6'>
                <div className='d-flex align-items-start mb-3'>
                  <div className='badge bg-primary rounded-pill me-3'>3</div>
                  <div>
                    <h5 className='fw-bold'>Set Semester Dates</h5>
                    <p className='text-muted small'>Pick your semester start date. You will need to manually fill in your attendance for any dates that have already passed.</p>
                  </div>
                </div>
              </div>

              {/* Step 5: Automated Notifications */}
              <div className='col-md-6'>
                <div className='d-flex align-items-start mb-3'>
                  <div className='badge bg-success rounded-pill me-3'>4</div>
                  <div>
                    <h5 className='fw-bold'>Smart Notifications</h5>
                    <p className='text-muted small'>Receive alerts before each class. After the lecture, a notification will ask if you attended to automatically update your status.</p>
                  </div>
                </div>
              </div>

              {/* Step 6: Dashboard & Pie Charts */}
              <div className='col-md-6'>
                <div className='d-flex align-items-start mb-3'>
                  <div className='badge bg-primary rounded-pill me-3'>5</div>
                  <div>
                    <h5 className='fw-bold'>Track Progress</h5>
                    <p className='text-muted small'>View your attendance percentages and visual pie charts on your dashboard for every individual course.</p>
                  </div>
                </div>
              </div>

              {/* Step 7: Dismissed Classes */}
              <div className='col-md-6'>
                <div className='d-flex align-items-start mb-3'>
                  <div className='badge bg-danger rounded-pill me-3'>6</div>
                  <div>
                    <h5 className='fw-bold'>Manage Dismissals</h5>
                    <p className='text-muted small'>If a class is dismissed by the department, you can manually log it to ensure your percentage remains accurate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}