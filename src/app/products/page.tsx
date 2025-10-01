import Image from "next/image";

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
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src={product.image} alt={product.name} width={200} height={200} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2 text-center">{product.description}</p>
            <span className="font-bold text-gray-800 mb-2">${product.price}</span>
            <button className="mt-auto px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">View Details</button>
          </div>
        ))}
      </div>
    </main>
  );
}
