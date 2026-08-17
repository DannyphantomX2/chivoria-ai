"use client";

import Link from "next/link";
import { Film } from "lucide-react";

export default function ExplorePage() {
  return (
    <div
      className="min-h-screen w-full px-5 md:px-10 py-10"
      style={{ background: "#14130F", color: "#EDE7DA", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <Link href="/dashboard" className="text-xs" style={{ color: "#7A7568" }}>
          Back to dashboard
        </Link>
        <h1 className="font-display text-2xl font-semibold mt-2 mb-6">Explore Courses</h1>

        <div className="rounded-xl border p-5 flex items-start gap-4" style={{ background: "#1E1C17", borderColor: "rgba(237,231,218,0.08)" }}>
          <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center" style={{ background: "rgba(232,163,61,0.14)" }}>
            <Film size={20} color="#E8A33D" />
          </div>
          <div>
            <p className="font-display font-semibold">AI Video Creation for Beginners</p>
            <p className="text-sm mt-1" style={{ color: "#7A7568" }}>
              Six modules, from your first AI content idea through to monetizing finished videos.
            </p>
            <Link
              href="/modules"
              className="inline-block text-sm font-medium mt-3 px-4 py-2 rounded-lg"
              style={{ background: "#E8A33D", color: "#14130F" }}
            >
              View modules
            </Link>
          </div>
        </div>

        <p className="text-xs mt-6" style={{ color: "#7A7568" }}>
          More courses land here as they are built.
        </p>
      </div>
    </div>
  );
}
