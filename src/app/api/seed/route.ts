import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// POST /api/seed
// Seeds categories and products (idempotent-ish by slug/name)
export async function POST() {
  try {
    const categories = [
      { name: "T-Shirts", slug: "t-shirts" },
      { name: "Jeans", slug: "jeans" },
      { name: "Jackets", slug: "jackets" },
      { name: "Dresses", slug: "dresses" },
      { name: "Shoes", slug: "shoes" },
      { name: "Shirts", slug: "shirts" },
      { name: "Sweaters", slug: "sweaters" },
      { name: "Accessories", slug: "accessories" },
    ];

    // Upsert categories
    for (const c of categories) {
      await prisma.category.upsert({
        where: { slug: c.slug },
        update: {},
        create: c,
      });
    }

    const getCategoryId = async (slug: string) =>
      (await prisma.category.findUnique({ where: { slug } }))!.id;

    const sampleProducts = [
      {
        name: "Classic White Tee",
        description: "A timeless classic, this white t-shirt is a must-have for every wardrobe.",
        price: 25.99,
        imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
        color: "White",
        size: "M",
        categorySlug: "t-shirts",
      },
      {
        name: "Denim Jeans",
        description: "Perfectly fitted denim jeans for a stylish and comfortable look.",
        price: 79.99,
        imageUrl: "https://images.unsplash.com/photo-1602293589914-9e296ba3d50e?q=80&w=800&auto=format&fit=crop",
        color: "Blue",
        size: "32",
        categorySlug: "jeans",
      },
      {
        name: "Leather Jacket",
        description: "A bold and edgy leather jacket to make a statement.",
        price: 199.99,
        imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
        color: "Black",
        size: "L",
        categorySlug: "jackets",
      },
    ];

    for (const p of sampleProducts) {
      const categoryId = await getCategoryId(p.categorySlug);
      await prisma.product.upsert({
        where: { name: p.name },
        update: {
          description: p.description,
          price: p.price,
          imageUrl: p.imageUrl,
          color: p.color,
          size: p.size,
          categoryId,
        },
        create: {
          name: p.name,
          description: p.description,
          price: p.price,
          imageUrl: p.imageUrl,
          color: p.color,
          size: p.size,
          categoryId,
        },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("POST /api/seed error", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
