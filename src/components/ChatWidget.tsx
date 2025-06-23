import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatContainer from './ChatContainer';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Chat Widget Container */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative h-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <ChatContainer />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;