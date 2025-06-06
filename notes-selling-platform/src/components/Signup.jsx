import { useState } from "react";
import { Link } from "react-router-dom";
import BallPit from "./animations/BallPit";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          passwordHash: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data?.message || typeof data === "string" ? data : "Signup failed"
        );
        return;
      }

      setSuccess("Signup successful! You can now log in.");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError("Could not connect to server.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111827]">
      {/* BallPit animation as background */}
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
      {/* Signup Form */}
      <div className="relative z-10 bg-[#181f2b] p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#22293a]">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block mb-1 font-medium text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded bg-[#101524] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div>
            <label
              className="block mb-1 font-medium text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded bg-[#101524] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
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
              className="w-full px-4 py-2 border border-gray-700 rounded bg-[#101524] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          {success && (
            <div className="text-green-400 text-sm text-center">{success}</div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-400 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
