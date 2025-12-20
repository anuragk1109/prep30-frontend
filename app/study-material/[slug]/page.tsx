import { getCourseBySlug } from '@/data/study-materials';
import { Subject } from '@/types/study-material';
import Link from 'next/link';
import { notFound } from 'next/navigation';
interface CourseStudyMaterialsPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function CourseStudyMaterialsPage({ params }: CourseStudyMaterialsPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const course = getCourseBySlug(resolvedParams.slug);
  if (!course) notFound();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mt-4 bg-white">
      {/* Course Header */}
      <div className="mb-8">
        <Link 
          href="/study-material" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          ← Back to Courses
        </Link>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:text-3xl">{course.title}</h1>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {course.level}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {course.duration}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            {course.instructor}
          </span>
        </div>
      </div>

      {/* Subjects */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Subjects</h2>
        
        {course.subjects?.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-gray-600 mb-2">No subjects available yet</p>
            <p className="text-sm text-gray-500">Subjects for this course will be added soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {course.subjects
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((subject: Subject) => (
                <Link
                  key={subject.id}
                  href={`/study-material/${course.slug}/${subject.slug}`}
                  className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {subject.title}
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
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {subject.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {subject.chapters?.length || 0} chapters
                  </div>
                </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
