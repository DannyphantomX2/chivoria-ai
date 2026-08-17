import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const sql = `
CREATE TABLE IF NOT EXISTS lesson_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL,
  lesson_index INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, module_id, lesson_index)
);

CREATE TABLE IF NOT EXISTS last_viewed (
  user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL,
  lesson_index INTEGER NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
);
`;

async function run() {
  await pool.query(sql);
  console.log("progress tables ready");
  await pool.end();
}

run().catch((err) => {
  console.error("Failed to set up progress tables:", err.message);
  process.exit(1);
});
