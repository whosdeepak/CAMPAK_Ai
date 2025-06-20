import React from 'react';
import { getPopularQuestions } from '../utils/chatUtils';

interface QuickActionsProps {
  onQuestionClick: (question: string) => void;
  isVisible: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onQuestionClick, isVisible }) => {
  const popularQuestions = getPopularQuestions();

  if (!isVisible) return null;

  return (
    <div className="p-4 border-t border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Questions:</h3>
      <div className="flex flex-wrap gap-2">
        {popularQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="text-xs bg-purple-50 text-purple-700 px-3 py-2 rounded-full hover:bg-purple-100 transition-colors duration-200 border border-purple-200"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;