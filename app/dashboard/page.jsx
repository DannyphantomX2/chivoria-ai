"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { MODULES } from "@/lib/course-content";
import {
  LayoutDashboard,
  Compass,
  Sparkles,
  ClipboardList,
  Award,
  HelpCircle,
  Settings,
  Bell,
  Flame,
  Clock,
  CheckCircle2,
  PlayCircle,
  Gift,
  Menu,
  X,
} from "lucide-react";

const NAV = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "My Modules", icon: ClipboardList, href: "/modules" },
  { label: "Explore Courses", icon: Compass, href: "/explore" },
  { label: "AI Prompt Assistant", icon: Sparkles, href: "/assistant" },
  { label: "Bonuses", icon: Gift, href: "/bonuses" },
  { label: "Certificates", icon: Award, href: "/certificates" },
];

const STREAK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export default function CourseDashboard() {
  const [activeModule, setActiveModule] = useState(1);
  const [navOpen, setNavOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [progress, setProgress] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => { if (!data.error) setProgress(data); })
      .catch(() => {});
  }, []);

  const current = MODULES.find((m) => m.id === activeModule);

  function resume() {
    if (progress?.lastViewed) {
      router.push(`/modules/${progress.lastViewed.moduleId}?lesson=${progress.lastViewed.lessonIndex}`);
    } else {
      router.push("/modules/1");
    }
  }

  return (
    <div
      className="min-h-screen w-full flex"
      style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .sprocket {
          background-image: repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 10px,
            var(--border) 10px,
            var(--border) 16px
          );
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>

      {navOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setNavOpen(false)}
        />
      )}

      <aside
        className={`flex flex-col w-60 shrink-0 border-r px-4 py-6 fixed md:static inset-y-0 left-0 z-50 transition-transform duration-200 ${
          navOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ borderColor: "var(--border)", background: "var(--bg-sidebar)" }}
      >
        <div className="flex items-center justify-between px-2 mb-8">
          <div className="rounded-lg p-1.5" style={{ background: "#FFFFFF" }}>
            <img src="/logo.jpg" alt="Chivoria" className="h-9 w-auto rounded-sm" />
          </div>
          <button className="md:hidden" onClick={() => setNavOpen(false)}>
            <X size={18} color="var(--text-secondary)" />
          </button>
        </div>

        <p className="px-2 text-xs uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
          Main
        </p>
        <nav className="flex flex-col gap-1 mb-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors"
              style={
                pathname === item.href
                  ? { background: "var(--accent-soft)", color: "var(--accent)" }
                  : { color: "var(--text-secondary)" }
              }
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="px-2 text-xs uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
          Account
        </p>
        <nav className="flex flex-col gap-1">
          <Link href="/support" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left" style={{ color: "var(--text-secondary)" }}>
            <HelpCircle size={16} /> Support
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left" style={{ color: "var(--text-secondary)" }}>
            <Settings size={16} /> Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 px-5 md:px-8 py-6 max-w-6xl w-full">
        <div className="flex md:hidden items-center justify-between mb-6">
          <div className="rounded-lg p-1" style={{ background: "#FFFFFF" }}>
            <img src="/logo.jpg" alt="Chivoria" className="h-7 w-auto rounded-sm" />
          </div>
          <button onClick={() => setNavOpen(true)}>
            <Menu size={20} color="var(--text)" />
          </button>
        </div>

        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-semibold">Welcome back, {session?.user?.name?.split(" ")[0] || "there"}</h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              AI Video Creation for Beginners, you are mid-scene on Module {activeModule}.
            </p>
          </div>
          <div className="flex items-center gap-3 relative">
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="w-9 h-9 rounded-full flex items-center justify-center border"
              style={{ borderColor: "var(--border-strong)" }}
            >
              <Bell size={16} />
            </button>
            {notifOpen && (
              <div
                className="absolute right-0 top-11 w-56 rounded-lg border p-3 z-10"
                style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>No notifications yet.</p>
              </div>
            )}
            <div className="w-9 h-9 rounded-full" style={{ background: "var(--teal)" }} />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Modules unlocked", value: "6 / 6", note: "Full course open" },
            { label: "Lessons completed", value: String(progress?.completedCount ?? 0), note: progress ? `of ${progress.totalLessons} available` : "Loading..." },
            { label: "Watch time", value: `${progress?.watchMinutes ?? 0}m`, note: "Estimated from lessons done" },
            { label: "Certificate", value: `${progress?.certificatePercent ?? 0}%`, note: "Finish all modules to earn it" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 border" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</p>
              <p className="font-display text-2xl font-semibold mt-1">{s.value}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{s.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border p-5 mb-8" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
              Course timeline
            </h2>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              6 modules · {MODULES.reduce((a, m) => a + m.minutes, 0)} min
            </span>
          </div>

          <div className="relative sprocket pt-2 pb-3 rounded-lg" style={{ background: "var(--bg-input)" }}>
            <div className="flex gap-1 px-3 overflow-x-auto scrollbar-none">
              {MODULES.map((m) => {
                const isActive = m.id === activeModule;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(m.id)}
                    className="shrink-0 w-32 rounded-md p-3 text-left border transition-colors"
                    style={{
                      background: isActive ? "var(--accent-soft)" : "var(--bg-panel)",
                      borderColor: isActive ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <m.icon size={16} color={isActive ? "var(--accent)" : "var(--text-secondary)"} />
                      <CheckCircle2 size={14} color="var(--teal)" />
                    </div>
                    <p className="text-xs font-medium leading-snug">{m.title}</p>
                    <p className="font-mono text-[10px] mt-2" style={{ color: "var(--text-muted)" }}>
                      {String(m.id).padStart(2, "0")} · {m.minutes}m
                    </p>
                  </button>
                );
              })}
              <div
                className="shrink-0 w-32 rounded-md p-3 text-left border"
                style={{ borderColor: "rgba(63,169,160,0.4)", background: "rgba(63,169,160,0.08)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Gift size={16} color="var(--teal)" />
                  <CheckCircle2 size={14} color="var(--teal)" />
                </div>
                <p className="text-xs font-medium leading-snug">Bonus reel</p>
                <p className="font-mono text-[10px] mt-2" style={{ color: "var(--text-muted)" }}>4 extras</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 px-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-soft)" }}>
                <current.icon size={18} color="var(--accent)" />
              </div>
              <div>
                <p className="text-sm font-medium">Module {current.id}: {current.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Included with your access</p>
              </div>
            </div>
            <button
              onClick={resume}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              <PlayCircle size={16} /> Resume module
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-xl border p-5" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Flame size={16} color={progress?.streak > 0 ? "var(--accent)" : "var(--text-muted)"} />
              <p className="text-sm font-medium">Streak {progress?.streak > 0 ? `- ${progress.streak} day${progress.streak === 1 ? "" : "s"}` : ""}</p>
            </div>
            <div className="flex gap-2">
              {(progress?.streakDays || STREAK_DAYS.map((d) => ({ label: d, active: false }))).map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full aspect-square rounded-md flex items-center justify-center"
                    style={{ background: d.active ? "var(--accent)" : "var(--border)" }}
                  />
                  <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{d.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
              {progress?.streak > 0 ? "Keep it going, finish a lesson today." : "Finish a lesson today to start your streak."}
            </p>
          </div>

          <div className="rounded-xl border p-5 md:col-span-2" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} color="var(--teal)" />
              <p className="text-sm font-medium">Recently studied</p>
            </div>
            <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
              {progress?.lastViewed ? (
                <p className="text-sm py-2.5" style={{ color: "var(--text-secondary)" }}>
                  Module {progress.lastViewed.moduleId}, lesson {progress.lastViewed.lessonIndex + 1}
                </p>
              ) : (
                <p className="text-sm py-2.5" style={{ color: "var(--text-muted)" }}>
                  Nothing studied yet. Start Module 1 on the timeline above.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
