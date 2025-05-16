import React from 'react';
import { getUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import ItemCard from "./itemCard"; // assuming this is shared
import './profile.css';
import Footer from './footer';
import { VscAccount } from "react-icons/vsc";

import studyDeskImage from '../assets/studydesk.jpg';
import deskshelfImage from '../assets/deskshelf.jpg';

function Profile() {
  const user = getUser();
  const navigate = useNavigate();

  if (!user) {
    return <div>You are not logged in. Please <button onClick={() => navigate("/login")}>login</button>.</div>;
  }

  return (
    <>
        <div className="profile-page">
            <div className="profile-card">
                <img src={user.avatar} alt="avatar" className="profile-avatar" />
                <h2>{user.firstName} {user.lastName}</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Major:</strong> {user.major}</p>
                <p><strong>Class of:</strong> {user.classYear}</p>
                <p><strong>Gender:</strong> {user.gender}</p>

                <button className="logout-btn" 
                onClick={() => {
                logoutUser();
                window.dispatchEvent(new Event("storage")); // manually trigger update
                navigate("/login");
                }}>
                Logout
                </button>
            </div>

            {/* RIGHT: Username + Posts */}
            <div className="profile-right-section">
                <h1 className="profile-username">@{user.username}</h1>
                <h2 className="profile-history-header">Post History</h2>
                <div className="pfp-item-card">
                <ItemCard
                    imgSrc={studyDeskImage}
                    imgAlt="Desk"
                    title="Study Desk"
                    detail="Used - Great condition"
                    buttonText="Learn More"
                    link="/sell-guide"
                />
                <ItemCard
                    imgSrc={deskshelfImage}
                    imgAlt="Shelf"
                    title="Desk Shelf"
                    detail="Like new, from Target"
                    buttonText="Learn More"
                    link="/sell-guide"
                />
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Profile;