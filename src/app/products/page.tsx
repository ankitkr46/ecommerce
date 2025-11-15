import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 19.99,
      image: "/file.svg",
      description: "Comfortable cotton t-shirt for everyday wear."
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 39.99,
      image: "/globe.svg",
      description: "Stylish jeans with a modern fit."
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 49.99,
      image: "/window.svg",
      description: "Classic denim jacket for all seasons."
    },
    {
      id: 4,
      name: "Loose Fit Hoodie",
      price: 29.99,
      image: "/next.svg",
      description: "Cozy hoodie with a relaxed fit for comfort."
    },
    {
      id: 5,
      name: "Athletic Shorts",
      price: 24.99,
      image: "/vercel.svg",
      description: "Lightweight shorts perfect for workouts and casual wear."
    },
    {
      id: 6,
      name: "Oversized Looser Tee",
      price: 22.99,
      image: "/file.svg",
      description: "Trendy oversized t-shirt for a relaxed streetwear look."
    },
    {
      id: 7,
      name: "Pullover Hoodie",
      price: 34.99,
      image: "/globe.svg",
      description: "Warm pullover hoodie, perfect for chilly days."
    },
    {
      id: 8,
      name: "Casual Shorts",
      price: 18.99,
      image: "/window.svg",
      description: "Casual shorts for everyday comfort and style."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50 px-2 sm:px-4">
      <section className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center tracking-tight">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map(product => (
            <Card key={product.id} className="rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-2xl transition-transform bg-white">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-4" />
              </CardContent>
              <CardFooter>
                <span className="font-bold text-gray-800 mr-auto">${product.price}</span>
                <Link href={`/product/${product.id}`}>
                  <Button variant="secondary">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
