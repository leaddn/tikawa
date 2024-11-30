import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#6f4e37', padding: '1rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', color: 'white' }}>
        <li><img src="/assets/images/logo.jpg" alt="Tikawa Coffee" /></li>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about-us" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
        <li><Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>Menu</Link></li>
        <li><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></li>
        <li><Link to="/review" style={{ color: 'white', textDecoration: 'none' }}>Reviews</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
