// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (location.pathname === "/") return null;

  return (
    <nav className="relative flex items-center justify-end px-10 py-8 font-mono">
      <Link to="/" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-black-400">Andres Preciado</h1>
      </Link>

      <div className="relative flex items-center">
        <div
          className={`hidden md:flex items-center gap-6 text-sm text-black-400 mr-6 transition-all duration-300 ${
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

        <button
          onClick={() => setOpen(!open)}
          className="relative w-6 h-4 cursor-pointer focus:outline-none z-50"
          aria-label="Menu"
        >
          <span
            className="absolute bg-gray-400 transition-all duration-300 ease-in-out"
            style={{
              width: open ? "2px" : "24px",
              height: open ? "16px" : "2px",
              top: open ? "0px" : "0px",
              left: open ? "7px" : "0px",
            }}
          ></span>
          <span
            className="absolute bg-gray-400 transition-all duration-300 ease-in-out"
            style={{
              width: open ? "2px" : "24px",
              height: open ? "16px" : "2px",
              top: open ? "0px" : "14px",
              left: open ? "15px" : "0px",
            }}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-lg text-black-400 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "h-screen opacity-100" : "h-0 opacity-0"
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
    </nav>
  );
}