import { NextRequest, NextResponse } from "next/server"
import { users, User } from "../../../lib/users"
import crypto from "crypto"

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 })
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Le mot de passe doit contenir au moins 6 caractères." }, { status: 400 })
  }

  const existing = [...users.values()].find((u) => u.email === email)
  if (existing) {
    return NextResponse.json({ error: "Un compte existe déjà avec cet email." }, { status: 409 })
  }

  const user: User = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  }

  users.set(user.id, user)

  return NextResponse.json({ message: "Compte créé avec succès.", userId: user.id }, { status: 201 })
}
