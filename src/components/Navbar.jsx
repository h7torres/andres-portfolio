import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-center px-10 py-8 font-mono">
      <Link to="/">
        <h1 className="text-3xl text-black-400">Andres Preciado</h1>
      </Link>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 group">
        <button className="text-lg text-black-400 cursor-pointer focus:outline-none">
          Menu
        </button>
        <div className="absolute right-0 top-full mt-2 flex flex-col items-end gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white">
          <Link to="/works" className="hover:text-blue-400 transition-colors focus:outline-none">
            Works
          </Link>
          <Link to="/bio" className="hover:text-blue-400 transition-colors focus:outline-none">
            Bio
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors focus:outline-none">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}