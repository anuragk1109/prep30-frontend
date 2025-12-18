import Image from 'next/image';
import Link from 'next/link';

const quizCategories = [
  {
    id: 1,
    title: 'JEE Main & Advanced',
    description: 'Practice with 10,000+ questions covering Physics, Chemistry, and Mathematics for JEE preparation.',
    questions: '10,000+',
    quizzes: '500+',
    students: '25,000+',
    category: 'Engineering',
    icon: '🧪'
  },
  {
    id: 2,
    title: 'NEET UG',
    description: 'Comprehensive question bank for Physics, Chemistry, and Biology to ace your NEET preparation.',
    questions: '8,500+',
    quizzes: '400+',
    students: '18,000+',
    category: 'Medical',
    icon: '⚕️'
  },
  {
    id: 3,
    title: 'SSC CGL/CHSL',
    description: 'Practice questions for Quantitative Aptitude, Reasoning, English, and General Awareness.',
    questions: '15,000+',
    quizzes: '600+',
    students: '35,000+',
    category: 'Government Jobs',
    icon: '📚'
  },
  {
    id: 4,
    title: 'Banking Exams',
    description: 'Prepare for IBPS, SBI PO, and other banking exams with our extensive question bank.',
    questions: '12,000+',
    quizzes: '550+',
    students: '28,000+',
    category: 'Banking',
    icon: '🏦'
  },
  {
    id: 5,
    title: 'UPSC Civil Services',
    description: 'Comprehensive coverage of UPSC syllabus with previous year questions and mock tests.',
    questions: '20,000+',
    quizzes: '700+',
    students: '15,000+',
    category: 'Civil Services',
    icon: '🎯'
  },
  {
    id: 6,
    title: 'GATE',
    description: 'Practice questions for all GATE papers with detailed solutions and performance analysis.',
    questions: '25,000+',
    quizzes: '800+',
    students: '20,000+',
    category: 'Engineering',
    icon: '🎓'
  },
];

const categories = [
  { name: 'All', count: quizCategories.length },
  { name: 'Engineering', count: quizCategories.filter(c => c.category === 'Engineering').length },
  { name: 'Medical', count: quizCategories.filter(c => c.category === 'Medical').length },
  { name: 'Government Jobs', count: quizCategories.filter(c => c.category === 'Government Jobs').length },
  { name: 'Banking', count: quizCategories.filter(c => c.category === 'Banking').length },
  { name: 'Civil Services', count: quizCategories.filter(c => c.category === 'Civil Services').length },
];

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Quiz Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access thousands of practice questions and quizzes to ace your competitive exams
          </p>
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-bold">Unlimited Access:</span> Get full access to all quizzes for just ₹30/month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  category.name === 'All'
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizCategories.map((category) => (
            <div
              key={category.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center text-6xl">
                {category.icon}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full">
                    {category.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {category.questions} Questions
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {category.quizzes} Quizzes
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {category.students} Active Learners
                  </div>
                </div>

                <Link
                  href={`/quizzes/${category.id}`}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center block"
                >
                  Start Practicing
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Unlock All Quizzes for Just ₹30/month</h2>
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
          <p className="mt-4 text-sm text-sky-100">No credit card required for free trial. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
}