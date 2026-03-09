import { NextRequest, NextResponse } from "next/server"
import { users } from "../../../lib/users"
import crypto from "crypto"

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password } = body

  if (!email || !password) {
    return NextResponse.json({ error: "Email et mot de passe requis." }, { status: 400 })
  }

  const user = [...users.values()].find((u) => u.email === email)
  if (!user || user.passwordHash !== hashPassword(password)) {
    return NextResponse.json({ error: "Email ou mot de passe incorrect." }, { status: 401 })
  }

  // In production, return a signed JWT or set a session cookie.
  return NextResponse.json({
    message: "Connexion réussie.",
    user: { id: user.id, name: user.name, email: user.email },
  })
}
