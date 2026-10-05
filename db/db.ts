import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL_UNPOOLED;

if (!connectionString) {
  throw new Error('DATABASE_URL_UNPOOLED is not set');
}

let databaseUrl;
try {
  databaseUrl = new URL(connectionString);
} catch {
  throw new Error('DATABASE_URL_UNPOOLED must be a valid PostgreSQL connection URL');
}

if (
  !['postgres:', 'postgresql:'].includes(databaseUrl.protocol) ||
  !databaseUrl.username ||
  !databaseUrl.hostname ||
  databaseUrl.pathname === '/'
) {
  throw new Error(
    'DATABASE_URL_UNPOOLED must include a PostgreSQL scheme, username, host, and database',
  );
}

const sql = neon(connectionString);

export const db = drizzle({ client: sql });