"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  color: string;
  size: string;
};

export default function CartPage() {
  // Example cart data with images
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Classic White Tee",
      price: 25.99,
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400&auto=format&fit=crop",
      color: "White",
      size: "M",
    },
    {
      id: "2",
      name: "Denim Jeans",
      price: 79.99,
      quantity: 1,
      imageUrl: "https://images.unsplash.com/photo-1602293589914-9e296ba3d50e?q=80&w=400&auto=format&fit=crop",
      color: "Blue",
      size: "32",
    },
    {
      id: "3",
      name: "Leather Jacket",
      price: 199.99,
      quantity: 1,
      imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=400&auto=format&fit=crop",
      color: "Black",
      size: "L",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const discountAmount = subtotal * discount;
  const total = subtotal + shipping + tax - discountAmount;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 py-16">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-pink-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-foreground">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link href="/products">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full">
              Start Shopping
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Shopping Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {item.color} • Size {item.size}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                                aria-label="Remove item"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                            <p className="text-xl font-bold text-pink-600">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-4">
                            <span className="text-sm text-muted-foreground">Quantity:</span>
                            <div className="flex items-center border border-border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-2 hover:bg-muted transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-2 hover:bg-muted transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <span className="ml-auto text-lg font-semibold text-foreground">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Promo Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      onClick={applyPromo}
                      variant="outline"
                      className="px-4"
                    >
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-green-600 dark:text-green-400">
                      ✓ {(discount * 100).toFixed(0)}% discount applied!
                    </p>
                  )}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3 flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-6 text-lg font-semibold rounded-xl mt-6">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Free shipping on orders over $100
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
