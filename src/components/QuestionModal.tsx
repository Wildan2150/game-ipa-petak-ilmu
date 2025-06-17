import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types/game';

interface QuestionModalProps {
  question: Question;
  timeLeft: number;
  onAnswer: (answerIndex: number) => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  timeLeft,
  onAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(answerIndex);
    }, 2000);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;
  const categoryColors = {
    'Produsen': 'from-green-500 to-green-600',
    'Konsumen': 'from-blue-500 to-blue-600',
    'Dekomposer': 'from-purple-500 to-purple-600',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[question.category]} text-white font-semibold text-sm`}>
              {question.category}
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className={`font-bold text-lg ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium";
              
              if (showFeedback) {
                if (index === question.correctAnswer) {
                  buttonClass += " bg-green-100 border-green-500 text-green-800";
                } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                  buttonClass += " bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += " bg-gray-100 border-gray-300 text-gray-600";
                }
              } else {
                buttonClass += " border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-800";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswer(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <span className="font-bold text-lg mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
                <span className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Benar! +10 Poin' : 'Salah!'}
                </span>
              </div>
              <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {question.explanation}
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ${timeLeft <= 10 ? 'bg-red-500' : 'bg-blue-500'}`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};