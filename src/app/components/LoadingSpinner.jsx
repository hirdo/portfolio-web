'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 dark:bg-gray-950/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-14 h-14 rounded-full border-4 border-gray-200 dark:border-gray-700" />
        {/* Spinning gradient arc */}
        <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-transparent border-t-[#1E90FF] border-r-[#FF1493] animate-spin" />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#FF1493] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
