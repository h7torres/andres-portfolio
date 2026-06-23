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

      <div className="relative flex items-center">
        {/* Desktop: menu spills out to the left of the button */}
        <div
          className={`hidden md:flex items-center gap-6 text-lg text-black-400 mr-6 transition-all duration-300 ${
            open
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
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

        {/* Hamburger button - visible on all screen sizes */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 cursor-pointer focus:outline-none"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-gray-400"></span>
          <span className="w-6 h-0.5 bg-gray-400"></span>
        </button>
      </div>

      {/* Mobile: full screen dropdown overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg text-black-400 z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-10 cursor-pointer focus:outline-none text-2xl"
            aria-label="Close"
          >
            ×
          </button>
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