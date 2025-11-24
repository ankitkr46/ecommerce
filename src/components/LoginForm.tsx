"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-card border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Welcome to Tashok Threads</h2>
        <p className="text-muted-foreground">Sign up to start your journey with us</p>
      </div>

      <button
        onClick={() => signIn("google")}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-border rounded-md hover:bg-muted transition-colors mb-4"
      >
        Continue with Google
      </button>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-border"></div>
        <span className="flex-shrink mx-4 text-muted-foreground">Or</span>
        <div className="flex-grow border-t border-border"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Link href="#" className="text-sm text-pink-600 hover:underline">
          Forgot Password?
        </Link>
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Login
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/account/register" className="text-pink-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
