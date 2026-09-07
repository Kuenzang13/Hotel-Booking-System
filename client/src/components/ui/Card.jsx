import React from 'react';

export default function Card({ title, description, buttonText }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ margin: '0.75rem 0 1.25rem', color: 'var(--text-muted)' }}>
        {description}
      </p>
      {buttonText && <button>{buttonText}</button>}
    </div>
  );
}