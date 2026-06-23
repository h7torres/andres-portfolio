// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (location.pathname === "/") return null;

  return (
    <nav className="relative flex items-center justify-between px-10 py-8 font-mono">
      <Link to="/">
        <h1 className="text-2xl text-black-400">Andres Preciado</h1>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 text-lg text-black-400">
        <Link to="/works" className="hover:text-gray-400 transition-colors focus:outline-none">
          Works
        </Link>
        <Link to="/bio" className="hover:text-gray-400 transition-colors focus:outline-none">
          Bio
        </Link>
        <Link to="/contact" className="hover:text-gray-400 transition-colors focus:outline-none">
          Contact
        </Link>
      </div>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer focus:outline-none"
        aria-label="Menu"
      >
        <span className="w-6 h-0.5 bg-gray-400"></span>
        <span className="w-6 h-0.5 bg-gray-400"></span>
      </button>

      {/* Mobile dropdown overlay */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-10 text-lg text-black-400 z-50">
          <Link to="/works" onClick={() => setOpen(false)} className="hover:text-gray-400 transition-colors focus:outline-none">
            Works
          </Link>
          <Link to="/bio" onClick={() => setOpen(false)} className="hover:text-gray-400 transition-colors focus:outline-none">
            Bio
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-gray-400 transition-colors focus:outline-none">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}