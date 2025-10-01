export default function AccountPage() {
  // Example user data
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    orders: [
      {
        id: "1001",
        date: "2025-09-15",
        total: 59.98,
        status: "Delivered"
      },
      {
        id: "1002",
        date: "2025-08-30",
        total: 39.99,
        status: "Shipped"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">My Account</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p><span className="font-bold">Name:</span> {user.name}</p>
          <p><span className="font-bold">Email:</span> {user.email}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Order History</h2>
          <ul>
            {user.orders.map(order => (
              <li key={order.id} className="py-2 border-b flex justify-between items-center">
                <span>Order #{order.id} ({order.date})</span>
                <span className="font-bold text-gray-800">${order.total} - {order.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
