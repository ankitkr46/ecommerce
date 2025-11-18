import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET /api/categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(categories);
  } catch (e) {
    console.error("GET /api/categories error", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
