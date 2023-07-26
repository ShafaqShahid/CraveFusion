import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#ea8d35',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div className="container mx-auto">
        <p style={{ fontSize: '1rem' }}>
           &copy; {new Date().getFullYear()}. All rights reserved.Developed By Shafaq Shahid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
