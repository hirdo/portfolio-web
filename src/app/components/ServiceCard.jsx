'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import TechBadge from './TechBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 100}>
      {/* 1. Thêm relative, overflow-hidden và group vào class bọc ngoài cùng */}
      <div className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

        {/* 2. Border ảo bên trái: Rộng 3px, chiều cao full, có hiệu ứng sáng lên khi hover */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#1E90FF] to-[#FF1493] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-pink-500/10 flex items-center justify-center mb-5">
          <FontAwesomeIcon
            icon={service.icon}
            className="text-2xl text-blue-600 dark:text-blue-400"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.techs?.map((tech, i) => (
            <TechBadge key={i} label={tech} />
          ))}
        </div>

        {service.features && service.features.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-auto focus:outline-none"
            >
              {expanded ? 'Show Less' : 'Learn More'}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className="transition-all duration-300 ease-in-out overflow-hidden"
              style={{ maxHeight: expanded ? '300px' : '0px', opacity: expanded ? 1 : 0 }}
            >
              <ul className="mt-3 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </ScrollReveal>
  );
}
