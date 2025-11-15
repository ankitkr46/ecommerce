import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function CartPage() {
  // Example cart data
  const cartItems = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 19.99,
      quantity: 2
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 39.99,
      quantity: 1
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 px-2 sm:px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">Your Cart</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Cart Items</CardTitle>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <ul className="mb-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex flex-col sm:flex-row justify-between items-center py-2 border-b gap-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span className="font-bold text-gray-800">${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="flex-col sm:flex-row gap-2">
          <div className="flex justify-between w-full font-bold text-xl">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="mt-4 w-full">Checkout</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
