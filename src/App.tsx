import React from 'react';
import ChatContainer from './components/ChatContainer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to <span className="text-purple-600">CAMPAK BOT</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Your intelligent assistant for Hiranandani Group inquiries
          </p>
        </div>
        <ChatContainer />
        <div className="text-center mt-6 text-sm text-gray-500">
          Powered by AI • Ask me anything about Hiranandani Group
        </div>
      </div>
    </div>
  );
}

export default App;