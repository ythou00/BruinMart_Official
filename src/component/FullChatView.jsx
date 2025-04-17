// components/FullChatView.jsx
import React from 'react';

const FullChatView = ({ thread, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>← Back to Threads</button>
      <h2>{thread.name}</h2>
      <p>📍 {thread.location}</p>
      <div className="chat-box">
        <p><strong>{thread.name}:</strong> {thread.lastMessage}</p>
        <p><strong>You:</strong> Sure! When are you free?</p>
      </div>
    </div>
  );
};

export default FullChatView;
