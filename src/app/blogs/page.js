'use client';

import { useState, useMemo } from 'react';
import Navbar from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/GradientText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

const allCategories = ['All', 'AI', 'Web Development', 'Cybersecurity', 'Data Science', 'Machine Learning'];

// Hardcoded blog data extracted from markdown frontmatter for client component
const blogs = [
  {
    title: 'Advancement in the Field of AI',
    description: 'Explore the latest advancements in artificial intelligence and how they are shaping the future.',
    slug: 'advancement-in-ai',
    date: '21/01/2025',
    author: 'Hirdo',
    image: '/ai.webp',
    category: 'AI',
    readingTime: 5,
  },
  {
    title: 'ChatGPT vs. Gemini',
    description: 'A detailed comparison between ChatGPT and Gemini, exploring their strengths and use cases.',
    slug: 'chatgpt-vs-gemini',
    date: '18/01/2025',
    author: 'Hirdo',
    image: '/chatgpt.webp',
    category: 'AI',
    readingTime: 4,
  },
  {
    title: 'Why Data Science is Popular Nowadays',
    description: 'Explore the growing importance of data science in modern businesses and how it drives decision-making.',
    slug: 'importance-of-data-science-for-businesses',
    date: '12/02/2025',
    author: 'Hirdo',
    image: '/data-science.webp',
    category: 'Data Science',
    readingTime: 6,
  },
  {
    title: 'Projects of ML for Beginners',
    description: 'Explore beginner-friendly machine learning projects to kickstart your journey in AI and data science.',
    slug: 'machine-learning-projects-for-beginners',
    date: '02/01/2025',
    author: 'Hirdo',
    image: '/machine-learning.webp',
    category: 'Machine Learning',
    readingTime: 7,
  },
  {
    title: 'Trend Change Towards Cybersecurity',
    description: 'Exploring the evolving trends in cybersecurity and their implications for individuals and organizations.',
    slug: 'trend-change-cybersecurity',
    date: '09/01/2025',
    author: 'Hirdo',
    image: '/cyber-security.webp',
    category: 'Cybersecurity',
    readingTime: 5,
  },
  {
    title: 'Why Web Developers Are Still Needed in 2025',
    description: 'Exploring the evolving role of web developers in 2025 and why their skills are still in high demand.',
    slug: 'why-web-developer-needed-2025',
    date: '27/01/2025',
    author: 'Hirdo',
    image: '/developer.gif',
    category: 'Web Development',
    readingTime: 4,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') return blogs;
    return blogs.filter((blog) => blog.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <PageHero
        title="My Blogs"
        subtitle="Insights and updates from my portfolio and tech adventures. Dive into articles about AI, web development, cybersecurity, and more."
      />

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
              categories={allCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </ScrollReveal>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, index) => (
                <ScrollReveal key={blog.slug} delay={index * 100}>
                  <BlogCard blog={blog} index={index} />
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

      <Footer />
      <Copyright />
    </>
  );
}
