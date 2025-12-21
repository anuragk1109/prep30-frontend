import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">About Prep30</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students to crack competitive exams with daily practice and comprehensive learning resources.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide high-quality, accessible education that helps students excel in competitive exams through daily practice and comprehensive learning resources.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted platform for competitive exam preparation, helping millions of students achieve their academic and career goals.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sky-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Anurag Kashyap', role: 'Developer & CEO', image: '/team1.jpg' },
              {name:'Neha Kumari' , role:'Content Research Analyst & Co-Founder'},
              {name:'Ishita Gupta', role:'Deployment and Opeartions Head & Co-Founder'},
              {name:'Rajesh Kumar',role:'SBI Branch Manager & Banking Content Head'},
              {name:'Satyendra Prasad Singh',role:'English Phd & English Content Analyst'}
              
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-sky-100 flex items-center justify-center text-sky-600 text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sky-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-sky-700 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-sky-100">Active Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="text-sky-100">Quizzes weekly for all courses</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-sky-100">Success Rate</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sky-900 mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have improved their scores with our daily quizzes and comprehensive study materials.
          </p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Get Started for only 30 rs.
          </button>
        </div>
      </div>
    </div>
  );
}