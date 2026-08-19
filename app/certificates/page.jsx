"use client";

import { useState, useEffect } from "react";
import { Award, Download } from "lucide-react";

export default function CertificatesPage() {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => { if (!data.error) setProgress(data); })
      .catch(() => {});
  }, []);

  const done = progress?.certificatePercent === 100;

  return (
    <div className="min-h-screen w-full px-5 md:px-10 py-10" style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-2xl font-semibold mb-6">Certificate</h1>

        {!progress && <p className="text-sm" style={{ color: "var(--text-muted)" }}>Loading...</p>}

        {progress && !done && (
          <div className="rounded-xl border p-6" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
            <Award size={28} color="var(--text-muted)" />
            <p className="text-sm font-medium mt-3">Not yet unlocked</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              You've completed {progress.completedCount} of {progress.totalLessons} lessons ({progress.certificatePercent}%). Finish every lesson in every module to unlock your certificate.
            </p>
          </div>
        )}

        {progress && done && (
          <div className="rounded-xl border p-6 flex flex-col items-center gap-4" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
            <img src="/api/certificate" alt="Certificate of completion" className="w-full rounded-lg border" style={{ borderColor: "var(--border)" }} />
            <a href="/api/certificate" download="chivoria-certificate.png" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg" style={{ background: "var(--accent)", color: "var(--bg)" }}>
              <Download size={16} /> Download certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
