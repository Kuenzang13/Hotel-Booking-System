import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">AAD App</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}