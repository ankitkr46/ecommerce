import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    id: "1",
    name: "Classic T-Shirt",
    price: 19.99,
    image: "/file.svg",
    description: "Comfortable cotton t-shirt for everyday wear.",
    details: "100% cotton, available in multiple colors and sizes."
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 39.99,
    image: "/globe.svg",
    description: "Stylish jeans with a modern fit.",
    details: "Denim, machine washable, slim fit."
  },
  {
    id: "3",
    name: "Denim Jacket",
    price: 49.99,
    image: "/window.svg",
    description: "Classic denim jacket for all seasons.",
    details: "Durable denim, button closure, unisex."
  }
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <div className="bg-white p-8 rounded shadow max-w-xl w-full flex flex-col items-center">
        <Image src={product.image} alt={product.name} width={300} height={300} className="mb-6" />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
        <span className="font-bold text-gray-800 text-xl mb-4">${product.price}</span>
        <p className="text-gray-600 mb-4 text-center">{product.description}</p>
        <p className="text-gray-500 mb-6 text-center">{product.details}</p>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Add to Cart</button>
      </div>
    </main>
  );
}
