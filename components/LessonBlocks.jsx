export default function LessonBlocks({ blocks, moduleId, lessonIndex }) {
  function handleVideoEnded(e) {
    const seconds = Math.round(e.target.duration || 0);
    if (!seconds) return;
    fetch("/api/progress/watch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, lessonIndex, seconds }),
    }).catch(() => {});
  }

  return (
    <div className="flex flex-col gap-2">
      {blocks.map((b, i) => {
        if (b.t === "video") {
          return (
            <div key={i} className="rounded-lg overflow-hidden" style={{ background: "#000" }}>
              <video
                controls
                playsInline
                src={b.c}
                onEnded={handleVideoEnded}
                className="w-full"
                style={{ maxHeight: "480px", display: "block" }}
              />
            </div>
          );
        }
        if (b.t === "h") {
          return (
            <h3 key={i} className="font-display text-sm font-semibold mt-3" style={{ color: "var(--accent, #E8A33D)" }}>
              {b.c}
            </h3>
          );
        }
        if (b.t === "list") {
          return (
            <ul key={i} className="list-disc pl-5 flex flex-col gap-1">
              {b.c.map((item, j) => (
                <li key={j} className="text-sm leading-relaxed" style={{ color: "var(--text-secondary, #B8B2A3)" }}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (b.t === "ex") {
          return (
            <div
              key={i}
              className="rounded-lg p-3 border text-sm font-mono leading-relaxed"
              style={{ background: "var(--bg-input, #171610)", borderColor: "var(--border-strong, rgba(237,231,218,0.15))", color: "var(--accent, #E8A33D)" }}
            >
              {b.c}
            </div>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text, #EDE7DA)" }}>
            {b.c}
          </p>
        );
      })}
    </div>
  );
}
