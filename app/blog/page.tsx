import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips to Crack SSC CGL in First Attempt',
    excerpt: 'Discover proven strategies and tips to clear SSC CGL in your very first attempt with our comprehensive guide.',
    date: 'May 15, 2023',
    readTime: '8 min read',
    category: 'SSC',
    image: '/blog/ssc-tips.jpg',
    author: 'Rahul Sharma',
    authorImage: '/authors/rahul.jpg'
  },
  {
    id: 2,
    title: 'Best Books for Banking Exams 2023',
    excerpt: 'A curated list of the most recommended books for IBPS PO, SBI PO, and other banking examinations.',
    date: 'April 28, 2023',
    readTime: '6 min read',
    category: 'Banking',
    image: '/blog/banking-books.jpg',
    author: 'Priya Patel',
    authorImage: '/authors/priya.jpg'
  },
  {
    id: 3,
    title: 'How to Improve Your Speed in Quantitative Aptitude',
    excerpt: 'Learn time-saving techniques and shortcuts to solve quantitative aptitude questions faster and more accurately.',
    date: 'April 15, 2023',
    readTime: '10 min read',
    category: 'Quantitative Aptitude',
    image: '/blog/quant-tips.jpg',
    author: 'Amit Kumar',
    authorImage: '/authors/amit.jpg'
  },
  {
    id: 4,
    title: 'UPSC Preparation Strategy for Working Professionals',
    excerpt: 'Balancing work and UPSC preparation? Here\'s how you can effectively manage both and succeed in the civil services examination.',
    date: 'March 30, 2023',
    readTime: '12 min read',
    category: 'UPSC',
    image: '/blog/upsc-strategy.jpg',
    author: 'Neha Gupta',
    authorImage: '/authors/neha.jpg'
  },
  {
    id: 5,
    title: 'Common Mistakes to Avoid in English for Competitive Exams',
    excerpt: 'Avoid these common pitfalls in the English section to boost your score in competitive examinations.',
    date: 'March 22, 2023',
    readTime: '7 min read',
    category: 'English',
    image: '/blog/english-mistakes.jpg',
    author: 'Ananya Singh',
    authorImage: '/authors/ananya.jpg'
  },
  {
    id: 6,
    title: 'Time Management Tips for GATE 2024 Aspirants',
    excerpt: 'Master the art of time management to cover the vast GATE syllabus effectively and efficiently.',
    date: 'March 10, 2023',
    readTime: '9 min read',
    category: 'GATE',
    image: '/blog/gate-time.jpg',
    author: 'Vikram Mehta',
    authorImage: '/authors/vikram.jpg'
  },
];

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'SSC', count: blogPosts.filter(post => post.category === 'SSC').length },
  { name: 'Banking', count: blogPosts.filter(post => post.category === 'Banking').length },
  { name: 'UPSC', count: blogPosts.filter(post => post.category === 'UPSC').length },
  { name: 'GATE', count: blogPosts.filter(post => post.category === 'GATE').length },
  { name: 'Study Tips', count: 2 },
  { name: 'Exam Strategies', count: 3 },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest exam preparation tips, strategies, and resources from our experts
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  index === 0 
                    ? 'bg-sky-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <div className="h-full w-full bg-sky-100 flex items-center justify-center p-8">
                  <div className="text-5xl font-bold text-sky-600">
                    {blogPosts[0].title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-sky-600 font-semibold mb-1">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-3 text-gray-600">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
                      {blogPosts[0].author.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {blogPosts[0].author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2023-05-15">{blogPosts[0].date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href={`/blog/${blogPosts[0].id}`}
                    className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center"
                  >
                    Read full story
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 h-48 bg-sky-100 flex items-center justify-center">
                  <div className="text-3xl font-bold text-sky-600">
                    {post.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-sky-600">
                      <span className="hover:underline">{post.category}</span>
                    </p>
                    <Link href={`/blog/${post.id}`} className="block mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-sm font-bold">
                        {post.author.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <nav className="mt-12 flex justify-center" aria-label="Pagination">
          <div className="flex rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-sky-700 hover:bg-gray-50"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
        </nav>

        {/* Newsletter */}
        <div className="mt-16 bg-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Get the latest exam preparation tips, study materials, and exclusive offers delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 w-full"
            />
            <button className="bg-white text-sky-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg whitespace-nowrap transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
