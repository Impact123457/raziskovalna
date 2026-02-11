"use client";

import { useState } from "react";

const SearchForm = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) return alert("Please enter a URL");

    setLoading(true);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Scan failed");

      window.location.href = `/result?url=${encodeURIComponent(url)}`;
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-150 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:ring-2"
      >
        <input
          name="query"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Vnesite URL (https://primer.com)"
          className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-sm"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="ml-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Analiziram..." : "Analiziraj"}
        </button>
      </form>

      {/* Loading message */}
      {loading && (
        <p className="mt-2 text-center text-white text-sm animate-pulse">
          Prosim počakajte, analiza lahko vzame nekaj minut...
        </p>
      )}
    </div>
  );
};

export default SearchForm;
