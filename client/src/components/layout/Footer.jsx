import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-auto border-t border-gray-800">
      <p>&copy; {currentYear} AAD Project. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;