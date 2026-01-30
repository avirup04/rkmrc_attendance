import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          
          {/* Header */}
          <div className='text-center mb-5'>
            <h1 className='display-5 fw-bold'>About & Guide</h1>
            <p className='text-muted lead'>Everything you need to know about RKMRC Attendance Tracker</p>
          </div>

          {/* =================================================================================
             CARD 1: ABOUT THE PROJECT (Features, Donation, & The "Magic" Calculation)
             ================================================================================= */}
          <div className='card shadow-sm border-0 rounded-4 mb-5 overflow-hidden'>
            <div className='card-header bg-primary text-white p-4 text-center'>
              <h3 className='fw-bold mb-0'><i className="bi bi-stars me-2"></i> Why Use This App?</h3>
            </div>
            
            <div className='card-body p-4 p-md-5'>
              <p className='lead text-center mb-5'>
                Built exclusively for the <strong>{props.dept || "Dept. of Life Sciences"}</strong>. 
                This isn't just a counter; it's a strategic tool to manage your academic life.
              </p>

              <div className='row g-4 mb-5'>
                {/* Feature 1 */}
                <div className='col-md-6'>
                  <div className='d-flex'>
                    <i className="bi bi-calculator-fill text-primary fs-3 me-3"></i>
                    <div>
                      <h5 className='fw-bold'>Instant Calculation</h5>
                      <p className='text-muted small'>Forget manual math. Get your exact attendance percentage for every subject in one click.</p>
                    </div>
                  </div>
                </div>
                
                {/* Feature 2: THE HIGHLIGHT */}
                <div className='col-md-6'>
                  <div className='d-flex'>
                    <i className="bi bi-shield-check-fill text-success fs-3 me-3"></i>
                    <div>
                      <h5 className='fw-bold'>The "Safety Margin"</h5>
                      <p className='text-muted small'>
                        The app calculates exactly how many classes you can safely skip. 
                        It will tell you: <span className="badge bg-success bg-opacity-10 text-success border border-success">"You can afford to miss 3 more classes"</span> while staying above 75%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className='col-md-6'>
                  <div className='d-flex'>
                    <i className="bi bi-bell-fill text-warning fs-3 me-3"></i>
                    <div>
                      <h5 className='fw-bold'>Smart Notifications</h5>
                      <p className='text-muted small'>Get reminded after every class to mark your attendance. Never forget a day.</p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className='col-md-6'>
                  <div className='d-flex'>
                    <i className="bi bi-graph-up-arrow text-info fs-3 me-3"></i>
                    <div>
                      <h5 className='fw-bold'>Visual Dashboard</h5>
                      <p className='text-muted small'>Beautiful graphs and charts to visualize your attendance trends over the semester.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DONATION SECTION */}
              <div className='bg-light p-4 rounded-3 border border-dashed text-center'>
                <p className='mb-3'>
                  <strong>Note:</strong> Hosting this software and database costs money every month, 
                  but we provide it to you completely <strong>FREE</strong>.
                </p>
                <p className='text-muted small mb-3'>
                  If this app saves you from debarment stress, consider supporting the server costs.
                </p>
                <Link to="/donate" className='btn btn-outline-success btn-sm rounded-pill px-4 fw-bold'>
                  <i className="bi bi-heart-fill me-2"></i> Feel Free to Donate
                </Link>
              </div>
            </div>
          </div>


          {/* =================================================================================
             CARD 2: HOW TO USE (The Step-by-Step Guide)
             ================================================================================= */}
          <div className='card shadow-sm border-0 rounded-4'>
            <div className='card-header bg-dark text-white p-4 text-center'>
              <h3 className='fw-bold mb-0'><i className="bi bi-journal-text me-2"></i> How to Use Guide</h3>
            </div>

            <div className='card-body p-4 p-md-5'>
              
              {/* STEP 1 & 2 */}
              <div className='d-flex mb-4'>
                <div className='flex-shrink-0'>
                  <span className='badge bg-primary rounded-circle p-3 fs-5' style={{width: '50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>1</span>
                </div>
                <div className='ms-3 pt-1'>
                  <h5 className='fw-bold'>Register & Login</h5>
                  <p className='text-muted'>First, create your account. Then, log in using your <strong>Roll Number</strong> and the <strong>Password</strong> you created.</p>
                </div>
              </div>

              {/* STEP 3 & 4 */}
              <div className='d-flex mb-4'>
                <div className='flex-shrink-0'>
                  <span className='badge bg-primary rounded-circle p-3 fs-5' style={{width: '50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>2</span>
                </div>
                <div className='ms-3 pt-1'>
                  <h5 className='fw-bold'>Initial Setup (The Backlog)</h5>
                  <p className='text-muted'>
                    Go to the <strong>Attendance</strong> section. Select the date when your semester <em>actually started</em> (e.g., 2 weeks ago). 
                    You must fill in the data from that first day up to today to ensure your percentage is accurate.
                  </p>
                </div>
              </div>

              {/* STEP 5 */}
              <div className='d-flex mb-4'>
                <div className='flex-shrink-0'>
                  <span className='badge bg-primary rounded-circle p-3 fs-5' style={{width: '50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>3</span>
                </div>
                <div className='ms-3 pt-1'>
                  <h5 className='fw-bold'>Marking Attendance</h5>
                  <p className='text-muted'>For each class, mark your status:</p>
                  <ul className='list-unstyled small text-muted ps-2 border-start border-3 border-primary'>
                    <li className='mb-1'><span className='badge bg-success me-2'>P</span> <strong>Present:</strong> You attended the class.</li>
                    <li className='mb-1'><span className='badge bg-danger me-2'>A</span> <strong>Absent:</strong> The class happened, but you missed it.</li>
                    <li><span className='badge bg-secondary me-2'>D</span> <strong>Dismissed:</strong> The teacher cancelled the class (doesn't count against you).</li>
                  </ul>
                </div>
              </div>

              {/* STEP 6 */}
              <div className='d-flex mb-4'>
                <div className='flex-shrink-0'>
                  <span className='badge bg-primary rounded-circle p-3 fs-5' style={{width: '50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>4</span>
                </div>
                <div className='ms-3 pt-1'>
                  <h5 className='fw-bold'>Daily Usage</h5>
                  <p className='text-muted'>
                    After the initial setup, you don't need to guess. You will receive a <strong>notification</strong> after each class ends. 
                    Simply click it and mark your status daily.
                  </p>
                </div>
              </div>

              {/* STEP 7 & 8 */}
              <div className='d-flex'>
                <div className='flex-shrink-0'>
                  <span className='badge bg-primary rounded-circle p-3 fs-5' style={{width: '50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>5</span>
                </div>
                <div className='ms-3 pt-1'>
                  <h5 className='fw-bold'>Analyze & Plan</h5>
                  <p className='text-muted'>
                    Visit your <strong>Dashboard</strong> to see detailed results and your "Safety Margin." 
                    Check the <strong>Weekly Routine</strong> section to prepare for upcoming classes.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}