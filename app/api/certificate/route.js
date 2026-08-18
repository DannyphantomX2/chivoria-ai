import { ImageResponse } from "next/og";
import { auth } from "@/auth";
import pool from "@/lib/db";
import { LESSON_CONTENT } from "@/lib/course-content";

export const runtime = "nodejs";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("Not logged in", { status: 401 });
  }

  const totalLessons = Object.values(LESSON_CONTENT).reduce((sum, m) => sum + m.lessons.length, 0);
  const result = await pool.query("SELECT COUNT(*) FROM lesson_progress WHERE user_id = $1", [session.user.id]);
  const completedCount = Number(result.rows[0].count);

  if (completedCount < totalLessons) {
    return new Response("Course not yet completed", { status: 403 });
  }

  const name = session.user.name || "Student";
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#14130F",
          border: "16px solid #E8A33D",
          color: "#EDE7DA",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", position: "absolute", top: 40, left: 40, fontSize: 18, letterSpacing: 4, color: "#7A7568" }}>
          CHIVORIA
        </div>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#E8A33D", marginBottom: 24 }}>
          CERTIFICATE OF COMPLETION
        </div>
        <div style={{ display: "flex", fontSize: 18, color: "#B8B2A3", marginBottom: 10 }}>This certifies that</div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginBottom: 24 }}>{name}</div>
        <div style={{ display: "flex", fontSize: 18, color: "#B8B2A3", marginBottom: 6, textAlign: "center", maxWidth: 700 }}>
          has successfully completed the course
        </div>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 600, color: "#E8A33D", marginBottom: 44 }}>
          AI Video Creation for Beginners
        </div>
        <div style={{ display: "flex", fontSize: 16, color: "#7A7568" }}>Issued {date}</div>
      </div>
    ),
    { width: 1200, height: 800 }
  );
}
