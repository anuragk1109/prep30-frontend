'use client';

import { useState } from 'react';
import Link from 'next/link';

const quizCategories = [
  {
    id: '1',
    title: 'JEE Main & Advanced',
    description: 'Practice with 10,000+ questions covering Physics, Chemistry, and Mathematics for JEE preparation.',
    icon: '🧪',
    featuredQuiz: {
      id: 'jee-demo',
      title: 'JEE Main - Physics Demo Quiz',
      questions: 10,
      time: '15 min',
      difficulty: 'Medium'
    }
  },
  {
    id: '2',
    title: 'NEET UG',
    description: 'Comprehensive question bank for Physics, Chemistry, and Biology to ace your NEET preparation.',
    icon: '⚕️',
    featuredQuiz: {
      id: 'neet-demo',
      title: 'NEET - Biology Demo Quiz',
      questions: 10,
      time: '15 min',
      difficulty: 'Medium'
    }
  },
  // Add more categories as needed
];

export default function FeaturedQuiz() {
  const [selectedCategory, setSelectedCategory] = useState(quizCategories[0]);
  const [isSubscribed] = useState(true); // Always true for home page quizzes

  const handleStartQuiz = (e: React.MouseEvent) => {
    // Allow quiz to start without any restrictions
    console.log('Starting free quiz...');
    // You can add analytics or other tracking here
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Practicing Now</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a course to try our free demo quiz. Subscribe for full access to all quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Course Selection */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Course</h3>
            <div className="space-y-4">
              {quizCategories.map((category) => (
                <div 
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedCategory.id === category.id 
                      ? 'bg-sky-50 border-2 border-sky-200' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{category.title}</h4>
                      <p className="text-sm text-gray-500 line-clamp-1">{category.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Quiz */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Featured Quiz</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800">
                {isSubscribed ? 'Subscribed' : 'Free Demo'}
              </span>
            </div>
            
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6 text-center mb-6">
              <span className="text-5xl mb-3 inline-block">{selectedCategory.icon}</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedCategory.featuredQuiz.title}</h4>
              <p className="text-gray-600 mb-4">{selectedCategory.description}</p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">{selectedCategory.featuredQuiz.questions}</div>
                  <div className="text-sm text-gray-500">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">{selectedCategory.featuredQuiz.time}</div>
                  <div className="text-sm text-gray-500">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">{selectedCategory.featuredQuiz.difficulty}</div>
                  <div className="text-sm text-gray-500">Level</div>
                </div>
              </div>

              <button
                onClick={handleStartQuiz}
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  isSubscribed 
                    ? 'bg-sky-600 hover:bg-sky-700 text-white' 
                    : 'bg-white border-2 border-sky-600 text-sky-600 hover:bg-sky-50'
                } transition-colors`}
              >
                Start Free Quiz
              </button>
              
              <p className="mt-3 text-sm text-green-600">
                Free to try! No subscription needed for this quiz.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Enjoy this free quiz! Subscribe for full access to all quizzes and features.
              </p>
              <Link 
                href="/pricing" 
                className="inline-flex items-center text-sky-600 hover:underline font-medium"
              >
                {isSubscribed ? 'Manage Subscription' : 'View Pricing Plans'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
