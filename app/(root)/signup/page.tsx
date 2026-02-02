"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/signUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      name, 
      surname, 
      email, 
      password 
    }),
  });

  const data = await res.json();
  setLoading(false);

  if (res.ok) {
    alert("Registration successful! You can now log in.");
    router.push("../login");
  } else {
    alert(data.error || "Something went wrong");
  }
};

  return (
  <section className="bg-white h-[450px] flex items-center justify-center">
    <div className="w-full max-w-sm rounded-2xl p-8 backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30">
      <h2 className="text-2xl font-semibold text-center text-blue-500 p-3">
        Sign up!
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          className="input2" 
          type="text" 
          placeholder="name" 
          value={name} onChange={(e) => setName(e.target.value)} 
          required
        />

        <input 
          className="input2" 
          type="text" 
          placeholder="surname" 
          value={surname} onChange={(e) => setSurname(e.target.value)} 
          required
        />

        <input 
          className="input2" 
          type="email" 
          placeholder="email" 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          required/>

        <input 
          className="input2" 
          type="password" 
          placeholder="password"
          value={password} onChange={(e) => setPassword(e.target.value)} 
          required
        />

      <button 
        className="logButton" 
        type="submit" disabled={loading}> {loading ? "Registering..." : "Register"} 
      </button>

      </form>
    </div>
  </section>
  );
}