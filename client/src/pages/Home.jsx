import React from 'react';
import Card from '../../components/ui/Card.jsx';

export default function Home() {
  const rooms = [
    { id: 1, title: 'Deluxe Ocean View', description: 'King bed, balcony, sea view, free Wi-Fi, and breakfast included.', buttonText: 'Book $180/night' },
    { id: 2, title: 'Executive Suite', description: 'Spacious suite with living area, mini bar, and luxury spa access.', buttonText: 'Book $250/night' },
    { id: 3, title: 'Standard Double Room', description: 'Cozy room with two queen beds, modern amenities, and city view.', buttonText: 'Book $110/night' },
    { id: 4, title: 'Presidential Penthouse', description: 'Top floor luxury suite with private terrace and dedicated concierge.', buttonText: 'Book $500/night' },
  ];

  return (
    <div>
      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1>Find Your Perfect Stay</h1>
        <p>Book luxury hotels, resort suites, and cozy rooms at best rates.</p>
        
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <input type="text" placeholder="Destination (e.g. Paris)" style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: '#fff' }} />
          <input type="date" style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: '#fff' }} />
          <button className="btn">Search Hotels</button>
        </div>
      </section>

      <section>
        <h2>Available Accommodations</h2>
        <div className="card-grid">
          {rooms.map((room) => (
            <Card 
              key={room.id} 
              title={room.title} 
              description={room.description} 
              buttonText={room.buttonText} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}