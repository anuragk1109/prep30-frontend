import Link from 'next/link';

// Mock data - replace with actual data fetching
export const quizzes = [
  {
    id: '1',
    title: 'General Knowledge Quiz',
    description: 'Test your general knowledge with this fun quiz!',
    questionCount: 10,
    duration: '15 min',
    difficulty: 'Medium'
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    description: 'Test your JavaScript knowledge with these challenging questions.',
    questionCount: 15,
    duration: '20 min',
    difficulty: 'Hard'
  },
  {
    id: '3',
    title: 'Web Development Basics',
    description: 'Basic concepts of web development for beginners.',
    questionCount: 8,
    duration: '10 min',
    difficulty: 'Easy'
  }
];

export default function QuizList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Quizzes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{quiz.title}</h2>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {quiz.questionCount} Questions
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {quiz.duration}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  {quiz.difficulty}
                </span>
              </div>
              
              <Link 
                href={`/quiz/${quiz.id}/questions/1`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition-colors"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
