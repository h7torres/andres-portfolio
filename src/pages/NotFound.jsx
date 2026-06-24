// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center font-mono text-center px-10">
      <h1 className="text-3xl mb-4 text-black-400">Page not found</h1>
      <p className="text-gray-500 text-sm mb-8">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors focus:outline-none"
      >
        Back to home
      </Link>
    </div>
  );
}