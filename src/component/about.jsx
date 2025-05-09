import React from 'react';
import MemberCard from './memberCard';
import './about.css';
import TeenImage from '../assets/couch.jpg'


export default function About() {
  return (
    <div className="about-page">
      <h1>Our Team</h1>
      <MemberCard
        name="Grace Park"
        role="CEO"
        imageSrc={TeenImage}
        description="Grace leads the company with a vision of innovation and community-driven solutions."
      />
      <MemberCard
        name="Luis Reyes"
        role="CTO"
        imageSrc={TeenImage}
        description="Luis architects our technology and ensures smooth, scalable systems."
      />
      <MemberCard
        name="Dr. Erika Page"
        role="Chief DEIB & Workforce Advisor"
        imageSrc={TeenImage}
        description="Dr. Page guides us on inclusive practices and workforce development."
      />
    </div>
  );
}