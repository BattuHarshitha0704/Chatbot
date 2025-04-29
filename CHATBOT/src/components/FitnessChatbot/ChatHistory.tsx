import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { ChatHistoryProps } from './types';
import './styles.css';

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  return (
    <div className="chat-history">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      {/* Empty div for scroll reference */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;