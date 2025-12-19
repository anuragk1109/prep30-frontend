'use client';

import { courses, getStudyMaterialsByCourse } from '@/data/study-materials';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface CourseStudyMaterialsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CourseStudyMaterialsPage({ params }: CourseStudyMaterialsPageProps) {
  const [slug, setSlug] = useState<string>('');
  const [course, setCourse] = useState<any>(null);
  
  // Unwrap the params Promise
  const resolvedParams = use(params);

  useEffect(() => {
    const finalSlug = resolvedParams.slug || '';
    
    setSlug(finalSlug);
    const foundCourse = courses.find(c => c.slug === finalSlug);
    setCourse(foundCourse);
    
    console.log('=== DEBUG INFO ===');
    console.log('Slug from params:', finalSlug);
    console.log('Courses imported:', courses);
    console.log('Found course:', foundCourse);
  }, [resolvedParams.slug]);

  const courseStudyMaterials = getStudyMaterialsByCourse(slug);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Course Not Found</h1>
        <p>Slug: {slug}</p>
        <p>Available slugs: {courses.map(c => c.slug).join(', ')}</p>
        <Link href="/study-material" className="text-blue-600">← Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="mb-8">
        <Link 
          href="/study-material" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          ← Back to Courses
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course?.title || 'Course Title'}</h1>
        <p className="text-gray-600 mb-4">{course?.description || 'Course description'}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {course?.level || 'Level'}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {course?.duration || 'Duration'}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            {course?.instructor || 'Instructor'}
          </span>
        </div>
      </div>

      {/* Study Materials */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Study Materials</h2>
        
        {courseStudyMaterials.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-gray-600 mb-2">No study materials available yet</p>
            <p className="text-sm text-gray-500">Study materials for this course will be added soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseStudyMaterials.map((material) => (
              <div
                key={material.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {material.title}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                    {material.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {material.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                    {material.category}
                  </span>
                  {material.duration && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      {material.duration}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {material.downloadUrl && (
                      <a
                        href={material.downloadUrl}
                        download
                        className="inline-flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Download
                      </a>
                    )}
                  </div>
                  {material.fileSize && (
                    <span className="text-xs text-gray-500">
                      {material.fileSize}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
