import bcrypt from "bcrypt";
import { invoices, customers, revenue, users } from "../lib/placeholder-data";
import { turso } from "@/app/lib/turso";
async function seedUsers() {
  const result = await turso.execute(
    `CREATE TABLE IF NOT EXISTS users (id PRIMARY KEY, name VARCHAR(255) NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL);`,
  );
  return;
}

async function seedInvoices() {
  return;
}

async function seedCustomers() {}

async function seedRevenue() {
  return;
}

export async function GET() {
  return;
}
