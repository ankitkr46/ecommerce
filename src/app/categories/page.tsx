import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function CategoriesPage() {
  // Example categories data
  const categories = [
    {
      id: 1,
      name: "Men",
      description: "Shop the latest men's fashion."
    },
    {
      id: 2,
      name: "Women",
      description: "Discover trendy women's clothing."
    },
    {
      id: 3,
      name: "Accessories",
      description: "Find stylish accessories for every outfit."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-2 sm:px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map(category => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Shop {category.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
