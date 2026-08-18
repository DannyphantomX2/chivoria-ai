import { auth } from "@/auth";
import pool from "@/lib/db";
import { LESSON_CONTENT } from "@/lib/course-content";

export async function GET() {
  const totalLessons = Object.values(LESSON_CONTENT).reduce((sum, m) => sum + m.lessons.length, 0);

  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({
      completedCount: 0,
      totalLessons,
      certificatePercent: 0,
      watchMinutes: 0,
      completed: [],
      lastViewed: null,
      loggedIn: false,
    });
  }
  const userId = session.user.id;

  const completedResult = await pool.query(
    "SELECT module_id, lesson_index FROM lesson_progress WHERE user_id = $1",
    [userId]
  );
  const completed = completedResult.rows.map((r) => ({ moduleId: r.module_id, lessonIndex: r.lesson_index }));

  const lastViewedResult = await pool.query(
    "SELECT module_id, lesson_index FROM last_viewed WHERE user_id = $1",
    [userId]
  );
  const lastViewed = lastViewedResult.rows[0]
    ? { moduleId: lastViewedResult.rows[0].module_id, lessonIndex: lastViewedResult.rows[0].lesson_index }
    : null;

  const watchResult = await pool.query(
    "SELECT COALESCE(SUM(seconds), 0) AS total_seconds FROM lesson_watch WHERE user_id = $1",
    [userId]
  );
  const watchMinutes = Math.round((watchResult.rows[0]?.total_seconds || 0) / 60);

  const completedCount = completed.length;
  const certificatePercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return Response.json({ completedCount, totalLessons, certificatePercent, watchMinutes, completed, lastViewed, loggedIn: true });
}
