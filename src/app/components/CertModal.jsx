'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CertModal = ({ cert, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn" />

      {/* Modal Content */}
      <div
        className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>

        {/* Certificate Image */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-t-2xl overflow-hidden">
          {cert.image ? (
            <Image
              src={cert.image}
              alt={`${cert.title} Certificate`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-pink-500/10 mb-4">
                  <FontAwesomeIcon
                    icon={cert.icon}
                    className="text-3xl text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Certificate image coming soon
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Certificate Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Completed with excellence. This certification validates expertise in{' '}
            {cert.title.replace(' Course', '').replace(' for Beginners', '')}.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default CertModal;
