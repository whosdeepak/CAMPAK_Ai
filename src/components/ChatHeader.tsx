import React from 'react';
import { Circle } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-2xl">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
            <img 
              src="/images.jpg" 
              alt="CAMPAK BOT Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="absolute -bottom-1 -right-1">
            <Circle className="w-4 h-4 text-green-400 fill-current" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">CAMPAK BOT</h1>
          <p className="text-purple-100 text-sm">Your Smart AI Companion</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;