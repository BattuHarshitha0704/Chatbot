import React from 'react';
import { ChatMessageProps } from './types';
import './styles.css';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, sender, timestamp } = message;
  const isBot = sender === 'bot';
  
  return (
    <div className={`chat-message ${isBot ? 'bot-message' : 'user-message'}`}>
      <div className="message-bubble">
        {isBot && (
          <div className="avatar">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="bot-avatar"
            >
              <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
              <path d="M12 6V4" />
              <path d="M12 18v2" />
              <path d="M8 6V4" />
              <path d="M8 18v2" />
              <path d="M18 12h2" />
              <circle cx="18" cy="12" r="4" />
            </svg>
          </div>
        )}
        <div className="message-content">
          <p>{text}</p>
          <span className="message-time">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;