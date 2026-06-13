"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem("admin_password", password);
        router.push("/admin/dashboard");
      } else {
        setError("Hatalı şifre");
      }
    } catch {
      setError("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-sm">
        <h1 className="text-2xl font-bold text-zinc-800 mb-6 text-center">Admin Girişi</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-zinc-300 rounded-lg px-4 py-2 mb-4 text-sm focus:outline-none focus:border-[#FF6900]"
          autoFocus
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF6900] text-white rounded-lg py-2 text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          {loading ? "Kontrol ediliyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
