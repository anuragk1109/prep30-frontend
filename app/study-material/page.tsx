import { courses } from '@/data/study-materials';
import Link from 'next/link';

export default function StudyMaterialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Study Materials</h1>
      <p className="text-gray-600 mb-8">Select a course to access study materials</p>
      
      {courses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No courses available yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/study-material/${course.slug}`}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  {course.level}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <span>Instructor: {course.instructor}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}