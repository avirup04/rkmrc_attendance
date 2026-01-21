import React, { useState } from 'react'; // Mandatory: Import useState

export default function Register(props) {
  // Line 1: Create the "Memory" for the form
  const [formData, setFormData] = useState({
    name: '',
    semester: '',
    department: '',
    roll_no: '',
    email: '',
    mobile: '',
    password: ''
  });

  // Line 2: The Logic to track every keystroke
  const handleChange = (e) => {
    // We use [e.target.name] so this one function works for ALL input boxes
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Line 3: The Logic to send data to XAMPP
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh

    // Create a safe copy of the data
  const safeData = {
    ...formData,
    roll_no: btoa(formData.roll_no) // Protects LSUG/124/25 entirely
  };

    fetch('http://localhost/react_apps/rkmrc_attendance/rkmrc_attendance_api/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(safeData) // Convert memory to JSON string
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "Success") {
          alert("Registration Successful!");
          // Line 4: Clear the form memory
          setFormData({
            name: '', semester: '', department: '', roll_no: '',
            email: '', mobile: '', password: ''
          });
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch(err => console.error("Connection failed:", err));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <div className="text-center mb-4">
              <i className="bi bi-person-plus text-primary" style={{ fontSize: "2.5rem" }}></i>
              <h2 className="fw-bold mt-2">Student Registration</h2>
              <p className="text-muted">Create your account for the {props.dept}</p>
            </div>

            <form onSubmit={handleSubmit}> {/* Connect the courier logic here */}
              <div className="row g-3">

                <div className="col-12">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} placeholder="Enter your full name" onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Semester</label>
                  <select className="form-select" name="semester" value={formData.semester} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option value="1">1st Sem</option>
                    <option value="2">2nd Sem</option>
                    <option value="3">3rd Sem</option>
                    <option value="4">4th Sem</option>
                    <option value="5">5th Sem</option>
                    <option value="6">6th Sem</option>
                    <option value="7">7th Sem</option>
                    <option value="8">8th Sem</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Department</label>
                  <select className="form-select" name="department" value={formData.department} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Computer_Science">Computer Science</option>
                    <option value="Economics">Economics</option>
                    <option value="Life_Sciences">Life Sciences</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Bengali">Bengali</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Political_Science">Political Science</option>
                    <option value="Sanskrit">Sanskrit</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">College Roll No.</label>
                  <input type="text" className="form-control" name="roll_no" value={formData.roll_no} placeholder="e.g. 101" onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" name="email" value={formData.email} placeholder="name@example.com" onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Mobile No.</label>
                  <input type="tel" className="form-control" name="mobile" value={formData.mobile} placeholder="+91..." onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" value={formData.password} placeholder="••••••••" onChange={handleChange} required />
                </div>

                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Register Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}