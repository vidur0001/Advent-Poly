// Footer.jsx

// import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contactus">Contact</a></li>
            <li><a href="/consultancy">Consultancy</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Privacy Policy</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
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
