import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

// GET /api/products/:id
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: { category: true },
    });

    if (!product) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (e) {
    console.error("GET /api/products/[id] error", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
