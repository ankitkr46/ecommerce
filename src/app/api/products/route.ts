import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET /api/products
// Query params:
// - search: string
// - category: string (slug)
// - color: string
// - size: string
// - priceMin: number
// - priceMax: number
// - sort: "price-asc" | "price-desc" | "newest"
// - page: number (1-based)
// - limit: number (default 12)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search") ?? undefined;
    const category = searchParams.get("category") ?? undefined;
    const color = searchParams.get("color") ?? undefined;
    const size = searchParams.get("size") ?? undefined;
    const sort = searchParams.get("sort") ?? undefined;

    const priceMinStr = searchParams.get("priceMin");
    const priceMaxStr = searchParams.get("priceMax");
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const limit = Math.min(Math.max(parseInt(searchParams.get("limit") || "12", 10), 1), 50);

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" as const } },
        { description: { contains: search, mode: "insensitive" as const } },
      ];
    }

    if (category) {
      where.category = { slug: category };
    }
    if (color && color !== "all") {
      where.color = color;
    }
    if (size && size !== "all") {
      where.size = size;
    }

    if (priceMinStr || priceMaxStr) {
      where.price = {};
      if (priceMinStr) where.price.gte = Number(priceMinStr);
      if (priceMaxStr) where.price.lte = Number(priceMaxStr);
    }

    let orderBy: any = { createdAt: "desc" as const };
    if (sort === "price-asc") orderBy = { price: "asc" as const };
    if (sort === "price-desc") orderBy = { price: "desc" as const };

    const [items, total] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy,
        include: { category: true },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (e: any) {
    console.error("GET /api/products error", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
