import React from "react";

export const Header = () => {
  return (
    <header className="sticky mx-auto max-w-5xl shadow-sm mt-6 mb-3 py-3 px-6 rounded-full bg-gray-500/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-slate-200">
      <nav className="flex justify-center items-center">
        <div className="text-xl font-semibold font-mono">TodayFocus</div>
      </nav>
    </header>
  );
};
