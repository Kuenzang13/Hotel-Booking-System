import React from 'react';

const Card = ({ title, description, children, className = '' }) => {
  return (
    <div className={`border rounded-lg p-6 shadow-sm bg-white ${className}`}>
      {title && <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;