import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getSubjectBySlug, getChapterBySlug } from '@/data/study-materials';
import ProtectedTopicContent from '@/components/ProtectedTopicContent';

interface ChapterPageProps {
  params: { slug: string; subjectSlug: string; chapterSlug: string } | Promise<{ slug: string; subjectSlug: string; chapterSlug: string }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const { slug, subjectSlug, chapterSlug } = resolvedParams;

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const subject = getSubjectBySlug(slug, subjectSlug);
  if (!subject) notFound();

  const chapter = getChapterBySlug(slug, subjectSlug, chapterSlug);
  if (!chapter) notFound();

  // Get the first (and only) topic
  const topic = chapter.topics[0];
  if (!topic) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href={`/study-material/${slug}`} className="hover:text-sky-600 transition-colors">
            {course.title}
          </Link>
          <span>/</span>
          <Link href={`/study-material/${slug}/${subjectSlug}`} className="hover:text-sky-600 transition-colors">
            {subject.title}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{chapter.title}</span>
        </nav>

        {/* Chapter Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {chapter.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {chapter.description}
          </p>
        </div>
 
         {/* Topic Content */}
        <div className="max-w-4xl mx-auto">
          <ProtectedTopicContent content={topic.content} />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
          <Link 
            href={`/study-material/${slug}/${subjectSlug}`}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors font-medium"
          >
            <span>←</span>
            <span>Back to {subject.title}</span>
          </Link>
          
          <div className="text-sm text-gray-500">
            Chapter {chapter.order} of {subject.chapters.length}
          </div>
        </div>
      </div>
    </div>
  );
}
