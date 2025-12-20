'use client';

import { useState, useEffect } from 'react';
import { FiBook, FiCalendar, FiClock, FiTrendingUp, FiAward } from 'react-icons/fi';
import { useAuth } from '@/contexts/AuthContext';
import { getUserQuizResults } from '@/lib/quiz';

interface QuizResult {
  id: string;
  quizTitle: string;
  courseName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: string;
  date: string;
  percentage: number;
}

interface QuizHistoryProps {
  userId: string;
}

const QuizHistory: React.FC<QuizHistoryProps> = ({ userId }) => {
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchQuizHistory = async () => {
      if (!token) {
        setError('Authentication required');
        setLoading(false);
        return;
      }

      try {
        const results = await getUserQuizResults(userId, token);
        setQuizHistory(results);
      } catch (err) {
        console.error('Error fetching quiz history:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch quiz history');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizHistory();
  }, [userId, token]);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600 bg-green-100';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 80) return <FiAward className="h-4 w-4" />;
    if (percentage >= 60) return <FiTrendingUp className="h-4 w-4" />;
    return <FiTrendingUp className="h-4 w-4 rotate-180" />;
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3 sm:space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="text-center py-6 sm:py-8">
          <FiBook className="h-10 sm:h-12 text-red-400 mx-auto mb-3" />
          <p className="text-red-600 font-medium mb-1">Error Loading Quiz History</p>
          <p className="text-sm text-gray-500 px-4">{error}</p>
        </div>
      </div>
    );
  }

  const averageScore = quizHistory.length > 0 
    ? Math.round(quizHistory.reduce((acc, quiz) => acc + quiz.percentage, 0) / quizHistory.length)
    : 0;

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <FiBook className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Quiz History</h2>
          </div>
          <div className="text-sm text-gray-500">
            Average Score: <span className="font-semibold text-gray-900">{averageScore}%</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        {quizHistory.length === 0 ? (
          <div className="text-center py-6 sm:py-8">
            <FiBook className="h-10 sm:h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No quizzes attempted yet</p>
            <p className="text-sm text-gray-400 mt-1 px-4">Start taking quizzes to see your history here</p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {quizHistory.map((quiz) => (
              <div key={quiz.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2 space-y-2 sm:space-y-0">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">{quiz.quizTitle}</h3>
                      <span className="sm:ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit">
                        {quiz.courseName}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <FiCalendar className="h-4 w-4 mr-1" />
                        {new Date(quiz.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <FiClock className="h-4 w-4 mr-1" />
                        {quiz.timeSpent}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                        <div>
                          <span className="text-green-600 font-medium">{quiz.correctAnswers}</span>
                          <span className="text-gray-500 ml-1">correct</span>
                        </div>
                        <div>
                          <span className="text-red-600 font-medium">{quiz.incorrectAnswers}</span>
                          <span className="text-gray-500 ml-1">incorrect</span>
                        </div>
                        <div>
                          <span className="text-gray-900 font-medium">{quiz.score}/{quiz.totalQuestions}</span>
                          <span className="text-gray-500 ml-1">total</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:ml-4">
                    <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getScoreColor(quiz.percentage)}`}>
                      {getScoreIcon(quiz.percentage)}
                      <span className="ml-1">{quiz.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizHistory;
