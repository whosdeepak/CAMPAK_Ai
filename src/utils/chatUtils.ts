import { qaData } from '../data/qaData';

export const findBestMatch = (userInput: string): string => {
  const input = userInput.toLowerCase().trim();
  
  // Direct question match
  const exactMatch = qaData.find(qa => 
    qa.question.toLowerCase().includes(input) || 
    input.includes(qa.question.toLowerCase())
  );
  
  if (exactMatch) {
    return exactMatch.answer;
  }

  // Keyword matching
  const keywords = input.split(' ').filter(word => word.length > 2);
  let bestMatch = null;
  let maxScore = 0;

  qaData.forEach(qa => {
    const questionText = qa.question.toLowerCase() + ' ' + qa.answer.toLowerCase();
    let score = 0;
    
    keywords.forEach(keyword => {
      if (questionText.includes(keyword)) {
        score++;
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = qa;
    }
  });

  if (bestMatch && maxScore > 0) {
    return bestMatch.answer;
  }

  return "I apologize, but I couldn't find specific information about that. Could you please rephrase your question or ask about Hiranandani Group's projects, locations, amenities, or services?";
};

export const getPopularQuestions = (): string[] => {
  return [
    "What is Hiranandani Group known for?",
    "Where are Hiranandani properties located?",
    "What amenities do projects offer?",
    "How can I contact Hiranandani Group?",
    "Are there projects in Mumbai?",
    "What is Hiranandani Gardens?"
  ];
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};