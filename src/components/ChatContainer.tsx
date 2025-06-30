import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';
import { Message as MessageType } from '../types/chat';
import { generateId } from '../utils/chatUtils';

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
    const welcomeMessage: MessageType = {
      id: generateId(),
      text: "Hello! I'm CAMPAK BOT, your Hiranandani Group assistant. Ask me anything about our projects, locations, amenities, or services!",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = async (text: string) => {
    const userMessage: MessageType = {
      id: generateId(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for Hiranandani Group.' },
            { role: 'user', content: text }
          ],
          temperature: 0.7
        }),
      });

      const data = await response.json();
      const botText = data.choices?.[0]?.message?.content || "Sorry, I couldn't find an answer.";

      const botMessage: MessageType = {
        id: generateId(),
        text: botText.trim(),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('OpenAI API error:', error);
      const botMessage: MessageType = {
        id: generateId(),
        text: "Oops! There was an error getting the response. Please try again.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
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
      <QuickActions onQuestionClick={handleQuestionClick} isVisible={showQuickActions && !isTyping} />
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatContainer;
