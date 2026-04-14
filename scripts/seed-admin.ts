/**
 * Seed script — Creates the initial admin user.
 * 
 * Usage:
 *   npx tsx scripts/seed-admin.ts
 * 
 * Change the email/password below before running.
 */

import Database from "better-sqlite3";
import bcrypt from "bcryptjs";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "analytics.db");

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ═══════════ CHANGE THESE ═══════════
const ADMIN_EMAIL = "admin@zeusconsulting.com";
const ADMIN_PASSWORD = "ZeusAdmin2025!";
const ADMIN_NAME = "Zeus Admin";
// ═════════════════════════════════════

const hash = bcrypt.hashSync(ADMIN_PASSWORD, 12);

try {
  db.prepare(
    `INSERT OR REPLACE INTO admin_users (email, password_hash, name) VALUES (?, ?, ?)`
  ).run(ADMIN_EMAIL, hash, ADMIN_NAME);
  console.log(`✅ Admin user created: ${ADMIN_EMAIL}`);
  console.log(`   Password: ${ADMIN_PASSWORD}`);
  console.log(`\n⚠️  Change these credentials before deploying to production!`);
} catch (error) {
  console.error("Error creating admin user:", error);
}

db.close();
