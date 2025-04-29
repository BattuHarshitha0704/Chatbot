import React, { useState, useEffect } from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import { Message } from './types';
import { getStaticResponse } from './responses';
import './styles.css';

const FitnessChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to generate unique IDs
  const generateId = () => Math.random().toString(36).substring(2, 11);

  // Load welcome message on mount
  useEffect(() => {
    const welcomeMessage: Message = {
      id: generateId(),
      text: "👋 Hello! I'm your personal fitness and nutrition assistant. I can help with workout plans, nutrition advice, and healthy lifestyle tips. What can I help you with today?",
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages([welcomeMessage]);
  }, []);

  // Handle sending a new message
  const handleSendMessage = (text: string) => {
    // Create and add user message
    const userMessage: Message = {
      id: generateId(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
    
    // Simulate bot thinking time (1-2 seconds)
    setTimeout(() => {
      const botResponse = getStaticResponse(text);
      
      // Add bot response
      const botMessage: Message = {
        id: generateId(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, Math.random() * 1000 + 1000); // Random delay between 1-2 seconds
  };

  return (
    <div className="fitness-chatbot">
      <div className="chatbot-header">
        <h2>Fitness Coach</h2>
        <p className="chatbot-subtitle">Ask me about workouts, nutrition, and healthy habits</p>
      </div>
      
      <ChatHistory messages={messages} />
      
      {isLoading && (
        <div className="typing-indicator">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default FitnessChatbot;