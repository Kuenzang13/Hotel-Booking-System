import React, { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle.jsx';
import Button from '../../components/ui/Button.jsx';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <PageTitle title="Profile" subtitle="User profile information." />

      {isLoggedIn ? (
        <div>
          <p>Welcome back! Here is your profile information.</p>
          <Button variant="secondary" onClick={() => setIsLoggedIn(false)}>
            Log Out
          </Button>
        </div>
      ) : (
        <div>
          <p>Please log in to view your profile.</p>
          <Button onClick={() => setIsLoggedIn(true)}>Log In</Button>
        </div>
      )}
    </div>
  );
}