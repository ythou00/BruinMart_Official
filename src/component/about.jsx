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
                role="Frontend & Technical Lead / Project Coordinator"
                imgSrc={memberImage1}
                description="Built the website’s core layout and interactive UI components, including the Home and User Guide pages, navigation bar, and footer. 
                Focused on creating a cohesive and responsive user interface that ensured consistency across all pages.
                Acted as the team’s technical lead, guiding implementation, fixing bugs, and supporting others throughout development."
            />
            <MemberCard
                name="Heidi Yu"
                role="Frontend Developer / Editor"
                imgSrc={memberImage2}
                description="Developed the front-end of the message center in React, designing the user interface that enables buyers and sellers to communicate. 
                I integrated the messaging page into the website's navigation and ensured a responsive, user-friendly layout aligned with the overall marketplace design."
            />
            <MemberCard
                name="Paul Kang"
                role="Frontend Developer / UI/UX Designer"
                imgSrc={memberImage4}
                description="Designed and built the Search Page for BruinMart, allowing users to filter and explore listings based on type and price. 
                I focused on creating a clean, user-friendly interface that makes it easy to browse items efficiently."
            />
            <MemberCard
                name="Isaac Lee"
                role="Frontend and Backend Developer"
                imgSrc={memberImage3}
                description="Developed the login and sign up GUI for BruinMart that allows users to create and log into accounts. 
                Also responsible for the current development of BruinMart's backend."
            />
        </div>
        <Footer />
    </>
  );
}