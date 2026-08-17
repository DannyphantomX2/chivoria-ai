"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MODULES, LESSON_CONTENT } from "@/lib/course-content";
import LessonBlocks from "@/components/LessonBlocks";
import { Lock, ChevronLeft, ChevronRight } from "lucide-react";

export default function ModuleDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const module = MODULES.find((m) => m.id === id);
  const content = LESSON_CONTENT[id];
  const [openLesson, setOpenLesson] = useState(0);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#14130F", color: "#EDE7DA" }}>
        <p>Module not found.</p>
      </div>
    );
  }

  const canOpen = module.free;

  return (
    <div
      className="min-h-screen w-full px-5 md:px-10 py-10"
      style={{ background: "#14130F", color: "#EDE7DA", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <Link href="/modules" className="text-xs" style={{ color: "#7A7568" }}>
          Back to modules
        </Link>
        <h1 className="font-display text-2xl font-semibold mt-2 mb-6">
          Module {module.id}: {module.title}
        </h1>

        {!canOpen && (
          <div className="rounded-xl border p-6 flex items-center gap-3" style={{ background: "#1E1C17", borderColor: "rgba(232,163,61,0.35)" }}>
            <Lock size={20} color="#E8A33D" />
            <div>
              <p className="text-sm font-medium">This module is locked.</p>
              <p className="text-xs mt-1" style={{ color: "#7A7568" }}>
                Pay once on the dashboard to open Modules 2 through 6.
              </p>
            </div>
          </div>
        )}

        {canOpen && !content && (
          <div className="rounded-xl border p-6" style={{ background: "#1E1C17", borderColor: "rgba(237,231,218,0.08)" }}>
            <p className="text-sm" style={{ color: "#7A7568" }}>Content for this module is not added yet.</p>
          </div>
        )}

        {canOpen && content && (
          <div className="flex flex-col gap-2">
            {content.lessons.map((lesson, i) => (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ background: "#1E1C17", borderColor: "rgba(237,231,218,0.08)" }}>
                <button
                  onClick={() => setOpenLesson(openLesson === i ? -1 : i)}
                  className="w-full text-left px-4 py-3 text-sm font-medium"
                >
                  {lesson.title}
                </button>
                {openLesson === i && (
                  <div className="px-4 pb-4">
                    <LessonBlocks blocks={lesson.blocks} />

                    <div className="flex items-center justify-between mt-5 pt-4 border-t" style={{ borderColor: "rgba(237,231,218,0.08)" }}>
                      <button
                        onClick={() => setOpenLesson(i - 1)}
                        disabled={i === 0}
                        className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg"
                        style={{
                          color: i === 0 ? "#4A473F" : "#B8B2A3",
                          background: i === 0 ? "transparent" : "rgba(237,231,218,0.06)",
                        }}
                      >
                        <ChevronLeft size={14} /> Previous
                      </button>
                      <button
                        onClick={() => setOpenLesson(i + 1)}
                        disabled={i === content.lessons.length - 1}
                        className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg font-medium"
                        style={{
                          color: i === content.lessons.length - 1 ? "#4A473F" : "#14130F",
                          background: i === content.lessons.length - 1 ? "transparent" : "#E8A33D",
                        }}
                      >
                        Next lesson <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
