import React from 'react';

const MessageThread = ({ name, profileImage, location, lastMessage, onClick }) => {
  return (
    <div className="message-thread" onClick={onClick}>
      <img src={profileImage} alt={name} className="profile-img" />
      <div className="message-info">
        <h3>{name}</h3>
        <p>{lastMessage}</p>
        <div className="location">📍 {location}</div>
      </div>
    </div>
  );
};

export default MessageThread;
