'use client';

import GradientText from './GradientText';

export default function PageHero({ title, subtitle }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col justify-center items-center space-y-4 py-24 px-4">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(30,144,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255,20,147,0.10) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Floating squares decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-[10%] w-8 h-8 border-2 border-blue-400/20 dark:border-blue-400/30 rotate-12" />
        <div className="absolute top-24 right-[15%] w-10 h-10 border-2 border-pink-400/15 dark:border-pink-400/20 -rotate-6" />
        <div className="absolute bottom-16 left-[40%] w-6 h-6 border-2 border-blue-400/15 dark:border-blue-400/20 rotate-45" />
        <div className="absolute bottom-8 right-[30%] w-12 h-12 border-2 border-pink-400/10 dark:border-pink-400/10 -rotate-12" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <GradientText className="font-bold">{title}</GradientText>
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed reveal-up">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent" />
    </div>
  );
}
