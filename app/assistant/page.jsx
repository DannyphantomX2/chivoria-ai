"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Copy, Check } from "lucide-react";

const FIELDS = [
  { key: "shot", label: "Shot type", placeholder: "wide shot, close-up, tracking shot" },
  { key: "character", label: "Character", placeholder: "22-year-old African woman, dark curly hair" },
  { key: "action", label: "Action", placeholder: "walking slowly, looking back over her shoulder" },
  { key: "environment", label: "Environment", placeholder: "rainy Lagos street at night" },
  { key: "time", label: "Time", placeholder: "night, golden hour, midday" },
  { key: "clothing", label: "Clothing", placeholder: "long dark coat, sneakers" },
  { key: "lighting", label: "Lighting", placeholder: "cinematic, neon reflections, natural light" },
  { key: "camera", label: "Camera movement", placeholder: "slow tracking shot from behind" },
  { key: "style", label: "Visual style", placeholder: "realistic photography, editorial" },
  { key: "mood", label: "Mood", placeholder: "mysterious, tense, hopeful" },
  { key: "consistency", label: "Consistency requirements", placeholder: "keep facial identity and hairstyle consistent" },
];

export default function AssistantPage() {
  const [values, setValues] = useState({});
  const [copied, setCopied] = useState(false);

  function update(key, value) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  const fallback = (key, label) => values[key]?.trim() || `[${label.toUpperCase()}]`;

  const prompt = `Create a ${fallback("shot", "shot type")} of ${fallback("character", "character")} ${fallback("action", "action")} in ${fallback("environment", "environment")} during ${fallback("time", "time")}. The character is wearing ${fallback("clothing", "clothing")}. Use ${fallback("lighting", "lighting")}, ${fallback("camera", "camera movement")}, ${fallback("style", "visual style")} and create a ${fallback("mood", "mood")} atmosphere. Maintain ${fallback("consistency", "consistency requirements")}.`;

  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className="min-h-screen w-full px-5 md:px-10 py-10"
      style={{ background: "#14130F", color: "#EDE7DA", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="max-w-2xl mx-auto">
        <Link href="/dashboard" className="text-xs" style={{ color: "#7A7568" }}>
          Back to dashboard
        </Link>
        <div className="flex items-center gap-2 mt-2 mb-2">
          <Sparkles size={18} color="#E8A33D" />
          <h1 className="font-display text-2xl font-semibold">AI Prompt Assistant</h1>
        </div>
        <p className="text-sm mb-6" style={{ color: "#7A7568" }}>
          Fill in what you know. This uses the template from Module 2, Lesson 9, and builds the finished prompt below as you type.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label className="text-xs" style={{ color: "#7A7568" }}>{f.label}</label>
              <input
                value={values[f.key] || ""}
                onChange={(e) => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full mt-1 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ background: "#171610", borderColor: "rgba(237,231,218,0.12)", color: "#EDE7DA" }}
              />
            </div>
          ))}
        </div>

        <div className="rounded-xl border p-4" style={{ background: "#1E1C17", borderColor: "rgba(232,163,61,0.3)" }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs uppercase tracking-wide" style={{ color: "#7A7568" }}>Finished prompt</p>
            <button onClick={copyPrompt} className="flex items-center gap-1 text-xs" style={{ color: "#E8A33D" }}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="font-mono text-sm leading-relaxed" style={{ color: "#E8A33D" }}>{prompt}</p>
        </div>
      </div>
    </div>
  );
}
