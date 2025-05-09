import React from 'react';
import './sellGuide.css';
import Footer from './footer';
import { MdAccountCircle, MdNotificationsActive, MdSell, MdLiveHelp } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { PiSealCheckFill } from "react-icons/pi";


export default function SellGuide() {
  return (
    <>
      <div className="sell-guide-container">
        <h1 className="sell-guide-title">How to Sell on BruinMart</h1>
        <p className="sell-guide-subtitle">For Bruins, by Bruins — Get started in minutes</p>

        <div className="sell-guide-step">
          <div className="step-header">
            <h2>1. Log In or Sign Up</h2>
            <MdAccountCircle className="help-icon" />
          </div>
          <p>
            Start by logging in using your UCLA email or with Google. Only users with <strong>@ucla.edu</strong> or <strong>@g.ucla.edu</strong> domains will be accepted.
            This ensures our platform stays safe and exclusive to current students and alumni.
          </p>
        </div>

        <div className="sell-guide-step">
          <div className="step-header">
            <h2>2. Select Your Status</h2>
            <BiSolidUserDetail className="help-icon"/>
          </div>
          <p>
            Once verified, you’ll be asked to choose whether you're a <strong>current student</strong> or <strong>alumni</strong>.
            Your selection will be shown on your profile as a tag and help buyers connect with the right users.
          </p>
        </div>

        <div className="sell-guide-step">
          <div className="step-header">
            <h2>3. Set Up Your Profile</h2>
            <PiSealCheckFill className="help-icon"/>
          </div>
          <p>
            New users must complete their profile before posting items. Choose what you’re interested in buying, 
            and fill out a few preferences like meeting location and item categories.
          </p>
        </div>

        <div className="sell-guide-step">
          <div className="step-header">
            <h2>4. List Your First Item</h2>
            <MdSell className="help-icon"/>
          </div>
          <p>
            Head to the <strong>Marketplace</strong> and click the <strong>➕ (Add)</strong> icon to create a post.
            Upload clear images, describe the item accurately, choose a category and price, and you’re done!
          </p>
        </div>

        <div className="sell-guide-step">
          <div className="step-header">
            <h2>5. You're Live!</h2>
            <MdNotificationsActive className="help-icon"/>
          </div>
          <p>
            Your post will now be visible to Bruins. Keep an eye on your <strong>Inbox</strong> for messages and coordinate safe meetups.
          </p>
        </div>

        <div className="sell-guide-step">
          <div className="step-header">
            <h2>Need Help?</h2>
            <MdLiveHelp className="help-icon"/>
          </div>
          <p>
            Reach out to us through our contact form or check the FAQ section (coming soon).
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}