export default function Description() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Your Complete Exam Preparation Companion
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Affordable, AI-powered learning for competitive exams
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
            Just ₹30/month • No hidden costs
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">AI-Powered Explanations</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Human-friendly, easy-to-understand explanations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Bullet-point breakdowns for complex topics
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Step-by-step problem solving approaches
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Visual learning aids and examples
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Interactive Quizzes</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Course-specific practice quizzes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Instant feedback with detailed solutions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Progress tracking and performance analytics
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Adaptive difficulty based on your level
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Comprehensive Course Coverage</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                All major competitive exam courses
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Detailed topic-wise explanations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Regularly updated content
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Expert-curated study materials
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-black">Why Choose Preptocrack?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-2 text-black">Affordable Learning</h4>
              <p className="text-gray-600">Premium quality education at just ₹30/month - less than a cup of coffee!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black">AI-Enhanced Content</h4>
              <p className="text-gray-600">Smart explanations that adapt to your learning style and pace.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black">Complete Preparation</h4>
              <p className="text-gray-600">Everything you need for competitive exams in one platform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}