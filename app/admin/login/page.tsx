"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("admin-login");
    return () => document.body.classList.remove("admin-login");
  }, []);

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
    <>
      <style>{`
        body.admin-login > div:has(a[href^="mailto"]),
        body.admin-login > div:has(img[alt="Innovia Plus"]),
        body.admin-login > footer {
          display: none;
        }
      `}</style>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 overflow-x-hidden">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#FF6900] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
          <h1 className="text-xl font-bold text-zinc-800 mb-6 text-center">
            Admin Girişi
          </h1>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent"
            autoFocus
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6900] text-white rounded-lg py-2.5 text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            {loading ? "Kontrol ediliyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </>
  );
}
