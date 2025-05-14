// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';

import './heroSection.css'; 
import heroImage from '../assets/dorm_apartment.jpg'; 

export default function HeroSection() {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Furniture" className="hero-image" />
      <div className="hero-text">
        <h2>Welcome to BruinMart</h2>
        <h1>A 24 Hour<br />Student Furniture Marketplace</h1>
        <Link to="/marketplace" className="shop-button">Shop Now ⟶</Link>
      </div>
      <div className="image-credit">
        Image Credit:{' '}
        <a
            href="https://newsroom.ucla.edu/stories/new-apartments-for-students-fall-2022"
            target="_blank"
            rel="noopener noreferrer"
        >
            UCLA Newsroom
        </a>
      </div>
    </div>
  );
}