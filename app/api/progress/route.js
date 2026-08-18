import { auth } from "@/auth";
import pool from "@/lib/db";
import { LESSON_CONTENT } from "@/lib/course-content";

function calculateStreak(dateStrings) {
  if (dateStrings.length === 0) return 0;
  const dateSet = new Set(dateStrings);
  const oneDay = 24 * 60 * 60 * 1000;
  let cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  const todayStr = cursor.toISOString().slice(0, 10);
  if (!dateSet.has(todayStr)) {
    cursor = new Date(cursor.getTime() - oneDay);
  }

  let streak = 0;
  while (dateSet.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor = new Date(cursor.getTime() - oneDay);
  }
  return streak;
}

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
      streak: 0,
      streakDays: [],
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

  const streakDatesResult = await pool.query(
    "SELECT DISTINCT completed_at::date AS d FROM lesson_progress WHERE user_id = $1 ORDER BY d",
    [userId]
  );
  const dateStrings = streakDatesResult.rows.map((r) => r.d.toISOString().slice(0, 10));
  const streak = calculateStreak(dateStrings);

  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - i);
    const dStr = d.toISOString().slice(0, 10);
    last7.push({ label: d.toLocaleDateString("en-US", { weekday: "narrow" }), active: dateStrings.includes(dStr) });
  }

  const completedCount = completed.length;
  const certificatePercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return Response.json({
    completedCount,
    totalLessons,
    certificatePercent,
    watchMinutes,
    completed,
    lastViewed,
    loggedIn: true,
    streak,
    streakDays: last7,
  });
}
