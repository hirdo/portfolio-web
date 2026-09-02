'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import TechBadge from './TechBadge';

export default function ProjectCard({ project }) {
  const isMobile = project.type === 'mobile';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
      <div className="grid md:grid-cols-2 gap-0">
        {isMobile ? (
          <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8 min-h-[280px]">
            <div className="relative w-48 h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300 dark:border-gray-600">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="p-8 flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags?.map((tag, i) => (
              <TechBadge key={i} label={tag} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {isMobile ? (
              <>
                {project.appStoreLink && (
                  <Link
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <FontAwesomeIcon icon={faApple} className="text-lg" />
                    App Store
                  </Link>
                )}
                {project.playStoreLink && (
                  <Link
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <FontAwesomeIcon icon={faGooglePlay} className="text-sm" />
                    Play Store
                  </Link>
                )}
              </>
            ) : (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Live
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
              </Link>
            )}
            {project.sourceLink && (
              <Link
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
              >
                Source Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
