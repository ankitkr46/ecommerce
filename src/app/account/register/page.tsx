"use client";

import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <RegisterForm />
      </div>
    </main>
  );
}
