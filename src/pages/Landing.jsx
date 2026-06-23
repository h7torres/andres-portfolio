import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center font-mono">
      <div className="relative flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/padres_clean.png`}
          className="absolute -left-32 -top-4 w-24 -rotate-12"
          alt=""
        />
        <h1 className="text-4xl text-black-400">Andres Preciado</h1>
        <img
          src={`${import.meta.env.BASE_URL}images/bc_clean.png`}
          className="absolute -right-32 -top-2 w-24 rotate-12"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-3 text-lg text-black-400 mt-8">
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
  );
}