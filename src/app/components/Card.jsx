export default function Card({ children, className = '', hoverEffect = true }) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-xl overflow-hidden
        shadow-md dark:shadow-none
        border border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/50' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
