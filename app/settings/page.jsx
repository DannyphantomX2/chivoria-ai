import Link from "next/link";
import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";
import ThemeToggle from "@/components/ThemeToggle";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div
      className="min-h-screen w-full px-5 md:px-10 py-10"
      style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="max-w-lg mx-auto">
        <Link href="/dashboard" className="text-xs" style={{ color: "var(--text-muted)" }}>
          Back to dashboard
        </Link>
        <h1 className="font-display text-2xl font-semibold mt-2 mb-6">Settings</h1>

        <div className="rounded-xl border p-6 mb-4" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
          <p className="text-sm font-medium mb-1">Appearance</p>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            Switch between dark and light mode. This is saved on this device.
          </p>
          <ThemeToggle />
        </div>

        {!session && (
          <div className="rounded-xl border p-6" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              You are not logged in. <Link href="/login" style={{ color: "var(--accent)" }}>Log in</Link> to see your account.
            </p>
          </div>
        )}

        {session && (
          <div className="rounded-xl border p-6" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
            <div className="flex items-center gap-4 mb-6">
              {session.user?.image ? (
                <img src={session.user.image} alt="" className="w-14 h-14 rounded-full" />
              ) : (
                <div className="w-14 h-14 rounded-full" style={{ background: "var(--teal)" }} />
              )}
              <div>
                <p className="text-sm font-medium">{session.user?.name || "No name on file"}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{session.user?.email}</p>
              </div>
            </div>

            <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
              Account details come straight from your Google sign-in for now. Editing them here arrives once the database step is connected.
            </p>

            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  );
}
