import React, { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle.jsx';
import Button from '../../components/ui/Button.jsx';

export default function Dashboard() {
  // Exercise 3: state that changes on interaction
  const [bookingCount, setBookingCount] = useState(0);

  // Exercise 4: event handler updates state (never modify state directly)
  const handleNewBooking = () => {
    setBookingCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <PageTitle
        title="Dashboard"
        subtitle="Manage your bookings and view details."
      />

      <div className="card" style={{ maxWidth: '320px' }}>
        <h3>Total Bookings</h3>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{bookingCount}</p>
        <Button onClick={handleNewBooking}>Add Booking</Button>
      </div>

      {/* Exercise 6: conditional rendering based on state */}
      {bookingCount === 0 ? (
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          No bookings yet. Click "Add Booking" to create one.
        </p>
      ) : (
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          You have {bookingCount} active {bookingCount === 1 ? 'booking' : 'bookings'}.
        </p>
      )}
    </div>
  );
}