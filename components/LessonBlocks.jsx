export default function LessonBlocks({ blocks }) {
  return (
    <div className="flex flex-col gap-2">
      {blocks.map((b, i) => {
        if (b.t === "h") {
          return (
            <h3 key={i} className="font-display text-sm font-semibold mt-3" style={{ color: "#E8A33D" }}>
              {b.c}
            </h3>
          );
        }
        if (b.t === "list") {
          return (
            <ul key={i} className="list-disc pl-5 flex flex-col gap-1">
              {b.c.map((item, j) => (
                <li key={j} className="text-sm leading-relaxed" style={{ color: "#B8B2A3" }}>
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
              style={{ background: "#171610", borderColor: "rgba(232,163,61,0.3)", color: "#E8A33D" }}
            >
              {b.c}
            </div>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed" style={{ color: "#EDE7DA" }}>
            {b.c}
          </p>
        );
      })}
    </div>
  );
}
