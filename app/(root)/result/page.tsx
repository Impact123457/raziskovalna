"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Issue = {
  code: string;
  message: string;
  selector: string;
  context: string;
  type: string;
};

type PageResult = {
  url: string;
  status: string;
  criticalErrors: Issue[];
  contrastErrors: Issue[];
  warnings: Issue[];
};

export default function ResultPage() {
  return (
    <Suspense fallback={<p className="text-center text-gray-400 animate-pulse">Loading…</p>}>
      <ResultContent />
    </Suspense>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const scannedUrl = searchParams.get("url") || "";
  const [results, setResults] = useState<PageResult[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!scannedUrl) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: scannedUrl }),
        });
        const data = await res.json();
        setResults(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [scannedUrl]);

  const Section = ({
    title,
    items,
    color,
  }: {
    title: string;
    items: Issue[];
    color: string;
  }) => {
    if (!items?.length) return null;

    return (
      <div className={`p-5 mb-6 rounded-xl shadow-md ${color}`}>
        <h3 className="text-2xl font-bold mb-4 border-b pb-2">
          {title} ({items.length})
        </h3>
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800">{item.message}</p>
              <p className="text-xs text-gray-500">
                <strong>WCAG:</strong> {item.code}
              </p>
              <p className="text-xs text-gray-500">
                <strong>Selector:</strong> {item.selector}
              </p>
              <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{item.context}</pre>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!scannedUrl)
    return <p className="text-center text-gray-600 mt-10">No URL provided.</p>;

  return (
    <div className="bg-gray-50 min-h-screen p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Rezultati za spletno stran: <span className="text-blue-500">{scannedUrl}</span>
      </h1>

      {loading && (
        <p className="text-center text-gray-400 animate-pulse">Scanning the website…</p>
      )}

      {results &&
        results.map((page, index) => (
          <div
            key={index}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200"
          >
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600">{page.status}</p>
            </div>

            <Section
              title="Critical Errors"
              items={page.criticalErrors}
              color="bg-red-50 border-red-400"
            />

            <Section
              title="Contrast Errors"
              items={page.contrastErrors}
              color="bg-orange-50 border-orange-400"
            />

            <Section
              title="Warnings"
              items={page.warnings}
              color="bg-yellow-50 border-yellow-400"
            />
          </div>
        ))}
    </div>
  );
}
