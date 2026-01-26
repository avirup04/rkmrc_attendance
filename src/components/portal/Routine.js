import React from 'react'

export default function Routine() {
  return (
    <div className="container-fluid p-4">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-success text-white">
                    <h4 className="mb-0">Weekly Routine</h4>
                </div>
                <div className="card-body">
                    <p className="lead text-muted mb-4">
                        Here is the schedule for your department.
                    </p>
                    
                    {/* Demo Table Structure */}
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover text-center">
                            <thead className="table-light">
                                <tr>
                                    <th>Day</th>
                                    <th>10:00 - 11:00</th>
                                    <th>11:00 - 12:00</th>
                                    <th>12:00 - 1:00</th>
                                    <th>2:00 - 3:00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fw-bold">Monday</td>
                                    <td>Physics</td>
                                    <td>Chemistry</td>
                                    <td className="bg-light text-muted">Break</td>
                                    <td>Maths</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Tuesday</td>
                                    <td>Biology</td>
                                    <td>English</td>
                                    <td className="bg-light text-muted">Break</td>
                                    <td>Computer</td>
                                </tr>
                                {/* More rows will come from MySQL later */}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="alert alert-info mt-3">
                        <i className="bi bi-info-circle me-2"></i>
                        Real data from the <strong>Master Schedule</strong> will appear here soon!
                    </div>
                </div>
            </div>
        </div>
  );
}
