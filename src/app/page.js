"use client";

import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-5xl font-bold text-blue-700 mb-4 text-center">
        Find Your Perfect Neighborhood
      </h1>
      <p className="text-gray-600 text-xl text-center max-w-xl mb-8">
        Discover the best areas that match your lifestyle preferences.
      </p>
      <Link href="/preferences">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </main>
  );
}
