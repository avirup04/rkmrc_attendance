import React from 'react';
import myQrCode from '../assets/my-qr.png'; 

export default function Donate() {
    // --- MANUAL DONOR LIST CONFIGURATION ---
    // ADD THE 'dept' FIELD HERE
    const donors = [
        { name: "Avik Makal", dept: "Life Sciences", year: "1st Year as of 2025-2026", amount: "₹5" },
        { name: "Taniska Biswas", dept: "Life Sciences", year: "1st Year as of 2025-2026", amount: "₹1" },
        // { name: "Name", dept: "Dept", year: "Year", amount: "₹Amount" },
    ];

    return (
        <div style={{ 
            background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', 
            minHeight: 'calc(100vh - 80px)', 
            display: 'flex',            
            alignItems: 'center',       
            justifyContent: 'center',
            paddingTop: '40px',
            paddingBottom: '40px'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col-12 col-md-6 col-lg-4"> 
                        
                        {/* ==========================
                           1. MAIN DONATION CARD
                           ========================== */}
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
                            
                            <div className="card-header border-0 p-4 text-center text-white" 
                                 style={{ background: 'linear-gradient(to right, #11998e, #38ef7d)' }}>
                                <i className="bi bi-heart-fill display-4 mb-2 animate-pulse"></i>
                                <h4 className="fw-bold mb-1">Support Us</h4>
                                <p className="opacity-75 mb-0 small">
                                    Built by Avirup Mukherjee, Dept. of Life Sciences
                                </p>
                            </div>

                            <div className="card-body p-4"> 
                                <div className="text-center mb-4">
                                    <p className="text-muted small">
                                        If this attendance tracker saved you from debarment stress, 
                                        consider <strong>buying me a coffee</strong>! ☕
                                    </p>
                                </div>

                                <ul className="nav nav-pills nav-fill mb-3 gap-2" id="pills-tab" role="tablist" style={{fontSize: '0.9rem'}}>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active rounded-pill fw-bold py-1" id="pills-upi-tab" data-bs-toggle="pill" data-bs-target="#pills-upi" type="button">
                                            <i className="bi bi-qr-code-scan me-2"></i> UPI / QR
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link rounded-pill fw-bold py-1" id="pills-bank-tab" data-bs-toggle="pill" data-bs-target="#pills-bank" type="button">
                                            <i className="bi bi-bank me-2"></i> Bank
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="pills-tabContent">
                                    
                                    {/* --- UPI OPTION --- */}
                                    <div className="tab-pane fade show active text-center" id="pills-upi">
                                        <div className="p-3 bg-light rounded-4 border border-2 border-dashed mb-3">
                                            <img 
                                                src={myQrCode} 
                                                alt="UPI QR Code" 
                                                className="img-fluid rounded shadow-sm"
                                                style={{ maxWidth: '180px' }} 
                                            />
                                            <div className="mt-2 text-muted" style={{fontSize: '0.75rem'}}>
                                                Scan with GPay / PhonePe
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-10 p-2 rounded-3 text-success">
                                            <i className="bi bi-phone-vibrate me-2"></i>
                                            <span className="fw-bold user-select-all small">avirupmukherjee019@oksbi</span>
                                        </div>
                                    </div>

                                    {/* --- BANK OPTION --- */}
                                    <div className="tab-pane fade" id="pills-bank">
                                        <div className="p-3 bg-light rounded-4 border">
                                            <div className="mb-2">
                                                <label className="small text-muted fw-bold" style={{fontSize: '0.7rem'}}>ACCOUNT HOLDER</label>
                                                <div className="fw-bold text-dark small">Avirup Mukherjee</div>
                                            </div>
                                            <div className="mb-2">
                                                <label className="small text-muted fw-bold" style={{fontSize: '0.7rem'}}>ACCOUNT NO</label>
                                                <div className="fw-bold text-primary font-monospace user-select-all">
                                                    4423 6158 701
                                                </div>
                                            </div>
                                            <div className="mb-0">
                                                <label className="small text-muted fw-bold" style={{fontSize: '0.7rem'}}>IFSC</label>
                                                <div className="fw-bold text-dark font-monospace user-select-all small">
                                                    SBIN0000166
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center text-muted" style={{fontSize: '0.7rem'}}>
                                            <i className="bi bi-shield-lock-fill me-1"></i> 
                                            Secure & Private
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="card-footer bg-light p-2 text-center border-0">
                                <small className="text-muted" style={{fontSize: '0.75rem'}}>
                                    Every ₹10 helps keep the server running!
                                </small>
                            </div>
                        </div>

                        {/* ==========================
                           2. WALL OF LOVE (UPDATED)
                           ========================== */}
                        <div className="card border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)' }}>
                            <div className="card-body p-3">
                                <h6 className="fw-bold text-center mb-3 text-muted text-uppercase small letter-spacing-1">
                                    💖 Wall of Love
                                </h6>
                                
                                {donors.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table table-sm table-borderless align-middle mb-0">
                                            <thead className="text-muted small border-bottom">
                                                <tr>
                                                    <th className="fw-normal ps-3">#</th>
                                                    <th className="fw-normal">Student Details</th>
                                                    <th className="fw-normal text-end pe-3">Amt.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {donors.map((donor, index) => (
                                                    <tr key={index}>
                                                        {/* Serial Number */}
                                                        <td className="ps-3 text-muted small">{index + 1}</td>
                                                        
                                                        {/* Name & Details (Stacked) */}
                                                        <td>
                                                            <div className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>{donor.name}</div>
                                                            <div className="text-muted" style={{fontSize: '0.75rem'}}>
                                                                {/* Display Dept and Year together */}
                                                                {donor.dept} <span className="mx-1 opacity-50">•</span> {donor.year}
                                                            </div>
                                                        </td>
                                                        
                                                        {/* Amount */}
                                                        <td className="text-end pe-3">
                                                            <span className="badge bg-success bg-opacity-10 text-success rounded-pill">
                                                                {donor.amount}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center text-muted small py-2">
                                        Be the first to donate! 🌟
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}