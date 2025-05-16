// src/pages/Profile.jsx
import React from 'react';
import { getUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // You can create this for styling

function Profile() {
  const user = getUser();
  const navigate = useNavigate();

  if (!user) {
    return <div>You are not logged in. Please <button onClick={() => navigate("/login")}>login</button>.</div>;
  }

  return (
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
    </div>
  );
}

export default Profile;