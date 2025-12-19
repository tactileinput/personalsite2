'use client';

import { useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashClick = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <div 
        onClick={handleSplashClick}
        className="fixed inset-0 flex items-center justify-center bg-white z-50"
      >
        <img
          src="/cross.png"
          alt="Tactile Input"
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 sm:px-8 py-8">
      {/* Email centered at top */}
      <a href="mailto:gabriel@tactileinput.net" className="text-xs text-black mb-12">
        gabriel@tactileinput.net
      </a>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 sm:gap-16">
        
        {/* Margin for Thought - Top on mobile, Left on desktop */}
        <div className="flex flex-col items-center gap-6 order-first sm:order-none">
          <div className="w-full max-w-96 aspect-square overflow-hidden shadow-2xl">
            <img
              src="/marginforthought.jpg"
              alt="Margin for Thought"
              className="w-full h-full object-cover"
            />
          </div>
          <a href="https://linktr.ee/marginforthought" target="_blank" rel="noopener noreferrer" className="text-black text-center underline">
            Margin for Thought
          </a>
        </div>
        
        {/* Growing In Between - Middle on desktop, Second on mobile */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-96 aspect-square overflow-hidden shadow-2xl">
            <img
              src="/growing/growing_in_between.jpg"
              alt="Growing In Between"
              className="w-full h-full object-cover"
            />
          </div>
          <a href="/growing/growing-in-between.png" target="_blank" rel="noopener noreferrer" className="text-black text-center underline">
            Growing In Between
          </a>
        </div>

        {/* Genesis - Right on desktop, Third on mobile */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-96 aspect-square overflow-hidden shadow-2xl">
            <img
              src="/genesis/artwork_atonal.u.png"
              alt="Genesis artwork"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-center">
            <a href="https://linktr.ee/tactileinput" target="_blank" rel="noopener noreferrer" className="underline">Genesis</a>
          </p>
        </div>

      </div>
    </div>
  );
}

