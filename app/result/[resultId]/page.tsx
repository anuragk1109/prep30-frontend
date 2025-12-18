import Link from 'next/link';

// Mock data - replace with actual data fetching
const getResultData = (resultId: string) => {
  // In a real app, you would fetch this data based on resultId
  const results = {
    '1': {
      quizTitle: 'General Knowledge Quiz',
      score: 8,
      totalQuestions: 10,
      correctAnswers: 8,
      incorrectAnswers: 2,
      timeSpent: '12:45',
      date: 'December 18, 2025',
      performance: 'Great job! You scored above average!',
      answers: [
        { question: 'What is the capital of France?', yourAnswer: 'Paris', correct: true },
        { question: 'Which planet is known as the Red Planet?', yourAnswer: 'Mars', correct: true },
        { question: 'What is 2 + 2?', yourAnswer: '5', correct: false, correctAnswer: '4' },
        // Add more questions as needed
      ]
    },
    '2': {
      quizTitle: 'JavaScript Fundamentals',
      score: 7,
      totalQuestions: 10,
      correctAnswers: 7,
      incorrectAnswers: 3,
      timeSpent: '15:30',
      date: 'December 17, 2025',
      performance: 'Good effort! You can do even better!',
      answers: []
    }
  };

  return results[resultId as keyof typeof results] || null;
};

export default function ResultPage({ params }: { params: { resultId: string } }) {
  const result = getResultData(params.resultId);
  
  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Result not found</h1>
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
  
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz Results: {result.quizTitle}
          </h1>
          <p className="text-gray-600">Completed on {result.date}</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
          {/* Score Summary */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg className="w-48 h-48" viewBox="0 0 100 100">
                  <circle
                    className="text-blue-200"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-white"
                    strokeWidth="8"
                    strokeDasharray={`${percentage * 2.51} 251.2`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    className="text-3xl font-bold"
                    fill="white"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mt-4">{result.performance}</h2>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6 text-center">
              <p className="text-sm font-medium text-gray-500">Correct Answers</p>
              <p className="text-3xl font-bold text-green-600">{result.correctAnswers}</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm font-medium text-gray-500">Incorrect Answers</p>
              <p className="text-3xl font-bold text-red-600">{result.incorrectAnswers}</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm font-medium text-gray-500">Time Spent</p>
              <p className="text-2xl font-bold text-gray-900">{result.timeSpent}</p>
            </div>
          </div>
        </div>
        
        {/* Answer Review */}
        {result.answers.length > 0 && (
          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Your Answers</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {result.answers.map((item, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                      item.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {item.correct ? '✓' : '✗'}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{item.question}</p>
                      <p className="text-gray-600">
                        Your answer: <span className={item.correct ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>{item.yourAnswer}</span>
                      </p>
                      {!item.correct && (
                        <p className="text-gray-600">
                          Correct answer: <span className="text-green-600 font-medium">{item.correctAnswer}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link 
            href="/quiz"
            className="px-6 py-3 bg-blue-600 text-white rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Quizzes
          </Link>
          <Link 
            href={`/quiz/${params.resultId}`} // Assuming resultId can be used as quizId for retake
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md text-center font-medium hover:bg-blue-50 transition-colors"
          >
            Retake Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
