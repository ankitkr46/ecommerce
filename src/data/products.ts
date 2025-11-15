export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  color: string;
  size: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Tee",
    description: "A timeless classic, this white t-shirt is a must-have for every wardrobe.",
    price: 25.99,
    category: "T-Shirts",
    color: "White",
    size: "M",
    imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Denim Jeans",
    description: "Perfectly fitted denim jeans for a stylish and comfortable look.",
    price: 79.99,
    category: "Jeans",
    color: "Blue",
    size: "32",
    imageUrl: "https://images.unsplash.com/photo-1602293589914-9e296ba3d50e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Leather Jacket",
    description: "A bold and edgy leather jacket to make a statement.",
    price: 199.99,
    category: "Jackets",
    color: "Black",
    size: "L",
    imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Summer Dress",
    description: "A light and breezy summer dress, perfect for warm days.",
    price: 45.00,
    category: "Dresses",
    color: "Yellow",
    size: "S",
    imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Running Sneakers",
    description: "High-performance sneakers for your daily run.",
    price: 120.00,
    category: "Shoes",
    color: "Red",
    size: "10",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Formal Shirt",
    description: "A crisp formal shirt for a sharp and professional look.",
    price: 55.00,
    category: "Shirts",
    color: "White",
    size: "L",
    imageUrl: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Cozy Sweater",
    description: "A warm and cozy sweater for chilly evenings.",
    price: 65.00,
    category: "Sweaters",
    color: "Gray",
    size: "M",
    imageUrl: "https://images.unsplash.com/photo-1611312449412-6cefac5dc2b9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Stylish Sunglasses",
    description: "Protect your eyes in style with these trendy sunglasses.",
    price: 35.00,
    category: "Accessories",
    color: "Black",
    size: "One Size",
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
  },
];
