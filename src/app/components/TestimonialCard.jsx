export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-transparent relative overflow-hidden" style={{ borderImage: 'linear-gradient(to bottom, #1E90FF, #FF1493) 1' }}>
      <div className="mb-4">
        <svg className="w-8 h-8 text-blue-500/40" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
        </svg>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">{name}</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
