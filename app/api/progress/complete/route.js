import { auth } from "@/auth";
import pool from "@/lib/db";

export async function POST(request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Not logged in." }, { status: 401 });
  }
  const { moduleId, lessonIndex } = await request.json();

  await pool.query(
    `INSERT INTO lesson_progress (user_id, module_id, lesson_index)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, module_id, lesson_index) DO NOTHING`,
    [session.user.id, moduleId, lessonIndex]
  );

  return Response.json({ success: true });
}
