import React, { useState } from 'react';
import Card from '../components/ui/Card.jsx';
import PageTitle from '../components/ui/PageTitle.jsx';
import WelcomeBanner from '../components/ui/WelcomeBanner.jsx';

export default function Home() {
  const rooms = [
    { id: 1, title: 'Deluxe Ocean View', description: 'King bed, balcony, sea view, free Wi-Fi, and breakfast included.', buttonText: 'Book $180/night' },
    { id: 2, title: 'Executive Suite', description: 'Spacious suite with living area, mini bar, and luxury spa access.', buttonText: 'Book $250/night' },
    { id: 3, title: 'Standard Double Room', description: 'Cozy room with two queen beds, modern amenities, and city view.', buttonText: 'Book $110/night' },
    { id: 4, title: 'Presidential Penthouse', description: 'Top floor luxury suite with private terrace and dedicated concierge.', buttonText: 'Book $500/night' },
  ];

  // Exercise 5: input event updates state as the user types
  const [searchTerm, setSearchTerm] = useState('');

  // Exercise 6: conditional rendering based on state
  const filteredRooms = searchTerm
    ? rooms.filter((room) =>
        room.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : rooms;

  // Exercise 4: event handler triggered by a Card's button click
  const handleBook = (roomTitle) => {
    alert(`Booking request sent for: ${roomTitle}`);
  };

  return (
    <div>
      <WelcomeBanner userName="Guest" projectName="Hotel Booking System" />

      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <PageTitle
          title="Find Your Perfect Stay"
          subtitle="Book luxury hotels, resort suites, and cozy rooms at best rates."
        />

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search by room name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: '#fff' }}
          />
          <input type="date" style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: '#fff' }} />
        </div>
      </section>

      <section>
        <h2>Available Accommodations</h2>

        {/* Exercise 6: conditional rendering - no results state */}
        {filteredRooms.length === 0 ? (
          <p>No rooms match "{searchTerm}".</p>
        ) : (
          <div className="card-grid">
            {filteredRooms.map((room) => (
              <Card
                key={room.id}
                title={room.title}
                description={room.description}
                buttonText={room.buttonText}
                onBook={() => handleBook(room.title)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}