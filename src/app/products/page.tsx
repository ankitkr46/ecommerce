"use client";

import { useState, useMemo, Suspense } from "react";
import { products as allProducts, Product } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import FilterControls from "../../components/FilterControls";
import { useSearchParams } from "next/navigation";

function ProductGrid() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [price, setPrice] = useState(200);
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => product.price <= price);

    if (color !== "all") {
      filtered = filtered.filter((product) => product.color === color);
    }

    if (size !== "all") {
      filtered = filtered.filter((product) => product.size === size);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [price, color, size, sort, searchQuery]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <FilterControls
          onPriceChange={(value) => setPrice(value[0])}
          onColorChange={setColor}
          onSizeChange={setSize}
          onSortChange={setSort}
          price={price}
        />
      </div>
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-muted-foreground col-span-full text-center">
              No products found for "{searchQuery}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground text-center tracking-tight">
          Our Products
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid />
        </Suspense>
      </section>
    </main>
  );
}
