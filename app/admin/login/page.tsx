"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username_or_phone: username,
    password,
  }),
});

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid login details");
        setLoading(false);
        return;
      }

      // SUCCESS → Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-amber-200">

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-amber-900 mb-1">
          Admin Login
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Authorized users only
        </p>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-600 text-center text-sm mb-4 font-medium">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Username */}
          <label className="text-sm font-medium text-slate-700">
            Username or Phone Number
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username or phone"
            className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />

          {/* Password */}
          <label className="text-sm font-medium text-slate-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full mt-1 mb-6 px-4 py-2 rounded-lg border border-amber-300 
             text-slate-700 placeholder:text-slate-400
             focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg shadow-sm font-semibold text-white 
            transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#C06014] hover:bg-[#a85312]"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-4">
          © {new Date().getFullYear()} Sri Bodhirajaraama Dhamma School
        </p>
      </div>
    </div>
  );
}
