import React from 'react';
import './footer.css'; // create this next

export default function Footer() {
  return (
    <section className="end-hero-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/favicon.ico" alt="BruinMart logo" className="footer-logo" />
          <h3>BruinMart</h3>
        </div>
        <div className="footer-right">
          <h4>Subscribe to our newsletter</h4>
          <p>Join our community to get weekly updates and unique gifts every Friday</p>
          <input type="email" placeholder="Email address" className="email-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <p className="footer-credit">
        ©2025 NAME 1 | Name 2 | Name 3 | Name 4 | All Rights Reserved
      </p>
    </section>
  );
}
