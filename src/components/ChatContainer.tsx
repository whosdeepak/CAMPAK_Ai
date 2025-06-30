import React, { useState, useEffect, useRef } from 'react';
import { Message as MessageType } from '../types/chat';
import { findBestMatch, generateId } from '../utils/chatUtils';
import ChatHeader from './ChatHeader';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: MessageType = {
      id: generateId(),
      text: "Hello! I'm CAMPAK BOT, your Hiranandani Group assistant. I can help you with information about our projects, locations, amenities, and services. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = (text: string) => {
    const userMessage: MessageType = {
      id: generateId(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = findBestMatch(text);
      const botMessage: MessageType = {
        id: generateId(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const showQuickActions = messages.length <= 1;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      <ChatHeader />
      
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <QuickActions 
        onQuestionClick={handleQuestionClick} 
        isVisible={showQuickActions && !isTyping} 
      />
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatContainer;
