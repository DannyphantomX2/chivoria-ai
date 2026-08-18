import { auth } from "@/auth";
import pool from "@/lib/db";

export async function POST(request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Not logged in." }, { status: 401 });
  }
  const { moduleId, lessonIndex, seconds } = await request.json();

  await pool.query(
    `INSERT INTO lesson_watch (user_id, module_id, lesson_index, seconds)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (user_id, module_id, lesson_index) DO UPDATE SET seconds = EXCLUDED.seconds`,
    [session.user.id, moduleId, lessonIndex, seconds]
  );

  return Response.json({ success: true });
}
