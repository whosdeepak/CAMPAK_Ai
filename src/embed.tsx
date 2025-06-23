import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EmbeddableApp from './components/EmbeddableApp';
import './index.css';

// Function to initialize the chatbot widget
const initCampakBot = (containerId?: string) => {
  const container = containerId 
    ? document.getElementById(containerId)
    : document.body;

  if (!container) {
    console.error('Container not found for CAMPAK Bot');
    return;
  }

  // Create a div for the chatbot if not using body
  let chatbotContainer;
  if (container === document.body) {
    chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'campak-bot-widget';
    document.body.appendChild(chatbotContainer);
  } else {
    chatbotContainer = container;
  }

  const root = createRoot(chatbotContainer);
  root.render(
    <StrictMode>
      <EmbeddableApp />
    </StrictMode>
  );
};

// Auto-initialize if script is loaded
if (typeof window !== 'undefined') {
  // Make it globally available
  (window as any).initCampakBot = initCampakBot;
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCampakBot());
  } else {
    initCampakBot();
  }
}

export { initCampakBot };