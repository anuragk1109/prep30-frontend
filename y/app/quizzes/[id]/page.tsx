'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Mock data - replace with your actual data fetching
const quizCategories = [
  {
    id: '1',
    title: 'JEE Main & Advanced',
    description: 'Practice with 10,000+ questions covering Physics, Chemistry, and Mathematics for JEE preparation.',
    questions: '10,000+',
    quizzes: '500+',
    students: '25,000+',
    category: 'Engineering',
    icon: '🧪',
    topics: [
      { name: 'Physics', count: 3500 },
      { name: 'Chemistry', count: 3200 },
      { name: 'Mathematics', count: 3300 },
    ],
    recentQuizzes: [
      { id: 1, title: 'Electrostatics - Advanced', questions: 25, time: '30 min', difficulty: 'Hard' },
      { id: 2, title: 'Organic Chemistry - Basics', questions: 20, time: '25 min', difficulty: 'Medium' },
      { id: 3, title: 'Calculus - Integration', questions: 30, time: '35 min', difficulty: 'Medium' },
    ]
  },
  // Add other categories as needed
];

export default function QuizCategoryPage() {
  const params = useParams();
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const foundCategory = quizCategories.find(cat => cat.id === params.id);
    setCategory(foundCategory);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Quiz category not found</p>
          <Link href="/courses" className="text-sky-600 hover:underline">
            ← Back to Quiz Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/courses" className="inline-flex items-center text-sky-600 hover:underline mb-4">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Categories
          </Link>
          
          <div className="flex items-center">
            <span className="text-5xl mr-4">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{category.title}</h1>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-500">Questions</h3>
            <p className="text-3xl font-bold text-sky-600">{category.questions}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-500">Quizzes</h3>
            <p className="text-3xl font-bold text-sky-600">{category.quizzes}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-500">Active Learners</h3>
            <p className="text-3xl font-bold text-sky-600">{category.students}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Topics</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <ul className="divide-y divide-gray-100">
                {category.topics.map((topic: any, index: number) => (
                  <li key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">{topic.name}</h3>
                        <p className="text-sm text-gray-500">{topic.count} questions</p>
                      </div>
                      <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                        Start Practicing →
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Quizzes */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Quizzes</h2>
            <div className="space-y-4">
              {category.recentQuizzes.map((quiz: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-medium text-gray-900">{quiz.title}</h3>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                    <span>{quiz.questions} questions</span>
                    <span>•</span>
                    <span>{quiz.time}</span>
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Start Quiz
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Unlock All Quizzes for Just ₹30/month</h2>
          <p className="text-sky-100 text-lg mb-6 max-w-2xl mx-auto">
            Get unlimited access to all quiz categories, detailed solutions, and performance analytics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-white text-sky-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Subscribe Now
            </Link>
            <Link
              href="/free-trial"
              className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Try Free for 3 Days
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
