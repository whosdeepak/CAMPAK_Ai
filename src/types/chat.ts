export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export interface QAPair {
  question: string;
  answer: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  inputValue: string;
}