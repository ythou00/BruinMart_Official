import React, { useState } from 'react';
import './sellGuide.css';
import Footer from './footer';
import { MdAccountCircle, MdNotificationsActive, MdSell, MdLiveHelp, MdRateReview } from "react-icons/md";
import { BiSolidUserDetail, BiSolidMessageRoundedDetail } from "react-icons/bi";
import { PiSealCheckFill } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import { IoMdArchive } from "react-icons/io";
import { RiCalendarScheduleFill } from "react-icons/ri";

export default function SellGuide() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <>
      <div className="sell-guide-container">
        <div className="tab-header">
          <button className={activeTab === 'buy' ? 'tab active' : 'tab'} onClick={() => setActiveTab('buy')}>How to Buy</button>
          <button className={activeTab === 'sell' ? 'tab active' : 'tab'} onClick={() => setActiveTab('sell')}>How to Sell</button>
        </div>

        {activeTab === 'sell' && (
          <>
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
                New users must complete their profile before posting items. Choose what you’re interested in buying 
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
          </>
        )}

        {activeTab === 'buy' && (
          <>
            <h1 className="sell-guide-title">How to Buy on BruinMart</h1>
            <p className="sell-guide-subtitle">Find what you need, connect, and make it yours!</p>
            
            <div className="sell-guide-step">
              <div className="step-header">
                <h2>1. Explore Listings</h2>
                <ImSearch  className="help-icon"/>
                </div>
              <p>Browse the Marketplace to find furniture, clothing, and more posted by fellow Bruins. Use filters to narrow by category or price.</p>
            </div>

            <div className="sell-guide-step">
              <div className="step-header"><h2>2. Save Your Favorites</h2><IoMdArchive className="help-icon"/></div>
              <p>If you find an item you like, click the save icon to bookmark it for later. Your saved items will be accessible from your profile.</p>
            </div>

            <div className="sell-guide-step">
              <div className="step-header"><h2>3. Message the Seller</h2><BiSolidMessageRoundedDetail className="help-icon"/></div>
              <p>Reach out to sellers through secure in-app messaging. Discuss pickup location, timing, and any questions about the item.</p>
            </div>

            <div className="sell-guide-step">
              <div className="step-header"><h2>4. Coordinate a Meetup</h2><RiCalendarScheduleFill className="help-icon"/></div>
              <p>Arrange a safe meetup location on campus or nearby. Suggested spots include Ackerman Union or public areas with good lighting.</p>
            </div>

            <div className="sell-guide-step">
              <div className="step-header"><h2>5. Leave a Review</h2><MdRateReview className="help-icon"/></div>
              <p>After the transaction, leave a review for the seller to help build trust in the community.</p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}