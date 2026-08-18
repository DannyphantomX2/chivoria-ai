import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const sql = `
CREATE TABLE IF NOT EXISTS lesson_watch (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL,
  lesson_index INTEGER NOT NULL,
  seconds INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, module_id, lesson_index)
);
`;

async function run() {
  await pool.query(sql);
  console.log("watch table ready");
  await pool.end();
}

run().catch((err) => {
  console.error("Failed to set up watch table:", err.message);
  process.exit(1);
});
