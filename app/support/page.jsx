import Link from "next/link";
import { HelpCircle, Mail } from "lucide-react";

const SUPPORT_EMAIL = "chivoriacreative@gmail.com";

const FAQ = [
  { q: "How does the free trial work?", a: "Module 1 stays open for a set number of days from the day you sign up. You can see the countdown on the dashboard." },
  { q: "Do I pay per module or once for everything?", a: "One payment opens Modules 2 through 6 for good, plus every bonus. There is no per-module charge." },
  { q: "I signed up with Google but nothing happened.", a: "Reload the dashboard page. If it still does not show your account, contact support below." },
  { q: "Can I get a refund?", a: "Reach out to support with your account email and we will sort it out." },
];

export default function SupportPage() {
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
        <div className="flex items-center gap-2 mt-2 mb-6">
          <HelpCircle size={18} color="var(--accent)" />
          <h1 className="font-display text-2xl font-semibold">Support</h1>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-xl border p-4" style={{ background: "var(--bg-panel)", borderColor: "var(--border)" }}>
              <p className="text-sm font-medium">{item.q}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{item.a}</p>
            </div>
          ))}
        </div>

        
        <a
          href={"mailto:" + SUPPORT_EMAIL}
          className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-lg"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          <Mail size={16} /> Email {SUPPORT_EMAIL}
        </a>
      </div>
    </div>
  );
}
