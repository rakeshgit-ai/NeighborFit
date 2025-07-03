"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import neighborhoods from "../../data/neighborhoods.json";

export default function Preferences() {
  const router = useRouter();
  const [form, setForm] = useState({
    walkability: 5,
    nightlife: 5,
    price: 5,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: Number(e.target.value) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/match", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    window.localStorage.setItem("results", JSON.stringify(data));
    router.push("/results");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Set Your Lifestyle Preferences
      </h1>

      <div className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Walkability (1-10):
          <input
            type="number"
            name="walkability"
            min="1"
            max="10"
            value={form.walkability}
            onChange={handleChange}
            className="mt-1 p-2 border rounded"
          />
        </label>

        <label className="flex flex-col">
          Nightlife (1-10):
          <input
            type="number"
            name="nightlife"
            min="1"
            max="10"
            value={form.nightlife}
            onChange={handleChange}
            className="mt-1 p-2 border rounded"
          />
        </label>

        <label className="flex flex-col">
          Price (1-10):
          <input
            type="number"
            name="price"
            min="1"
            max="10"
            value={form.price}
            onChange={handleChange}
            className="mt-1 p-2 border rounded"
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Find Matching Neighborhoods
      </button>
    </form>
  );
}

export async function POST(req) {
  const prefs = await req.json();
  const results = neighborhoods
    .map((n) => ({
      ...n,
      score:
        100 -
        (Math.abs(n.walkability - prefs.walkability) * 10 +
          Math.abs(n.nightlife - prefs.nightlife) * 10 +
          Math.abs(n.price - prefs.price) * 10),
    }))
    .sort((a, b) => b.score - a.score);
  return Response.json(results);
}