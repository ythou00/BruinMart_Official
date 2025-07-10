import React from 'react';
import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { logoutUser, getUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import ItemCard from "./itemCard"; // assuming this is shared
import './profile.css';
import Footer from './footer';
import { VscAccount } from "react-icons/vsc";

import studyDeskImage from '../assets/studydesk.jpg';
import deskshelfImage from '../assets/deskshelf.jpg';

function Profile() {
  const user = getUser();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmDelete) return;

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      const userData = getUser();

      if (currentUser && userData) {
        // 1. Delete user profile from Firestore
        await deleteDoc(doc(db, "users", currentUser.uid));

        // 2. Delete the Firebase Auth user
        await deleteUser(currentUser);

        // 3. Log out from app
        logoutUser();
        window.dispatchEvent(new Event("storage"));
        alert("Account deleted successfully.");
        navigate("/");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete account. You may need to re-login before deleting.");
    }
  };

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

                <div className="profile-btn-group">
                  <button className="logout-btn" 
                  onClick={() => {
                  logoutUser();
                  window.dispatchEvent(new Event("storage")); // manually trigger update
                  navigate("/login");
                  }}>
                    Logout
                  </button>

                  <button className="delete-btn" onClick={handleDeleteAccount}>
                    Delete Account
                  </button>
                </div>
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