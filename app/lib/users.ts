// Simple in-memory store for demo purposes.
// Replace with a real database (Postgres, MongoDB, etc.) in production.

export type User = {
  id: string
  name: string
  email: string
  passwordHash: string
  createdAt: string
}

// Global map so it persists across requests during dev (single process).
declare global {
  // eslint-disable-next-line no-var
  var __users: Map<string, User> | undefined
}

export const users: Map<string, User> = globalThis.__users ?? (globalThis.__users = new Map())
