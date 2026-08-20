'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';

const categoryColors = {
  'AI': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700',
  'Web Development': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700',
  'Cybersecurity': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-700',
  'Data Science': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700',
  'Machine Learning': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-700',
};

export default function BlogCard({ blog }) {
  const categoryStyle = categoryColors[blog.category] || categoryColors['Web Development'];

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold border ${categoryStyle} whitespace-nowrap`}>
            {blog.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:underline decoration-blue-500 underline-offset-4 min-h-[3.5rem] line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {blog.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">By {blog.author}</span>
            <span>|</span>
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-xs" />
            <span>{blog.readingTime} min read</span>
          </div>
        </div>

        <Link
          href={`/blogpost/${blog.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Read Article
          <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
