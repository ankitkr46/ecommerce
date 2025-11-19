import ProductCard from "../../components/ProductCard";
import { products as fallbackProducts } from "../../data/products";

export default async function NewArrivalsPage() {
  let newest: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    color: string;
    size: string;
    imageUrl: string;
  }> = [];

  // Prefer DB if configured; gracefully fall back to static data otherwise
  if (process.env.DATABASE_URL) {
    try {
      const { prisma } = await import("../../lib/prisma");
      const items = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        include: { category: true },
        take: 12,
      });
      newest = items.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: typeof (p.price as any) === "string" ? parseFloat(p.price as any) : Number(p.price),
        category: (p as any).category?.name ?? "",
        color: p.color,
        size: p.size,
        imageUrl: p.imageUrl,
      }));
    } catch (e) {
      console.error("New Arrivals DB query failed, falling back to static data:", e);
    }
  }

  if (newest.length === 0) {
    // Static fallback: last 8 items reversed
    newest = [...fallbackProducts].slice(-8).reverse();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground text-center tracking-tight">
          New Arrivals
        </h1>
        <p className="text-center text-muted-foreground mb-10">
          Discover the latest drops and fresh styles just added to the shop.
        </p>
        {newest.length === 0 ? (
          <p className="text-center text-muted-foreground">No new arrivals yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newest.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
