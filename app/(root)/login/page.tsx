"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!res?.error) window.location.href = "/explore";
    else alert("Invalid email or password.");
  };

  return (
    <section className="signSection">
      <div className="w-full max-w-sm rounded-2xl p-8 backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30">
        <h2 className="text-2xl font-semibold text-center text-white p-3">
          Welcome back!
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            className="input"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="logButton"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-white/70 my-5">
          ─────── or ───────
        </p>

        <p className="text-center text-white/80">
          Don’t have an account?{" "}
          <a href="/signup" className="underline hover:text-white">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
}
