import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#111827] text-gray-200 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/home"
          className="text-2xl font-bold tracking-tight text-indigo-400 hover:text-indigo-300 transition"
        >
          Notes Buddy
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link
            to="/profile"
            className="text-base font-semibold text-gray-300 hover:text-indigo-400 transition"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
