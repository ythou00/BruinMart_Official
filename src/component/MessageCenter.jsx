import React, { useState } from 'react';
import { FiChevronLeft, FiSearch, FiMoreVertical, FiHeart } from 'react-icons/fi';
import './MessageCenter.css';
import Footer from './footer'

const dummyMessages = [
  {
    id: 1,
    name: "Jane Cooper",
    profileImage: "/profile1.jpg",
    time: "2h",
    unread: true,
    messages: [
      { from: "buyer", text: "Hey! Is the chair still available? Been looking everywhere 👀", time: "4:32 PM" },
    ]
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    profileImage: "/profile2.jpg",
    time: "1d",
    unread: false,
    messages: [
      { from: "buyer", text: "Would you do $40 for the mini fridge?", time: "3:20 PM" },
      { from: "seller", text: "Hmm I was hoping for $50 but I can do $45 if you're able to pick up this week!", time: "3:22 PM" }
    ]
  },
  {
    id: 3,
    name: "Guy Hawkins",
    profileImage: "/profile3.jpg",
    time: "3d",
    unread: false,
    messages: [
      { from: "buyer", text: "Cool, I’ll meet you outside Hedrick at 5pm!", time: "1:09 PM" },
      { from: "seller", text: "Awesome, I’ll be wearing a blue hoodie and carrying the speaker box 📦", time: "1:10 PM" }
    ]
  },
];

const MessageCenter = () => {
  const [selectedThread, setSelectedThread] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <> 
      <div className="instagram-dm-container">
        {!selectedThread ? (
          <div className="dm-inbox">
            <div className="dm-header">
              <h2>Messages</h2>
            </div>

            <div className="dm-search">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="dm-threads">
              {dummyMessages
                .filter(thread =>
                  thread.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(thread => (
                <div 
                  key={thread.id} 
                  className={`dm-thread ${thread.unread ? 'unread' : ''}`}
                  onClick={() => setSelectedThread(thread)}
                >
                  <div className="thread-left">
                    <img src={thread.profileImage} alt={thread.name} className="dm-profile-img" />
                    <div className="thread-info">
                      <span className="thread-name">{thread.name}</span>
                      <span className="thread-preview">
                        {thread.messages[thread.messages.length - 1].text}
                      </span>
                    </div>
                  </div>
                  <div className="thread-right">
                    <span className="thread-time">{thread.time}</span>
                    {thread.unread && <div className="unread-badge"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="dm-chat">
            <div className="chat-header">
              <FiChevronLeft 
                className="back-icon" 
                onClick={() => setSelectedThread(null)} 
              />
              <div className="chat-user">
                <img src={selectedThread.profileImage} alt={selectedThread.name} className="chat-profile-img" />
                <span>{selectedThread.name}</span>
              </div>
              <FiMoreVertical className="header-icon" />
            </div>

            <div className="chat-messages">
              <div className="message-date">Today</div>

              {selectedThread.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.from === "buyer" ? "received" : "sent"}`}
                >
                  <p>{msg.text}</p>
                  <span className="message-time">
                    {msg.time} {msg.from === "seller" && <span className="read-receipt">✓✓</span>}
                  </span>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input type="text" placeholder="Message..." />
              <div className="input-actions">
                <button className="send-button">Send</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MessageCenter;
