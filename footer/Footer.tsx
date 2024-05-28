import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are dedicated to bringing you the latest news with unbiased
            reporting and in-depth analysis.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@newspaper.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Newspaper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
