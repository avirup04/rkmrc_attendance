import React, { Component } from 'react'
import FeatureCard from './FeatureCard'

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

            {/* 1st card  */}
            <FeatureCard 
            iconName="bi-calendar3" 
            title="Semester Routines" 
            description={`Personalize Tracking for dfifferent schedules for the ${this.props.dept}.`} />

            {/* 2nd card */}
            <FeatureCard
            iconName="bi-calculator"
            title="Instant Calculation"
            description="Know your attaendance percentage in one click. Get instant results."
            />

            {/* 3rd card */}
            <FeatureCard
            iconName="bi-exclamation-triangle-fill text-danger"
            title="Avoid Debarment"
            description="Receive warnings if your attendance falls below the required criteria"
            />

          </div>
        </div>
      </>
    )
  }
}