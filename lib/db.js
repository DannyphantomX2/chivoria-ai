import { Pool } from "pg";

const pool =
  global._pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

if (process.env.NODE_ENV !== "production") {
  global._pgPool = pool;
}

export default pool;
