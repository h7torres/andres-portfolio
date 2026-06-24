// src/pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center font-mono">
      <div className="relative flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/home/padres_clean.png`}
          className="absolute -left-28 -top-10 w-20 -rotate-12 pointer-events-none"
          alt=""
        />
        <h1 className="text-4xl text-black-400">Andres Preciado</h1>
        <img
          src={`${import.meta.env.BASE_URL}images/home/bc_clean.png`}
          className="absolute -right-28 -bottom-10 w-20 rotate-12 pointer-events-none"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-3 text-lg text-black-400 mt-10">
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
    </div>
  );
}