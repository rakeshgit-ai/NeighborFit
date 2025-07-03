"use client";
import { useEffect, useState } from "react";

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("results") || "[]");
    setResults(data);
  }, []);

  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Your Matching Neighborhoods
      </h1>

      <div className="space-y-4 w-full max-w-xl">
        {results.map((area, idx) => (
          <div key={idx} className="p-4 bg-white shadow rounded flex justify-between">
            <span>{area.name}</span>
            <span className="font-semibold text-blue-600">
              Score: {area.score}%
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
