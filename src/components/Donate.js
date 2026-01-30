import React from 'react';

export default function Donate() {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
            // FIX: Subtract the 80px padding from App.js so it fits perfectly
            height: 'calc(100vh - 80px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'          // FIX: Force stop scrolling
        }}>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                            <div className="card-header border-0 p-4 text-center text-white"
                                style={{ background: 'linear-gradient(to right, #11998e, #38ef7d)' }}>
                                <i className="bi bi-heart-fill display-4 mb-2 animate-pulse"></i>
                                <h4 className="fw-bold mb-1">Support Us</h4>
                                <p className="opacity-75 mb-0 small">
                                    Built by Avirup Mukherjee (Dept. of Life Sciences)
                                </p>
                            </div>

                            <div className="card-body p-4">
                                <div className="text-center mb-4">
                                    <p className="text-muted small">
                                        Hi! I built this attendance tracker to help us all stay safe from debarment. If this app saved you some stress, consider
                                        <strong> buying me a coffee</strong> to fuel the next update!☕
                                    </p>
                                </div>

                                <ul className="nav nav-pills nav-fill mb-3 gap-2" id="pills-tab" role="tablist" style={{ fontSize: '0.9rem' }}>
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
                                            {/* REPLACE WITH YOUR QR CODE IMAGE */}
                                            <img
                                                src="https://via.placeholder.com/200?text=QR+Code"
                                                alt="UPI QR Code"
                                                className="img-fluid rounded shadow-sm"
                                                style={{ maxWidth: '150px' }}
                                            />
                                            <div className="mt-2 text-muted" style={{ fontSize: '0.75rem' }}>
                                                Scan with GPay / PhonePe
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-10 p-2 rounded-3 text-success">
                                            <i className="bi bi-phone-vibrate me-2"></i>
                                            <span className="fw-bold user-select-all small">avirup@okicici</span>
                                        </div>
                                    </div>

                                    {/* --- BANK OPTION --- */}
                                    <div className="tab-pane fade" id="pills-bank">
                                        <div className="p-3 bg-light rounded-4 border">
                                            <div className="mb-2">
                                                <label className="small text-muted fw-bold" style={{ fontSize: '0.7rem' }}>ACCOUNT HOLDER</label>
                                                <div className="fw-bold text-dark small">Avirup Mukherjee</div>
                                            </div>
                                            <div className="mb-2">
                                                <label className="small text-muted fw-bold" style={{ fontSize: '0.7rem' }}>ACCOUNT NO</label>
                                                <div className="fw-bold text-primary font-monospace user-select-all">
                                                    1234 5678 9012
                                                </div>
                                            </div>
                                            <div className="mb-0">
                                                <label className="small text-muted fw-bold" style={{ fontSize: '0.7rem' }}>IFSC</label>
                                                <div className="fw-bold text-dark font-monospace user-select-all small">
                                                    SBIN0001234
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center text-muted" style={{ fontSize: '0.7rem' }}>
                                            <i className="bi bi-shield-lock-fill me-1"></i>
                                            Secure & Private
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="card-footer bg-light p-2 text-center border-0">
                                <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                                    Every 10 helps keep the server running!
                                </small>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}