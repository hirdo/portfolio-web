import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactInfoCard({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
        <FontAwesomeIcon icon={icon} className="text-xl text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">{label}</p>
        <p className="font-medium text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }

  return content;
}
