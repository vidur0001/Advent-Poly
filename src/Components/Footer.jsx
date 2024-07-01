// Footer.jsx

// import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Privacy Policy</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:adventpoly5@gmail.com">adventpoly5@gmail.com</a></p>
          <p>Address: Icon Tower, Sector 135, Noida</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Disclaimer: This website is for demonstration purposes only.</p>
      </div>
    </footer>
  );
}

export default Footer;
