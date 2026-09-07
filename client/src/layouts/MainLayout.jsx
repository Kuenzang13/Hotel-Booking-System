import React from 'react';
import Navbar from '../components/layout/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer>
        © 2026 Hotel Booking System. All Rights Reserved.
      </footer>
    </div>
  );
}