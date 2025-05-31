import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import HeroSection from './heroSection'; // make sure the path is correct
import ItemCard from "./itemCard";
import deskClockImage from '../assets/deskclock.jpg';
import deskshelfImage from '../assets/deskshelf.jpg';
import studyDeskImage from '../assets/studydesk.jpg';
import teamImage from '../assets/team.jpg';
import logoImage from '../assets/logo.png';
import Footer from './footer';


export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="our-statement">
        <h1>What We Do</h1>
        <p>
          <strong>Our Focus:</strong> To create a safe, efficient, and community-driven marketplace platform for UCLA students. 
          We prioritize safety, affordability, and convenience, making it easier for students to buy and sell items with confidence.
          Our platform streamlines secure transactions, verifies every user, and promotes campus-based exchanges, so you never have to worry about scams or unreliable sellers.  
          We aim to be the go-to place for all student-to-student exchanges, making transactions trustworthy, budget-friendly, and seamless.
        </p>
      </section>

      <section className="popular-collection">
        <h2>Popular Collection</h2>
        <div className="card-grid">
          <ItemCard
            imgSrc={deskClockImage}
            imgAlt="Card Image"
            title="Desk Clock"
            // detail="good for daily use"
            detail={[
              "Affordable desk clock",
              "Easy to set up",
              "Perfect for dorms"
            ]}
            buttonText="Learn More"
            link="/sell-guide"
          />

          <ItemCard 
            imgSrc={deskshelfImage}
            imgAlt="Card Image"
            title="Desk Shelf"
            // detail="good for daily use"
            detail={[
              "Affordable desk clock",
              "Easy to set up",
              "Perfect for dorms"
            ]}
            buttonText="Learn More"
            link="/sell-guide"
          />

          <ItemCard 
            imgSrc={studyDeskImage}
            imgAlt="Card Image"
            title="Study Desk"
            // detail="good for daily use"
            detail={[
              "Affordable desk clock",
              "Easy to set up",
              "Perfect for dorms"
            ]}
            buttonText="Learn More"
            link="/sell-guide"
          />

          <ItemCard
            imgSrc={logoImage}
            imgAlt="How to sell"
            title="Ready to Sell?"
            detail="Wondering how to sell your furniture? Learn in a few easy steps."
            buttonText="Learn to Sell"
            link="/sell-guide"
          />

        </div>
        
      </section>
      <section className="about-section">
        <div className="about-card">
          <img src={teamImage} alt="About us" className="about-image" />
          <div className="about-text">
            <div className="about-text-inner">
              <h2>Move Out. Cash In. Move In. Save Big.</h2>
              <p className="quote-mark">“</p>
              <p className="us-detail">We’re a student-run marketplace created by Bruins, for Bruins. Whether you're moving out or settling in, 
                our goal is to help UCLA students buy and sell furniture and essentials easily, 
                affordably, and securely. Say goodbye to overpriced furniture and sketchy meetups—our 
                platform is built for safe, verified, on-campus exchanges that work around the student lifestyle.
              </p>
              <div className="quote-footer">
                <Link to="/about-us" className="about-button">About Us</Link>
                <p className="quote-mark quote-end">”</p>
              </div>
            </div>
          </div>
          <div className="bg-block block1"></div>
          <div className="bg-block block2"></div>
        </div>
      </section>

      <section className='footer'>
        <Footer />
      </section>      


    </div>
  );
}