import React from 'react';
import './ChatSidebar.css';

const chats = [
  { id: 1, name: 'Marcus Dias', message: 'YOU: Thank you! Good luck.', time: '45 min',  avatar: './ChatSidebar_img/Avatar1.png' },
  { id: 2, name: 'Alena Curtis', message: "Alright. I'll call you back.", time: '2 min',unread: true, avatar: './ChatSidebar_img/Avatar2.png' },
  { id: 3, name: 'Abram Lipshutz', message: 'Looking forward to your conf...', time: '3 h', avatar: './ChatSidebar_img/Avatar3.png' },
  { id: 4, name: 'Hanna Bergson', message: 'Thanks for the offer!', time: '3 h', unread: true,avatar: './ChatSidebar_img/Avatar4.png' },
  { id: 5, name: 'Carla Herwitz', message: 'YOU: Thank you for your feed...', time: '20 h', avatar: './ChatSidebar_img/Avatar5.png' },
  { id: 6, name: 'Skylar Carder', message: 'YOU: Let me know if there’s a...', time: '1 d', avatar: './ChatSidebar_img/Avatar6.png' },
  { id: 7, name: 'Leo George', message: 'Looking forward to discussin...', time: '6 d', unread: true,avatar: './ChatSidebar_img/Avatar7.png' },
  { id: 8, name: 'Miracle Lipshutz', message: "Thanks for the meeting, we’ll ...", time: '1 w',unread: true, avatar: './ChatSidebar_img/Avatar8.png' },
  { id: 9, name: 'Ahmad Vaccaro', message: 'I’ll wait for your go-ahead bef...', time: '1 y', unread: true,avatar: './ChatSidebar_img/Avatar9.png' },
];

function ChatSidebar() {
  return (
    <div className="chat-sidebar">
      <div className="chat-tabs">
        <span className="active-tab">
          Chats
          <img src="./ChatSidebar_img/Frame.png" alt="chat" className="tab-icon" />
        </span>
        <span className="archived-tab">Archived</span>
      </div>
      <div className="chat-search">
        <div className="input-wrapper">
          <input type="text" placeholder="Search" />
          <img src="./ChatSidebar_img/search.png" alt="search" className="input-icon" />
        </div>
      </div>
      <ul className="chat-list">
        {chats.map((chat) => (
          <li key={chat.id} className={`chat-item ${chat.active ? 'active' : ''}`}>
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="avatar" />
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-msg">
                {chat.message.startsWith('YOU:') ? (
                  <>
                    <span className="you-label">YOU:</span>
                    <span className="you-text">{chat.message.slice(4)}</span>
                  </>
                ) : (
                  chat.message
                )}
              </div>
            </div>
            <div className="chat-meta">
              <div className="chat-time">{chat.time}</div>
              {chat.unread && <div className="unread-dot"></div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatSidebar;
