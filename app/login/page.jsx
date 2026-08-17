"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (result?.error) {
      setError("Email or password didn't match. Try again.");
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4"
      style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center mb-8">
          <div className="rounded-lg p-1.5" style={{ background: "#FFFFFF" }}>
            <img src="/logo.jpg" alt="Chivoria" className="h-10 w-auto rounded-sm" />
          </div>
        </div>

        <div className="rounded-xl border p-6" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
          <h1 className="font-display text-xl font-semibold mb-1">Log in</h1>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Pick up where you left off in the course.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="text-xs" style={{ color: "var(--text-muted)" }}>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ background: "var(--bg-input)", borderColor: "var(--border-strong)", color: "var(--text)" }}
              />
            </div>
            <div>
              <label className="text-xs" style={{ color: "var(--text-muted)" }}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ background: "var(--bg-input)", borderColor: "var(--border-strong)", color: "var(--text)" }}
              />
            </div>

            {error && <p className="text-xs" style={{ color: "#E07856" }}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 font-display font-semibold text-sm py-2.5 rounded-lg"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              {loading ? "Checking..." : "Log in"}
            </button>
          </form>

          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full text-center text-xs mt-4"
            style={{ color: "var(--accent)" }}
          >
            Continue with Google
          </button>

          <p className="text-xs mt-5 text-center" style={{ color: "var(--text-muted)" }}>
            New here? <a href="/signup" style={{ color: "var(--accent)" }}>Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
