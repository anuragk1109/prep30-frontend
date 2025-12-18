'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCourses } from '@/lib/auth';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  thumbnail?: string;
  category?: string;
}

export default function FeaturedQuiz() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getCourses();
        const list = Array.isArray(data) ? (data as Course[]) : [];
        setCourses(list);
        setSelectedCourse(list[0] || null);
      } catch (err) {
        setError((err as Error).message || 'Failed to load courses');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Practicing Now</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a course and start practicing with quizzes from our database.
          </p>
        </div>

        {loading && (
          <div className="text-center text-gray-600">Loading courses...</div>
        )}

        {!loading && error && (
          <div className="text-center text-red-600">{error}</div>
        )}

        {!loading && !error && courses.length === 0 && (
          <div className="text-center text-gray-600">No courses available.</div>
        )}

        {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Course Selection */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Course</h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <div 
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedCourse?.id === course.id 
                      ? 'bg-sky-50 border-2 border-sky-200' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{(course.title || 'C').slice(0, 1).toUpperCase()}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Course */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Selected Course</h3>
            </div>
            
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6 text-center mb-6">
              <span className="text-5xl mb-3 inline-block">{(selectedCourse?.title || 'C').slice(0, 1).toUpperCase()}</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedCourse?.title}</h4>
              <p className="text-gray-600 mb-6">{selectedCourse?.description}</p>

              <Link
                href={selectedCourse ? `/quizzes/${selectedCourse.id}` : '/courses'}
                className="w-full py-3 px-6 rounded-lg font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors block"
              >
                Start Practicing
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Subscribe for full access to all quizzes.
              </p>
              <Link 
                href="/pricing" 
                className="inline-flex items-center text-sky-600 hover:underline font-medium"
              >
                View Pricing
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
