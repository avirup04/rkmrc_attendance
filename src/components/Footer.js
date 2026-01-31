import React from 'react';

export default function Footer() {
  return (
    // 'mt-auto' pushes the footer to the bottom if the page content is short
    <footer className="bg-light text-center text-secondary py-3 mt-auto">
      <div className="container">
        <p className="mb-0">
          Copyright &copy; 2026 <strong>Avirup</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}