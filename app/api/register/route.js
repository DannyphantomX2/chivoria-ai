import bcrypt from "bcryptjs";
import pool from "@/lib/db";

export async function POST(request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return Response.json({ error: "Fill in every field." }, { status: 400 });
  }
  if (password.length < 6) {
    return Response.json({ error: "Password needs at least 6 characters." }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash)
     VALUES ($1, $2, $3)
     ON CONFLICT (email) DO NOTHING
     RETURNING id`,
    [name, email, hash]
  );

  if (result.rows.length === 0) {
    return Response.json({ error: "An account with that email already exists." }, { status: 409 });
  }

  return Response.json({ success: true });
}
