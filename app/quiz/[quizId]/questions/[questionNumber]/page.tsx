'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock question data - replace with actual data fetching
const quizData = {
  '1': [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1
    }
  ],
  '2': [
    {
      id: 1,
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Modern Language',
        'Hyperlink and Text Markup Language',
        'Home Tool Markup Language'
      ],
      correctAnswer: 0
    },
    // Add more questions for quiz 2
  ]
};

export default function QuestionPage({ params }: { params: { quizId: string; questionNumber: string } }) {
  const router = useRouter();
  const { quizId, questionNumber } = params;
  const currentQuestionNum = parseInt(questionNumber);
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  
  // Get current quiz questions
  const questions = quizData[quizId as keyof typeof quizData] || [];
  const currentQuestion = questions[currentQuestionNum - 1];
  const totalQuestions = questions.length;
  
  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setShowResult(false);
  }, [questionNumber]);
  
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Question not found</h1>
          <Link 
            href="/quiz" 
            className="text-blue-600 hover:underline"
          >
            Back to Quizzes
          </Link>
        </div>
      </div>
    );
  }
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showResult) return; // Prevent changing answer after submission
    setSelectedOption(optionIndex);
  };
  
  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };
  
  const goToNextQuestion = () => {
    if (currentQuestionNum < totalQuestions) {
      router.push(`/quiz/${quizId}/questions/${currentQuestionNum + 1}`);
    } else {
      // Quiz completed - redirect to results page with a unique result ID
      // In a real app, you would save the results first and get a resultId
      const resultId = `${quizId}-${Date.now()}`; // Simple unique ID
      router.push(`/result/${resultId}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionNum} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-blue-600">
              Score: {score}/{totalQuestions}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(currentQuestionNum / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Question Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let optionClasses = "p-4 border rounded-lg cursor-pointer transition-colors ";
                
                if (showResult) {
                  if (index === currentQuestion.correctAnswer) {
                    optionClasses += "bg-green-100 border-green-500 ";
                  } else if (index === selectedOption) {
                    optionClasses += "bg-red-100 border-red-500 ";
                  }
                } else if (selectedOption === index) {
                  optionClasses += "bg-blue-50 border-blue-500 ";
                } else {
                  optionClasses += "hover:bg-gray-50 border-gray-300 ";
                }
                
                return (
                  <div
                    key={index}
                    className={optionClasses}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                        selectedOption === index ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-400'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {showResult && (
              <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {isCorrect ? '✅ Correct!' : '❌ Incorrect. '}
                {!isCorrect && (
                  <span>Correct answer: {currentQuestion.options[currentQuestion.correctAnswer]}</span>
                )}
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              {currentQuestionNum > 1 ? (
                <Link 
                  href={`/quiz/${quizId}/questions/${currentQuestionNum - 1}`}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </Link>
              ) : (
                <div></div>
              )}
              
              {!showResult ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className={`px-6 py-2 rounded-md text-white ${selectedOption === null ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={goToNextQuestion}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  {currentQuestionNum < totalQuestions ? 'Next Question' : 'View Results'}
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/quiz" 
            className="text-blue-600 hover:underline"
          >
            ← Back to Quizzes
          </Link>
        </div>
      </div>
    </div>
  );
}
