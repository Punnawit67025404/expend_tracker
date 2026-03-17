import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // เช็คทั้ง 2 user
  const isValid =
    (username === process.env.APP_USERNAME && password === process.env.APP_PASSWORD) ||
    (username === process.env.APP_USERNAME2 && password === process.env.APP_PASSWORD2);

  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 วัน
    path: "/",
  });

  return NextResponse.json({ ok: true });
}