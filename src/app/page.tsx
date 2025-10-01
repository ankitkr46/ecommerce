import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="text-center py-16 bg-white shadow">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to TrendyWear</h1>
        <p className="text-lg text-gray-600 mb-6">Discover the latest fashion in clothing for men and women</p>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Shop Now</button>
      </section>
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-gray-700">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example product cards */}
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <Image src="/file.svg" alt="T-shirt" width={200} height={200} className="mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Classic T-Shirt</h3>
            <p className="text-gray-500 mb-2">Comfortable cotton t-shirt for everyday wear.</p>
            <span className="font-bold text-gray-800">$19.99</span>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <Image src="/globe.svg" alt="Jeans" width={200} height={200} className="mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Slim Fit Jeans</h3>
            <p className="text-gray-500 mb-2">Stylish jeans with a modern fit.</p>
            <span className="font-bold text-gray-800">$39.99</span>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <Image src="/window.svg" alt="Jacket" width={200} height={200} className="mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Denim Jacket</h3>
            <p className="text-gray-500 mb-2">Classic denim jacket for all seasons.</p>
            <span className="font-bold text-gray-800">$49.99</span>
          </div>
        </div>
      </section>
    </main>
  );
}
