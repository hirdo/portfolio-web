export default function TechBadge({ label, className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        bg-blue-50 text-blue-700 border border-blue-200
        dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700
        ${className}
      `}
    >
      {label}
    </span>
  );
}
