// src/app/blogs/page.js
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from '../components/Header';
import Contact from '../components/Contact';
import Copyright from '../components/Copyright';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Fetching data directly in the component
export default async function BlogPage() {
  const dirPath = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(dirPath);

  // Get blog data from each file
  const blogs = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent); // Extract front matter
    return { ...data, slug: file.replace('.md', '') }; // Add slug for linking
  });

  return (
    <>
      <Navbar />
      <div className="bg-black dark:bg-gray-900 text-center py-16">
        <h1 className="text-4xl font-bold text-white">My Latest Blogs</h1>
        <p className="text-xl text-white mt-4">
          Insights and updates from my portfolio and tech adventures.
        </p>
      </div>
      <div className="py-8 px-4 lg:py-16 lg:px-12">
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="mb-4">{blog.description}</p>
                <div className="text-sm mb-4">
                  <span>By {blog.author}</span> |{' '}
                  <span>
                    {new Date(blog.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Copyright />
    </>
  );
}
