import React from 'react';
import { Message as MessageType } from '../types/chat';
import { Bot, User } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.isBot;

  return (
    <div className={`flex items-start space-x-3 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isBot 
          ? 'bg-purple-100 text-purple-600' 
          : 'bg-blue-100 text-blue-600'
      }`}>
        {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
      </div>
      
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${isBot ? '' : 'flex flex-col items-end'}`}>
        <div className={`px-4 py-3 rounded-2xl shadow-sm ${
          isBot 
            ? 'bg-gray-100 text-gray-800 rounded-tl-sm' 
            : 'bg-purple-600 text-white rounded-tr-sm'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1 px-2">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default Message;