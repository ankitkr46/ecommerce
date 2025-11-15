import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
	{
		id: "1",
		name: "Classic T-Shirt",
		price: 19.99,
		image: "/file.svg",
		description: "Comfortable cotton t-shirt for everyday wear.",
		details: "100% cotton, available in multiple colors and sizes.",
		items: [
			{ id: "1-1", name: "White T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-2", name: "Black T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-3", name: "Blue T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-4", name: "Red T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-5", name: "Green T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-6", name: "Yellow T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-7", name: "Grey T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-8", name: "Purple T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-9", name: "Orange T-Shirt", image: "/file.svg", price: 19.99 },
			{ id: "1-10", name: "Pink T-Shirt", image: "/file.svg", price: 19.99 },
		],
	},
	{
		id: "2",
		name: "Slim Fit Jeans",
		price: 39.99,
		image: "/globe.svg",
		description: "Stylish jeans with a modern fit.",
		details: "Denim, machine washable, slim fit.",
		items: [
			{ id: "2-1", name: "Blue Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-2", name: "Black Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-3", name: "Grey Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-4", name: "White Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-5", name: "Ripped Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-6", name: "Slim Blue Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-7", name: "Slim Black Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-8", name: "Slim Grey Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-9", name: "Slim White Jeans", image: "/globe.svg", price: 39.99 },
			{ id: "2-10", name: "Slim Ripped Jeans", image: "/globe.svg", price: 39.99 },
		],
	},
	{
		id: "3",
		name: "Denim Jacket",
		price: 49.99,
		image: "/window.svg",
		description: "Classic denim jacket for all seasons.",
		details: "Durable denim, button closure, unisex.",
		items: [
			{ id: "3-1", name: "Blue Denim Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-2", name: "Black Denim Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-3", name: "Grey Denim Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-4", name: "White Denim Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-5", name: "Ripped Denim Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-6", name: "Slim Blue Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-7", name: "Slim Black Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-8", name: "Slim Grey Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-9", name: "Slim White Jacket", image: "/window.svg", price: 49.99 },
			{ id: "3-10", name: "Slim Ripped Jacket", image: "/window.svg", price: 49.99 },
		],
	},
	{
		id: "4",
		name: "Loose Fit Hoodie",
		price: 29.99,
		image: "/next.svg",
		description: "Cozy hoodie with a relaxed fit for comfort.",
		details: "Soft fleece, available in multiple colors and sizes.",
		items: [
			{ id: "4-1", name: "Black Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-2", name: "White Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-3", name: "Grey Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-4", name: "Blue Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-5", name: "Red Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-6", name: "Green Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-7", name: "Yellow Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-8", name: "Purple Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-9", name: "Orange Hoodie", image: "/next.svg", price: 29.99 },
			{ id: "4-10", name: "Pink Hoodie", image: "/next.svg", price: 29.99 },
		],
	},
	{
		id: "5",
		name: "Athletic Shorts",
		price: 24.99,
		image: "/vercel.svg",
		description: "Lightweight shorts perfect for workouts and casual wear.",
		details: "Breathable fabric, elastic waistband, multiple colors.",
		items: [
			{ id: "5-1", name: "Black Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-2", name: "White Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-3", name: "Grey Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-4", name: "Blue Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-5", name: "Red Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-6", name: "Green Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-7", name: "Yellow Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-8", name: "Purple Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-9", name: "Orange Shorts", image: "/vercel.svg", price: 24.99 },
			{ id: "5-10", name: "Pink Shorts", image: "/vercel.svg", price: 24.99 },
		],
	},
	{
		id: "6",
		name: "Oversized Looser Tee",
		price: 22.99,
		image: "/file.svg",
		description: "Trendy oversized t-shirt for a relaxed streetwear look.",
		details: "Loose fit, soft cotton, multiple colors and prints.",
		items: [
			{ id: "6-1", name: "White Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-2", name: "Black Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-3", name: "Grey Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-4", name: "Blue Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-5", name: "Red Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-6", name: "Green Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-7", name: "Yellow Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-8", name: "Purple Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-9", name: "Orange Looser Tee", image: "/file.svg", price: 22.99 },
			{ id: "6-10", name: "Pink Looser Tee", image: "/file.svg", price: 22.99 },
		],
	},
	{
		id: "7",
		name: "Pullover Hoodie",
		price: 34.99,
		image: "/globe.svg",
		description: "Warm pullover hoodie, perfect for chilly days.",
		details: "Pullover style, fleece lining, multiple colors.",
		items: [
			{ id: "7-1", name: "Black Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-2", name: "White Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-3", name: "Grey Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-4", name: "Blue Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-5", name: "Red Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-6", name: "Green Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-7", name: "Yellow Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-8", name: "Purple Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-9", name: "Orange Pullover Hoodie", image: "/globe.svg", price: 34.99 },
			{ id: "7-10", name: "Pink Pullover Hoodie", image: "/globe.svg", price: 34.99 },
		],
	},
	{
		id: "8",
		name: "Casual Shorts",
		price: 18.99,
		image: "/window.svg",
		description: "Casual shorts for everyday comfort and style.",
		details: "Relaxed fit, soft material, multiple colors.",
		items: [
			{ id: "8-1", name: "Black Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-2", name: "White Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-3", name: "Grey Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-4", name: "Blue Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-5", name: "Red Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-6", name: "Green Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-7", name: "Yellow Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-8", name: "Purple Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-9", name: "Orange Casual Shorts", image: "/window.svg", price: 18.99 },
			{ id: "8-10", name: "Pink Casual Shorts", image: "/window.svg", price: 18.99 },
		],
	},
];

export default function ProductPage({ params }: { params: { id: string } }) {
	const product = products.find((p) => p.id === params.id);
	if (!product) return notFound();

	return (
		<main className="min-h-screen bg-gray-50 px-2 sm:px-4 py-8 flex flex-col items-center">
			<Card className="max-w-xl w-full">
				<CardHeader>
					<CardTitle>{product.name}</CardTitle>
					<CardDescription>{product.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={product.image}
						alt={product.name}
						width={300}
						height={300}
						className="mx-auto mb-6"
					/>
				</CardContent>
				<CardFooter>
					<span className="font-bold text-gray-800 text-lg sm:text-xl mr-auto">
						${product.price}
					</span>
					<Button>Add to Cart</Button>
				</CardFooter>
			</Card>
			{product.items && (
				<div className="mt-8 w-full">
					<h2 className="text-lg font-semibold mb-4 text-gray-700">
						variants
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{product.items.map((item) => (
							<div
								key={item.id}
								className="bg-white p-4 rounded shadow flex flex-col items-center"
							>
								<Image
									src={item.image}
									alt={item.name}
									width={120}
									height={120}
									className="mb-2"
								/>
								<span className="font-medium mb-1">{item.name}</span>
								<span className="font-bold text-gray-800 mb-2">
									${item.price}
								</span>
								<Button>Add to Cart</Button>
							</div>
						))}
					</div>
				</div>
			)}
		</main>
	);
}
