import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';

// 1. IMPORT YOUR IMAGE HERE
// (Make sure the file name matches exactly what you saved!)
import heroImage from '../assets/home_hero.png'; 

export default function Home(props) {
  const navigate = useNavigate();

  const handleCheckAttendance = () => {
    const isLoggedIn = !!localStorage.getItem('roll_no'); 
    
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div>
        <div className='bg-light p-5 mb-4 rounded-3'>
          <div className='container-fluid py-5'>
            <div className='row align-items-center'>
              
              {/* Left Column (Text) */}
              <div className='col-md-7 text-start'>
                <h1 className='display-5 fw-bold'>Welcome, Students of RKMRC</h1>
                <p className='col-md-8 fs-4'>Track your attendance across your specific semester routine and stay ahead of debarment.</p>
                
                <button 
                  className='btn btn-primary btn-lg' 
                  type='button'
                  onClick={handleCheckAttendance}
                >
                  Check My Attendance
                </button>
              </div>

              {/* Right Column (Image) */}
              <div className='col-md-5 d-flex justify-content-center align-items-center'>
                
                {/* 2. USE THE IMPORTED VARIABLE HERE */}
                <img 
                  src={heroImage} 
                  className="img-fluid" 
                  alt="Students tracking attendance" 
                  style={{ maxHeight: '300px', width: 'auto' }}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-5 text-center'>
        <div className='row g-4'>
          <FeatureCard 
            iconName="bi-calendar3" 
            title="Semester Routines" 
            description={`Personalize Tracking for different schedules for the ${props.dept || "Department"}.`} 
          />
          <FeatureCard
            iconName="bi-calculator"
            title="Instant Calculation"
            description="Know your attendance percentage in one click. Get instant results."
          />
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