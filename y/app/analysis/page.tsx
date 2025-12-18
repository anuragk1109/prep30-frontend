"use client";

import { useState } from 'react';
import { FiBarChart2, FiPieChart, FiTrendingUp, FiAward, FiClock, FiBookOpen, FiCheckCircle, FiXCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Mock data for analysis
const mockData = {
  overallScore: 78,
  testsTaken: 24,
  totalQuestions: 300,
  correctAnswers: 234,
  timeSpent: '45h 23m',
  accuracy: 78,
  rank: 256,
  percentile: 92,
  subjects: [
    { name: 'Quantitative Aptitude', score: 82, total: 100, trend: 'up', questions: 120, correct: 98, timeSpent: '12h 45m' },
    { name: 'Logical Reasoning', score: 75, total: 100, trend: 'up', questions: 80, correct: 60, timeSpent: '10h 20m' },
    { name: 'English Language', score: 68, total: 100, trend: 'down', questions: 60, correct: 41, timeSpent: '8h 15m' },
    { name: 'General Awareness', score: 85, total: 100, trend: 'up', questions: 40, correct: 34, timeSpent: '7h 30m' },
  ],
  recentTests: [
    { id: 1, name: 'SSC CGL Tier 1 - Mock 5', date: '2023-11-15', score: 82, total: 100, percentile: 94 },
    { id: 2, name: 'SSC CHSL - Mock 3', date: '2023-11-10', score: 75, total: 100, percentile: 88 },
    { id: 3, name: 'SSC CGL Tier 1 - Mock 4', date: '2023-11-05', score: 78, total: 100, percentile: 91 },
  ],
  weakAreas: [
    { topic: 'Time & Work', subject: 'Quantitative Aptitude', accuracy: 45, avgTime: '2.5m', totalAttempts: 20 },
    { topic: 'Reading Comprehension', subject: 'English Language', accuracy: 52, avgTime: '3.2m', totalAttempts: 25 },
    { topic: 'Blood Relations', subject: 'Logical Reasoning', accuracy: 58, avgTime: '1.8m', totalAttempts: 15 },
  ],
  strongAreas: [
    { topic: 'Percentage', subject: 'Quantitative Aptitude', accuracy: 92, avgTime: '1.2m', totalAttempts: 30 },
    { topic: 'Coding-Decoding', subject: 'Logical Reasoning', accuracy: 88, avgTime: '1.5m', totalAttempts: 25 },
    { topic: 'General Science', subject: 'General Awareness', accuracy: 95, avgTime: '0.8m', totalAttempts: 40 },
  ],
  timeManagement: {
    overall: 78,
    bySubject: {
      'Quantitative Aptitude': 82,
      'Logical Reasoning': 75,
      'English Language': 65,
      'General Awareness': 88
    }
  },
  improvementSuggestions: [
    'Focus more on Time & Work problems to improve speed and accuracy',
    'Practice Reading Comprehension daily to improve comprehension speed',
    'Revise Blood Relations concepts and practice more questions',
    'Take timed quizzes to improve time management in English section'
  ]
};

interface AnalysisCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  className?: string;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  className = '' 
}) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className="p-3 rounded-lg bg-sky-50 text-sky-600">
        <Icon className="h-6 w-6" />
      </div>
    </div>
    {description && <p className="mt-2 text-xs text-gray-500">{description}</p>}
  </div>
);

interface SubjectType {
  name: string;
  score: number;
  total: number;
  trend: 'up' | 'down';
  questions: number;
  correct: number;
  timeSpent: string;
}

interface SubjectCardProps {
  subject: SubjectType;
  onToggle: () => void;
  isOpen: boolean;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onToggle, isOpen }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
          <FiBookOpen className="h-5 w-5" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{subject.name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-sm font-medium text-gray-500">
              {subject.correct} / {subject.questions} correct
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{subject.timeSpent}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 text-right">
          <div className="text-lg font-semibold text-gray-900">{subject.score}%</div>
          <div className={`text-xs font-medium ${
            subject.trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {subject.trend === 'up' ? '↑ 5.2%' : '↓ 2.1%'} from last week
          </div>
        </div>
        {isOpen ? (
          <FiChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <FiChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </div>
    </button>
    
    {isOpen && (
      <div className="px-6 pb-4 pt-2 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Topic-wise Performance</h4>
            <div className="space-y-3">
              {[
                { name: 'Algebra', accuracy: 85, questions: 30 },
                { name: 'Geometry', accuracy: 78, questions: 25 },
                { name: 'Trigonometry', accuracy: 82, questions: 20 },
                { name: 'Arithmetic', accuracy: 90, questions: 45 },
              ].map((topic) => (
                <div key={topic.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{topic.name}</span>
                    <span className="font-medium">{topic.accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-sky-600 h-2 rounded-full" 
                      style={{ width: `${topic.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Performance</h4>
            <div className="h-40 bg-sky-50 rounded-lg flex items-center justify-center text-gray-400 mb-6">
              Performance Chart
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Actions</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FiCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">You're doing great in Arithmetic (90% accuracy)</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Focus more on Geometry to improve your score</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Take a full-length test to assess your preparation</span>
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
);

export default function Analysis() {
  const [openSubject, setOpenSubject] = useState<number | null>(0);
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSubject = (index: number) => {
    setOpenSubject(openSubject === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Performance Analysis</h1>
          <p className="mt-2 text-gray-600">Track your progress, identify strengths, and improve weak areas</p>
          
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'overview' 
                    ? 'bg-sky-100 text-sky-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('subjects')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'subjects' 
                    ? 'bg-sky-100 text-sky-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Subject-wise
              </button>
              <button
                onClick={() => setActiveTab('tests')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'tests' 
                    ? 'bg-sky-100 text-sky-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Test History
              </button>
            </div>
            
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {[
                { label: '7D', value: '7d' },
                { label: '30D', value: '30d' },
                { label: '90D', value: '90d' },
                { label: 'All', value: 'all' },
              ].map((range) => (
                <button
                  key={range.value}
                  type="button"
                  onClick={() => setTimeRange(range.value)}
                  className={`px-3 py-2 text-sm font-medium ${
                    timeRange === range.value
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } ${range.value === '7d' ? 'rounded-l-lg' : ''} ${
                    range.value === 'all' ? 'rounded-r-lg' : ''
                  } border border-gray-200`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <AnalysisCard 
                title="Overall Score" 
                value={`${mockData.overallScore}%`} 
                icon={FiBarChart2}
                description={`${mockData.percentile}%ile`}
              />
              <AnalysisCard 
                title="Tests Taken" 
                value={mockData.testsTaken} 
                icon={FiPieChart}
                description={`${mockData.correctAnswers}/${mockData.totalQuestions} questions`}
              />
              <AnalysisCard 
                title="Accuracy" 
                value={`${mockData.accuracy}%`} 
                icon={FiTrendingUp}
                description={`${mockData.rank} rank in your batch`}
              />
              <AnalysisCard 
                title="Time Spent" 
                value={mockData.timeSpent} 
                icon={FiClock}
                description="Avg. 1.8h per day"
              />
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Progress Overview</h2>
                <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                  View Detailed Report
                </button>
              </div>
              
              <div className="h-64 bg-sky-50 rounded-lg flex items-center justify-center text-gray-400 mb-6">
                Performance Trend Chart
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Strengths</h3>
                  <div className="space-y-3">
                    {mockData.strongAreas.map((area, index) => (
                      <div key={index} className="p-3 bg-green-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{area.topic}</h4>
                            <p className="text-sm text-gray-500">{area.subject}</p>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {area.accuracy}% accuracy
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Avg. time: {area.avgTime} • {area.totalAttempts} attempts
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Areas to Improve</h3>
                  <div className="space-y-3">
                    {mockData.weakAreas.map((area, index) => (
                      <div key={index} className="p-3 bg-red-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{area.topic}</h4>
                            <p className="text-sm text-gray-500">{area.subject}</p>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {area.accuracy}% accuracy
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Avg. time: {area.avgTime} • {area.totalAttempts} attempts
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Study Recommendations */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Study Recommendations</h2>
              <div className="space-y-4">
                {mockData.improvementSuggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-sky-500 mr-3 mt-0.5">
                      <FiAward />
                    </div>
                    <p className="text-gray-700">{suggestion}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Generate Personalized Study Plan
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'subjects' && (
          <div className="space-y-4">
            {mockData.subjects.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                isOpen={openSubject === index}
                onToggle={() => toggleSubject(index)}
              />
            ))}
          </div>
        )}

        {activeTab === 'tests' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {mockData.recentTests.map((test) => (
                <li key={test.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                          <FiAward className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-sky-600">{test.name}</div>
                          <div className="text-sm text-gray-500">
                            Taken on {new Date(test.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-right mr-6">
                          <div className="text-sm font-medium text-gray-900">
                            {test.score}/{test.total}
                          </div>
                          <div className="text-xs text-gray-500">
                            {test.percentile}%ile
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {Math.round((test.score / test.total) * 100)}%
                          </div>
                          <div className="text-xs text-gray-500">
                            Score
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                      >
                        View Detailed Analysis
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
                    <span className="font-medium">12</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 bg-sky-50 border-sky-500 text-sky-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      3
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}