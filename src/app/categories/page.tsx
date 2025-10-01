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
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map(category => (
          <div key={category.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-500 mb-2 text-center">{category.description}</p>
            <button className="mt-auto px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Shop {category.name}</button>
          </div>
        ))}
      </div>
    </main>
  );
}
