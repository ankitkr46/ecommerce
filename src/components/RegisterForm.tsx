"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fullName, email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Registration failed");
      return;
    }

    setSuccess("Account created. You can now sign in.");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-card border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Welcome to Tashok Threads</h2>
        <p className="text-muted-foreground">Sign up to start your journey with us</p>
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-border rounded-md hover:bg-muted transition-colors mb-4">
        Continue with Google
      </button>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-border"></div>
        <span className="flex-shrink mx-4 text-muted-foreground">Or</span>
        <div className="flex-grow border-t border-border"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Full Name" value={fullName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} required />
        <Input type="email" placeholder="john@gmail.com" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input type="password" placeholder="Password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
          <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} required />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">Verify and Sign up</Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/account" className="text-pink-600 hover:underline">Sign In</Link>
      </p>
    </div>
  );
}
