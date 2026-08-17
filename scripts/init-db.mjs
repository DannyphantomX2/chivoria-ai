import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const sql = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  google_id TEXT UNIQUE,
  paid BOOLEAN DEFAULT FALSE,
  trial_expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '7 days'),
  created_at TIMESTAMP DEFAULT NOW()
);
`;

async function run() {
  await pool.query(sql);
  console.log("users table ready");
  await pool.end();
}

run().catch((err) => {
  console.error("Failed to set up the table:", err.message);
  process.exit(1);
});
