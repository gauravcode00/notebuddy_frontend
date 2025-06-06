import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BallPit from "./animations/BallPit"; // <--- Import here

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Login failed");
      }

      const data = await response.json();
      if (onLogin) onLogin(data);
      localStorage.setItem("token", data.token);
      navigate("/home");
      alert("Login successful!");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111827]">
      {/* BallPit Animation as Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BallPit
          count={80}
          gravity={0.3}
          friction={1}
          wallBounce={0.75}
          followCursor={false}
          colors={[
            "#3B82F6",
            "#6366F1",
            "#A21CAF",
            "#0891B2",
            "#F472B6",
            "#F59E42",
            "#22D3EE",
            "#2DD4BF",
          ]}
        />
      </div>
      {/* Login Form */}
      <div className="relative z-10 bg-[#181f2b] p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#22293a]">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
          Sign in to your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block mb-1 font-medium text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-700 rounded bg-[#101524] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label
              className="block mb-1 font-medium text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-700 rounded bg-[#101524] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
