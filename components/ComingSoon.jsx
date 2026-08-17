import Link from "next/link";

export default function ComingSoon({ title }) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4"
      style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center max-w-sm">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          This page is not built yet. It is on the list.
        </p>
        <Link
          href="/dashboard"
          className="inline-block text-sm font-medium px-4 py-2 rounded-lg"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
