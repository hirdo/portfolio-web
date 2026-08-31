import Navbar from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import PageHero from '../components/PageHero';
import BlogsClient from './BlogsClient';
import { fetchDevToArticles, extractUniqueTags } from '@/lib/devto';

export default async function BlogPage() {
  const articles = await fetchDevToArticles();
  const tags = extractUniqueTags(articles);

  return (
    <>
      <Navbar />

      <PageHero
        title="My Blogs"
        subtitle="Insights and updates from my portfolio and tech adventures. Dive into articles about AI, web development, cybersecurity, and more."
      />

      <BlogsClient articles={articles} tags={tags} />

      <Footer />
      <Copyright />
    </>
  );
}
