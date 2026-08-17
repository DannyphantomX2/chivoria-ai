import { auth } from "@/auth";
import pool from "@/lib/db";

export async function POST(request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Not logged in." }, { status: 401 });
  }
  const { moduleId, lessonIndex } = await request.json();

  await pool.query(
    `INSERT INTO last_viewed (user_id, module_id, lesson_index, updated_at)
     VALUES ($1, $2, $3, NOW())
     ON CONFLICT (user_id) DO UPDATE SET module_id = EXCLUDED.module_id, lesson_index = EXCLUDED.lesson_index, updated_at = NOW()`,
    [session.user.id, moduleId, lessonIndex]
  );

  return Response.json({ success: true });
}
