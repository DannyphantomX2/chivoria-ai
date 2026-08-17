"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Film } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setLoading(false);
      setMessage(data.error || "Could not create the account.");
      return;
    }

    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (result?.error) {
      setMessage("Account created. Log in with your new email and password.");
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
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "var(--accent)" }}>
            <Film size={16} color="var(--bg)" />
          </div>
          <span className="font-display text-lg font-semibold uppercase tracking-tight">
            Chivoria <span style={{ color: "var(--accent)" }}>AI</span>
          </span>
        </div>

        <div className="rounded-xl border p-6" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
          <h1 className="font-display text-xl font-semibold mb-1">Create an account</h1>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Module 1 opens the moment you sign up.
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg border mb-5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text)" }}
          >
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="text-xs" style={{ color: "var(--text-muted)" }}>Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ background: "var(--bg-input)", borderColor: "var(--border-strong)", color: "var(--text)" }}
              />
            </div>
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

            {message && (
              <p className="text-xs" style={{ color: "#E07856" }}>{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 font-display font-semibold text-sm py-2.5 rounded-lg"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>

          <p className="text-xs mt-5 text-center" style={{ color: "var(--text-muted)" }}>
            Already have an account? <a href="/login" style={{ color: "var(--accent)" }}>Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
