import React, { useState } from 'react';
import MessageThread from './MessageThread';
import FullChatView from './FullChatView'; // make sure this file exists!

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
];

const MessageCenter = () => {
  const [selectedThread, setSelectedThread] = useState(null);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1 style={{ textAlign: 'center' }}>Message Center</h1>
      {!selectedThread ? (
        dummyMessages.map(thread => (
          <MessageThread
            key={thread.id}
            {...thread}
            onClick={() => setSelectedThread(thread)}
          />
        ))
      ) : (
        <FullChatView
          thread={selectedThread}
          onBack={() => setSelectedThread(null)}
        />
      )}
    </div>
  );
};

export default MessageCenter;
