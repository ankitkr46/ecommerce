import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { username, name, email, graduationYear, password } = await req.json();

    if (!email || !password || !username) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existing) {
      return NextResponse.json({ error: "Email or username already in use" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        username,
        graduationYear: graduationYear ? parseInt(graduationYear, 10) : null,
        password: hashed,
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.error("POST /api/auth/register error", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
