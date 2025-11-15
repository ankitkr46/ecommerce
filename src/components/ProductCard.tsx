"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="rounded-2xl shadow-xl border border-border hover:shadow-2xl transition bg-card">
        <CardContent className="p-4">
          <div className="relative h-64 w-full rounded-xl bg-muted overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-lg font-medium text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-pink-600 font-semibold">${product.price.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
