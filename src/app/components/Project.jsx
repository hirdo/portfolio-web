'use client';

import { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import GradientText from './GradientText';
import TechBadge from './TechBadge';

const projects = [
  {
    id: 1,
    name: 'Icecream Website',
    description:
      "An online storefront designed to showcase artisanal ice cream flavors and dessert offerings for a cozy dessert brand.",
    tags: ["Lovable", "Supabase", "Typescript"],
    liveLink: 'https://sweethome-icecream.vercel.app/',
    githubLink: 'https://github.com/hirdo/sweethome-icecream',
    image: '/project_icecream.png',
    category: 'Food & Beverage',
  },
  {
    id: 2,
    name: 'Recipe Website',
    description:
      "A culinary exploration platform that allows users to search, filter using AI features like and discover authentic food recipes from all around the world from image or voice.",
    tags: ["Firebase Studio", "OpenAI", "Typescript", "CSS"],
    liveLink: 'https://worldwide-recipe.netlify.app/',
    githubLink: 'https://github.com/hirdo/worldwide_recipes',
    image: '/project_recipe.png',
    category: 'Guide',
  },
  {
    id: 3,
    name: "Bird's nest Selling Website",
    description:
      "An online storefront for Yến Sào Mười Thiết Đào Đào, a Vietnamese brand specializing in premium, 100% pure, and naturally harvested bird's nest products.",
    tags: ["Typescript", "Supabase", "JavaScript", "CSS3"],
    liveLink: 'https://yen-sao-muoi-thiet-dao-dao.vercel.app/',
    githubLink: 'https://github.com/hirdo/yen-sao-muoi-thiet-dao-dao',
    image: '/project_birdnest.png',
    category: 'E-Commerce',
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + projects.length) % projects.length);
  }, [currentIndex, goTo]);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % projects.length);
  }, [currentIndex, goTo]);

  // Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-16 lg:py-20 bg-gray-50 dark:bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Featured{' '}
              <GradientText className="text-4xl sm:text-5xl font-bold">
                Projects
              </GradientText>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              A selection of my recent work. Swipe through to explore each
              project.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal>
          <div className="relative">
            {/* Arrow Buttons */}
            <button
              onClick={prev}
              aria-label="Previous project"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>

            {/* Slide */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                      <div className="grid md:grid-cols-5 gap-0">
                        {/* Image */}
                        <div className="relative h-56 sm:h-64 md:h-auto md:min-h-[320px] overflow-hidden md:col-span-3">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                        </div>
                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col justify-center md:col-span-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                            {p.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {p.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                            {p.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {p.tags.map((tag, i) => (
                              <TechBadge key={i} label={tag} />
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <a
                              href={p.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                            >
                              View Live
                              <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className="text-xs"
                              />
                            </a>
                            <a
                              href={p.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                              <FontAwesomeIcon
                                icon={faGithub}
                                className="text-sm"
                              />
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[#1E90FF] to-[#FF1493]'
                      : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Project;
