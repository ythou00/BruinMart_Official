import React from 'react';
import './footer.css'; // create this next
import logoImage from '../assets/react.svg'

export default function Footer() {
  return (
    <section className="end-hero-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logoImage} alt="BruinMart logo" className="footer-logo" />
          <h2 className='logo-title'>BruinMart</h2>
        </div>
        <div className="footer-right">
          <h3 className='subtitle'>Subscribe to our newsletter</h3>
          <p className='email-detail'>Join our community to get weekly updates and new sales alert!</p>
          <input type="email" placeholder="Email address" className="email-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <p className="footer-credit">
        ©2025 Yu-Ting Hou | Heidi Yu | Paul Kang | Isaac Lee | All Rights Reserved
      </p>
    </section>
  );
}
