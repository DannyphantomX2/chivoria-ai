"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { MODULES, LESSON_CONTENT } from "@/lib/course-content";
import LessonBlocks from "@/components/LessonBlocks";
import { ChevronLeft, ChevronRight, CheckCircle2, Circle } from "lucide-react";

export default function ModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const module = MODULES.find((m) => m.id === id);
  const content = LESSON_CONTENT[id];
  const [openLesson, setOpenLesson] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data.completed) setCompleted(data.completed);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (openLesson >= 0 && content) {
      fetch("/api/progress/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId: id, lessonIndex: openLesson }),
      }).catch(() => {});
    }
  }, [openLesson, id, content]);

  function isDone(lessonIndex) {
    return completed.some((c) => c.moduleId === id && c.lessonIndex === lessonIndex);
  }

  async function markComplete(lessonIndex) {
    if (isDone(lessonIndex)) return;
    setCompleted((c) => [...c, { moduleId: id, lessonIndex }]);
    try {
      await fetch("/api/progress/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId: id, lessonIndex }),
      });
    } catch {
      setCompleted((c) => c.filter((x) => !(x.moduleId === id && x.lessonIndex === lessonIndex)));
    }
  }

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#14130F", color: "#EDE7DA" }}>
        <p>Module not found.</p>
      </div>
    );
  }

  const nextModule = MODULES.find((m) => m.id === id + 1);

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

        {!content && (
          <div className="rounded-xl border p-6" style={{ background: "#1E1C17", borderColor: "rgba(237,231,218,0.08)" }}>
            <p className="text-sm" style={{ color: "#7A7568" }}>Content for this module is not added yet.</p>
          </div>
        )}

        {content && (
          <div className="flex flex-col gap-2">
            {content.lessons.map((lesson, i) => (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ background: "#1E1C17", borderColor: "rgba(237,231,218,0.08)" }}>
                <button
                  onClick={() => setOpenLesson(openLesson === i ? -1 : i)}
                  className="w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-2"
                >
                  {isDone(i) ? <CheckCircle2 size={14} color="#3FA9A0" /> : <Circle size={14} color="#7A7568" />}
                  {lesson.title}
                </button>
                {openLesson === i && (
                  <div className="px-4 pb-4">
                    <LessonBlocks blocks={lesson.blocks} moduleId={id} lessonIndex={i} />

                    <div className="flex items-center justify-between mt-5 pt-4 border-t flex-wrap gap-3" style={{ borderColor: "rgba(237,231,218,0.08)" }}>
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
                        onClick={() => markComplete(i)}
                        disabled={isDone(i)}
                        className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg font-medium"
                        style={{
                          background: isDone(i) ? "transparent" : "rgba(232,163,61,0.12)",
                          color: "#E8A33D",
                        }}
                      >
                        <CheckCircle2 size={14} /> {isDone(i) ? "Completed" : "Mark complete"}
                      </button>

                      {i < content.lessons.length - 1 ? (
                        <button
                          onClick={() => setOpenLesson(i + 1)}
                          className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg font-medium"
                          style={{ background: "#E8A33D", color: "#14130F" }}
                        >
                          Next lesson <ChevronRight size={14} />
                        </button>
                      ) : nextModule ? (
                        <button
                          onClick={() => router.push(`/modules/${nextModule.id}`)}
                          className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg font-medium"
                          style={{ background: "#E8A33D", color: "#14130F" }}
                        >
                          Start Module {nextModule.id} <ChevronRight size={14} />
                        </button>
                      ) : (
                        <span className="text-xs" style={{ color: "#4A473F" }}>Last module</span>
                      )}
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
