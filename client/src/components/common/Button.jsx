import React from 'react';

export default function Button({ text = 'Click Me' }) {
  return <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>{text}</button>;
}