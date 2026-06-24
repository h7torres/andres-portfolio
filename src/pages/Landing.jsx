// src/pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center font-mono">
      <h1 className="text-4xl text-black-400 mb-10">Andres Preciado</h1>

      <div className="flex flex-col items-center gap-3 text-lg text-black-400">
        <Link to="/works" className="hover:text-gray-400 transition-colors focus:outline-none">Works</Link>
        <Link to="/bio" className="hover:text-gray-400 transition-colors focus:outline-none">Bio</Link>
        <Link to="/contact" className="hover:text-gray-400 transition-colors focus:outline-none">Contact</Link>
      </div>
    </div>
  );
}