import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-8">
      <Link to="/">
        <h1 className="text-3xl font-mono text-black-400">Andres Preciado</h1>
      </Link>
      <div className="flex gap-6 text-black-400 text-lg font-mono">
        <Link to="/">Works</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}