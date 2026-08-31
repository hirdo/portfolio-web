'use client';

import { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/GradientText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

export default function BlogsClient({ articles, tags }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return articles;
    return articles.filter((article) =>
      article.tag_list?.[0] === activeCategory.toLowerCase()
    );
  }, [activeCategory, articles]);

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Latest <GradientText className="text-4xl font-bold">Articles</GradientText>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Filter by topic to find what interests you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CategoryFilter
            categories={tags}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </ScrollReveal>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 100}>
                <BlogCard blog={article} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <FontAwesomeIcon icon={faInbox} className="text-2xl text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No posts found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try selecting a different category.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </main>
  );
}
