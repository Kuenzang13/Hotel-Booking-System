import React from 'react';

export default function WelcomeBanner({ userName, projectName }) {
  return (
    <div className="welcome-banner">
      <h2>Welcome back, {userName}!</h2>
      <p>You're viewing <strong>{projectName}</strong></p>
    </div>
  );
}