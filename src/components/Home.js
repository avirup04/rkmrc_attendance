import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='bg-light'p-5 mb-4 rounded-3>
            <div className='container-fluid py-5'>
                <h1 className='display-5 fw-bold'>Welcome, {this.props.dept} Students</h1>
                <p className='col-md-8 fs-4'>Track your attendance across your specific semester routine and stay ahead of debarment.</p>
                <button className='btn btn-primary btn-lg' type='button'>Check My Attendance</button>
            </div>
        </div>
      </div>
    )
  }
}