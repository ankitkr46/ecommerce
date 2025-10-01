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
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Your Cart</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between items-center py-2 border-b">
                  <span>{item.name} (x{item.quantity})</span>
                  <span className="font-bold text-gray-800">${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-xl">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Checkout</button>
          </>
        )}
      </div>
    </main>
  );
}
