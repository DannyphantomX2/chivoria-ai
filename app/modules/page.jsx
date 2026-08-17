"use client";

import Link from "next/link";
import { MODULES } from "@/lib/course-content";
import { CheckCircle2 } from "lucide-react";

export default function ModulesPage() {
  return (
    <div
      className="min-h-screen w-full px-5 md:px-10 py-10"
      style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-xs" style={{ color: "var(--text-muted)" }}>
          Back to dashboard
        </Link>
        <h1 className="font-display text-2xl font-semibold mt-2 mb-6">My Modules</h1>

        <div className="grid sm:grid-cols-2 gap-4">
          {MODULES.map((m) => (
            <Link
              key={m.id}
              href={`/modules/${m.id}`}
              className="rounded-xl border p-4 flex items-start gap-3"
              style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-soft)" }}>
                <m.icon size={18} color="var(--accent)" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Module {m.id}: {m.title}</p>
                  <CheckCircle2 size={14} color="var(--teal)" />
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {m.minutes} min · Full access
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
