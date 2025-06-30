"use client";

import { useState } from "react";

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    safety: 3,
    nightlife: 3,
    parks: 3,
    schools: 3,
    affordability: 3,
    commute: 3,
  });

  const handleChange = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("User preferences:", preferences);
    // later: make API call here
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Set Your Lifestyle Preferences
      </h1>

      <div className="w-full max-w-xl space-y-6">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between mb-1">
              <span className="capitalize text-gray-700">{key}</span>
              <span className="text-gray-500">{value}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={value}
              onChange={(e) => handleChange(key, parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Find Matching Neighborhoods
      </button>
    </main>
  );
}
