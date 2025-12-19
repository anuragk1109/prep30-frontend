import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getChapterBySlug, getCourseBySlug, getSubjectBySlug, getTopicBySlug } from '@/data/study-materials';

interface TopicPageProps {
  params:
    | { slug: string; subjectSlug: string; chapterSlug: string; topicSlug: string }
    | Promise<{ slug: string; subjectSlug: string; chapterSlug: string; topicSlug: string }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
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

  const topic = getTopicBySlug(
    resolvedParams.slug,
    resolvedParams.subjectSlug,
    resolvedParams.chapterSlug,
    resolvedParams.topicSlug
  );
  if (!topic) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex flex-col gap-2">
          <Link
            href={`/study-material/${course.slug}/${subject.slug}/${chapter.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to Topics
          </Link>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{topic.title}</h1>
          <p className="mt-1 text-gray-600">{topic.description}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{course.title}</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{subject.title}</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{chapter.title}</span>
          </div>

          {topic.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {topic.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
        <div className="whitespace-pre-wrap break-words text-[15px] leading-7 text-gray-800">
          {topic.content}
        </div>
      </div>
    </div>
  );
}
