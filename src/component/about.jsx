import React from 'react';
import MemberCard from './memberCard';
import './about.css';
import moveInImage from '../assets/bruin-move-in.jpg'
import memberImage1 from '../assets/ythou.jpg'
import Footer from './footer'


export default function About() {
  return (
    <>
        <div className="about-page">
            <div className="about-purpose">
                <div className="purpose-text">
                    <h2>Our Purpose</h2>
                    <p>
                    BruinMart was built by UCLA students, for UCLA students to simplify buying and selling within 
                    our community while keeping it secure and reliable.
                    </p>
                    <p>
                    As students, we know how difficult it can be to find affordable furniture, textbooks, or
                    everyday essentials, especially with the presence of untrustworthy sellers and inflated prices. 
                    Public platforms often feel risky, leaving you guessing about who’s on the other side of a transaction.
                    </p>
                    <p>
                    That’s why we created BruinMart: a platform exclusively for UCLA students and alumni, where
                    every user is verified,  every transaction is protected, and every exchange is designed to give you peace of mind. 
                    No scams, no sketchy meetups—just Bruins helping Bruins.
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
                imgSrc={moveInImage}
                description="Developed the front-end of the message center in React, designing the user interface that enables buyers and sellers to communicate. 
                She integrated the messaging page into the website's navigation and ensured a responsive, user-friendly layout aligned with the overall marketplace design."
            />
            <MemberCard
                name="Paul Kang"
                role="Chief DEIB & Workforce Advisor"
                imgSrc={moveInImage}
                description="Paul guides us on inclusive practices and workforce development."
            />
            <MemberCard
                name="Isaac Lee"
                role="Chief DEIB & Workforce Advisor"
                imgSrc={moveInImage}
                description="Isaac guides us on inclusive practices and workforce development."
            />
        </div>
        <Footer />
    </>
  );
}