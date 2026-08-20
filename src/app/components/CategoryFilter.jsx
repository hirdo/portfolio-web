'use client';

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${isActive
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
