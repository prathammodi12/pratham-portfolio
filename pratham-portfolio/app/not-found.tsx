import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0a0a0a] px-4">
      <div className="max-w-md w-full text-center glass-panel p-8 rounded-3xl border-slate-200 dark:border-slate-800">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Could not find requested resource.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
