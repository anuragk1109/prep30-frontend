import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getChapterBySlug, getCourseBySlug, getSubjectBySlug } from '@/data/study-materials';

interface ChapterPageProps {
  params:
    | { slug: string; subjectSlug: string; chapterSlug: string }
    | Promise<{ slug: string; subjectSlug: string; chapterSlug: string }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const resolvedParams = await Promise.resolve(params);

  const course = getCourseBySlug(resolvedParams.slug);
  if (!course) notFound();

  const subject = getSubjectBySlug(resolvedParams.slug, resolvedParams.subjectSlug);
  if (!subject) notFound();

  const chapter = getChapterBySlug(
    resolvedParams.slug,
    resolvedParams.subjectSlug,
    resolvedParams.chapterSlug
  );
  if (!chapter) notFound();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex flex-col gap-2">
          <Link
            href={`/study-material/${course.slug}/${subject.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to Chapters
          </Link>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{chapter.title}</h1>
          <p className="mt-1 text-gray-600">{chapter.description}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{course.title}</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{subject.title}</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
              {chapter.topics?.length || 0} topics
            </span>
          </div>
        </div>
      </div>

      {chapter.topics?.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapter.topics
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((topic) => (
              <Link
                key={topic.id}
                href={`/study-material/${course.slug}/${subject.slug}/${chapter.slug}/${topic.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500">Topic {topic.order}</div>
                    <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {topic.title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-gray-400 group-hover:text-blue-600">→</span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm text-gray-600">{topic.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {topic.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <div className="rounded-xl bg-gray-50 p-10 text-center">
          <p className="text-gray-700">No topics available for this chapter yet.</p>
        </div>
      )}
    </div>
  );
}
