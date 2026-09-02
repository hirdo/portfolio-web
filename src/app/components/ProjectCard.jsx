'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import TechBadge from './TechBadge';

function PhoneFrame({ src, alt, className = '', style = {} }) {
  return (
    <div
      className={`rounded-3xl overflow-hidden border-4 border-gray-300 dark:border-gray-600 ${className}`}
      style={style}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const isMobile = project.type === 'mobile';
  const images = project.images;
  const phoneCount = images?.length || 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
      <div className="grid md:grid-cols-2 gap-0">
        {isMobile ? (
          <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-4 sm:p-6 md:p-8 min-h-[280px] md:min-h-[420px]">
            {phoneCount >= 3 ? (
              <div className="relative w-full h-[340px] sm:h-[380px] md:h-[420px]">
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: 'translate(calc(-50% - 85px), calc(-50% + 20px)) rotate(-6deg)',
                    zIndex: 10,
                  }}
                >
                  <PhoneFrame
                    src={images[0]}
                    alt={`${project.title} screen 1`}
                    className="w-28 md:w-32 h-[260px] md:h-[290px] shadow-xl opacity-90"
                  />
                </div>
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: 'translate(-50%, -50%)',
                    zIndex: 30,
                  }}
                >
                  <PhoneFrame
                    src={images[1]}
                    alt={`${project.title} screen 2`}
                    className="w-32 md:w-36 h-[290px] md:h-[320px] shadow-2xl"
                  />
                </div>
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: 'translate(calc(-50% + 85px), calc(-50% - 15px)) rotate(6deg)',
                    zIndex: 10,
                  }}
                >
                  <PhoneFrame
                    src={images[2]}
                    alt={`${project.title} screen 3`}
                    className="w-28 md:w-32 h-[260px] md:h-[290px] shadow-xl opacity-90"
                  />
                </div>
              </div>
            ) : phoneCount === 2 ? (
              <div className="relative w-full h-[340px] sm:h-[370px] md:h-[400px]">
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: 'translate(calc(-50% + 40px), calc(-50% + 20px)) rotate(4deg)',
                    zIndex: 10,
                  }}
                >
                  <PhoneFrame
                    src={images[1]}
                    alt={`${project.title} screen 2`}
                    className="w-32 md:w-36 h-[290px] md:h-[320px] shadow-xl opacity-85"
                  />
                </div>
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: 'translate(calc(-50% - 20px), calc(-50% - 5px))',
                    zIndex: 20,
                  }}
                >
                  <PhoneFrame
                    src={images[0]}
                    alt={`${project.title} screen 1`}
                    className="w-36 md:w-40 h-[310px] md:h-[350px] shadow-2xl"
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-48 h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300 dark:border-gray-600">
                <Image
                  src={project.image || images?.[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
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
