import React from 'react';

export default function Register(props) {
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
            
            <form>
              <div className="row g-3">
                {/* Semester & Department */}
                <div className="col-md-6">
                  <label className="form-label">Semester</label>
                  <select className="form-select">
                    <option value="">Choose...</option>
                    <option>1st Sem</option>
                    <option>2nd Sem</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Department</label>
                  <input type="text" className="form-control" value={props.dept} readOnly />
                </div>

                {/* Roll No & Email */}
                <div className="col-md-6">
                  <label className="form-label">College Roll No.</label>
                  <input type="text" className="form-control" placeholder="e.g. 101" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>

                {/* Mobile & Password */}
                <div className="col-md-6">
                  <label className="form-label">Mobile No.</label>
                  <input type="tel" className="form-control" placeholder="+91..." />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
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