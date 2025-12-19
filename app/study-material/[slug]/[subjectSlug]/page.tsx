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
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subject.chapters
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((chapter) => (
              <Link
                key={chapter.id}
                href={`/study-material/${course.slug}/${subject.slug}/${chapter.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500">Chapter {chapter.order}</div>
                    <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {chapter.title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-gray-400 group-hover:text-blue-600">→</span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm text-gray-600">{chapter.description}</p>

                <div className="mt-4 text-sm text-gray-500">
                  {chapter.topics?.length || 0} topics
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
