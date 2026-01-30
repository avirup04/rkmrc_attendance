import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook
import FeatureCard from './FeatureCard';

// 2. Changed from "class" to "function"
export default function Home(props) {
  const navigate = useNavigate(); // 3. Initialize the navigation hook

  // 4. The Logic Function
  const handleCheckAttendance = () => {
    // Check if 'roll_no' exists in storage (means user is logged in)
    const isLoggedIn = !!localStorage.getItem('roll_no'); 
    
    if (isLoggedIn) {
      navigate('/dashboard'); // Go to Dashboard
    } else {
      navigate('/login'); // Go to Login
    }
  };

  return (
    <>
      <div>
        {/* Fixed className syntax: merged classes into one string */}
        <div className='bg-light p-5 mb-4 rounded-3'>
          <div className='container-fluid py-5'>
            <div className='row align-items-center'>
              {/* Left Column */}
              <div className='col-md-7 text-start'>
                {/* Changed 'this.props.dept' to 'props.dept' */}
                <h1 className='display-5 fw-bold'>Welcome, Students of RKMRC</h1>
                <p className='col-md-8 fs-4'>Track your attendance across your specific semester routine and stay ahead of debarment.</p>
                
                {/* 5. ATTACH THE FUNCTION HERE */}
                <button 
                  className='btn btn-primary btn-lg' 
                  type='button'
                  onClick={handleCheckAttendance}
                >
                  Check My Attendance
                </button>
              </div>

              {/* Right Column */}
              <div className='col-md-5 d-flex justify-content-center align-items-center'>
                <img 
                  src='https://cdni.iconscout.com/illustration/premium/thumb/student-reading-book-illustration-download-in-svg-png-gif-file-formats--person-education-study-pack-people-illustrations-4545938.png' 
                  className="img-fluid" 
                  alt="Student Illustration" 
                  style={{ maxHeight: '300px', width: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-5 text-center'> {/* Fixed 'text center' to 'text-center' */}
        <div className='row g-4'>

          {/* 1st card */}
          <FeatureCard 
            iconName="bi-calendar3" 
            title="Semester Routines" 
            description={`Personalize Tracking for different schedules for the ${props.dept || "Department"}.`} 
          />

          {/* 2nd card */}
          <FeatureCard
            iconName="bi-calculator"
            title="Instant Calculation"
            description="Know your attendance percentage in one click. Get instant results."
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
  );
}