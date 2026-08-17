"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Film } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError("Email login is not connected to a database yet. Use Google sign-in below, or check back once that step is done.");
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4"
      style={{ background: "#14130F", color: "#EDE7DA", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "#E8A33D" }}>
            <Film size={16} color="#14130F" />
          </div>
          <span className="font-display text-lg font-semibold uppercase tracking-tight">
            Chivoria <span style={{ color: "#E8A33D" }}>AI</span>
          </span>
        </div>

        <div className="rounded-xl border p-6" style={{ background: "#1E1C17", borderColor: "rgba(237,231,218,0.08)" }}>
          <h1 className="font-display text-xl font-semibold mb-1">Log in</h1>
          <p className="text-sm mb-6" style={{ color: "#7A7568" }}>
            Pick up where you left off in the course.
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg border mb-5"
            style={{ borderColor: "rgba(237,231,218,0.15)", color: "#EDE7DA" }}
          >
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: "rgba(237,231,218,0.1)" }} />
            <span className="text-xs" style={{ color: "#7A7568" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(237,231,218,0.1)" }} />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="text-xs" style={{ color: "#7A7568" }}>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ background: "#171610", borderColor: "rgba(237,231,218,0.12)", color: "#EDE7DA" }}
              />
            </div>
            <div>
              <label className="text-xs" style={{ color: "#7A7568" }}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ background: "#171610", borderColor: "rgba(237,231,218,0.12)", color: "#EDE7DA" }}
              />
            </div>

            {error && (
              <p className="text-xs" style={{ color: "#E07856" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 font-display font-semibold text-sm py-2.5 rounded-lg"
              style={{ background: "#E8A33D", color: "#14130F" }}
            >
              {loading ? "Checking..." : "Log in"}
            </button>
          </form>

          <p className="text-xs mt-5 text-center" style={{ color: "#7A7568" }}>
            New here? <a href="/signup" style={{ color: "#E8A33D" }}>Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
