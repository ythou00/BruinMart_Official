import React, { useState } from 'react';
import MessageThread from './MessageThread';

const dummyMessages = [
  {
    id: 1,
    name: "Jane Cooper",
    profileImage: "/profile1.jpg",
    location: "Westwood, Los Angeles",
    lastMessage: "Hey! Is the chair still available?",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    profileImage: "/profile2.jpg",
    location: "Westwood, Los Angeles",
    lastMessage: "Can you do pickup this weekend?",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    profileImage: "/profile3.jpg",
    location: "Westwood, Los Angeles",
    lastMessage: "Sounds good, let's meet at 4pm.",
  },
  // Add more...
];

const MessageCenter = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1 style={{ textAlign: 'center' }}>Message Center</h1>
      {dummyMessages.map(thread => (
        <MessageThread
          key={thread.id}
          name={thread.name}
          profileImage={thread.profileImage}
          location={thread.location}
          lastMessage={thread.lastMessage}
        />
      ))}
    </div>
  );
};

export default MessageCenter;
