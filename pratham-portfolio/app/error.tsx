"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0a0a0a] px-4">
      <div className="max-w-md w-full text-center glass-panel p-8 rounded-3xl border-red-500/20">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          An error occurred in this section. You can try refreshing the state.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
