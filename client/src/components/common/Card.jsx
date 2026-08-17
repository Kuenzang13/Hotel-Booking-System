import React from 'react';

export default function Card({ title, content }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px', margin: '0.5rem 0' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}