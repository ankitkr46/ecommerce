"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function AccountPage() {
  const { data: session } = useSession();
  // Example user data
  const user = session?.user || {
    name: "Jane Doe",
    email: "jane@example.com",
  };

  const orders = [
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
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-2 sm:px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">My Account</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          {!session ? (
            <div className="flex flex-col items-center mb-6">
              <Button
                className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </Button>
            </div>
          ) : (
            <div className="mb-6">
              <p><span className="font-bold">Name:</span> {user.name}</p>
              <p><span className="font-bold">Email:</span> {user.email}</p>
              <Button
                className="mt-4 w-full px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                onClick={() => signOut()}
              >
                Sign out
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Order History</h2>
            <ul>
              {orders.map((order: any) => (
                <li key={order.id} className="py-2 border-b flex flex-col sm:flex-row justify-between items-center gap-2">
                  <span>Order #{order.id} ({order.date})</span>
                  <span className="font-bold text-gray-800">${order.total} - {order.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
