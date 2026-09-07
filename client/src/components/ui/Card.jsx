import React from 'react';
import Button from './Button.jsx';

export default function Card({ title, description, buttonText, onBook }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ margin: '0.75rem 0 1.25rem', color: 'var(--text-muted)' }}>
        {description}
      </p>
      {buttonText && <Button onClick={onBook}>{buttonText}</Button>}
    </div>
  );
}