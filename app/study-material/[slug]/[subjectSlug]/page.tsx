import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getSubjectBySlug } from '@/data/study-materials';

interface SubjectPageProps {
  params:
    | { slug: string; subjectSlug: string }
    | Promise<{ slug: string; subjectSlug: string }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const course = getCourseBySlug(resolvedParams.slug);
  if (!course) notFound();

  const subject = getSubjectBySlug(resolvedParams.slug, resolvedParams.subjectSlug);
  if (!subject) notFound();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mt-4 bg-white">
      <div className="mb-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href={`/study-material/${course.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              ← Back to Subjects
            </Link>
            <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              {subject.title}
            </h1>
            <p className="mt-2 text-gray-600">{subject.description}</p>
          </div>

          <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
            <div className="font-medium text-gray-900">{course.title}</div>
            <div>{subject.chapters?.length || 0} chapters</div>
          </div>
        </div>
      </div>

      {subject.chapters?.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subject.chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/study-material/${resolvedParams.slug}/${resolvedParams.subjectSlug}/${chapter.slug}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-sky-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <span className="text-sky-600 font-bold text-lg">{chapter.order}</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                {chapter.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {chapter.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {chapter.topics.length} {chapter.topics.length === 1 ? 'topic' : 'topics'}
                </span>
                <span className="text-xs font-medium text-sky-600 group-hover:text-sky-700">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-gray-50 p-10 text-center">
          <p className="text-gray-700">No chapters available for this subject yet.</p>
        </div>
      )}
    </div>
  );
}
