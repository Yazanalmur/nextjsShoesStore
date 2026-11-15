import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL;

if (!url) {
  throw new Error("Missing TURSO_DATABASE_URL");
}

export const turso = createClient({
  url,
});
