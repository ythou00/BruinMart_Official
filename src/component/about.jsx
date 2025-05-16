import React from 'react';
import MemberCard from './memberCard';
import './about.css';
import moveInImage from '../assets/bruin-move-in.jpg'
import memberImage1 from '../assets/ythou.jpg'
import memberImage2 from '../assets/heidi-image.jpg'
import memberImage3 from '../assets/isaac-image.png'
import memberImage4 from '../assets/paul-image.jpg'
import Footer from './footer'


export default function About() {
  return (
    <>
        <div className="about-page">
            <div className="about-purpose">
                <div className="purpose-text">
                    <h2>Our Purpose</h2>
                    <p>
                    BruinMart was created by Bruins, for Bruins — to make buying and selling within the UCLA
                    community safe, seamless, and scam-free.
                    </p>
                    <p>
                    As students ourselves, we saw firsthand how difficult it was to find affordable, trustworthy
                    items without resorting to risky public platforms. From overpriced furniture to sketchy
                    meetups, the experience was far from ideal.
                    </p>
                    <p>
                    That’s why we built BruinMart: a platform exclusively for UCLA students and alumni, where
                    every profile is verified, every transaction is designed for safety, and every exchange
                    happens with confidence.
                    </p>
                </div>
                <div className="image-wrapper">
                    <img
                        src={moveInImage}
                        alt="UCLA Students collaborating"
                        className="purpose-image"
                    />
                    <div className="image-credit-about">
                        Image Credit:{' '}
                        <a
                        href="https://newsroom.ucla.edu/releases/welcome-to-the-new-year-bruins"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        UCLA Newsroom
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="team-title">Our Team</h1>
            <MemberCard
                name="Yu-Ting Hou"
                role="CTO"
                imgSrc={memberImage1}
                description="YT leads the company with a vision of innovation and community-driven solutions."
            />
            <MemberCard
                name="Heidi Yu"
                role="CTO"
                imgSrc={memberImage2}
                description="Heidi architects our technology and ensures smooth, scalable systems."
            />
            <MemberCard
                name="Paul Kang"
                role="Chief DEIB & Workforce Advisor"
                imgSrc={memberImage4}
                description="Paul guides us on inclusive practices and workforce development."
            />
            <MemberCard
                name="Isaac Lee"
                role="Chief DEIB & Workforce Advisor"
                imgSrc={memberImage3}
                description="Isaac guides us on inclusive practices and workforce development."
            />
        </div>
        <Footer />
    </>
  );
}