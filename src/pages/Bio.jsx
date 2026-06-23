import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <div className="w-full max-w-2xl mx-auto font-mono">
        <p className="text-sm text-gray-400 mb-2">BIO</p>
        <h2 className="text-3xl mb-6">Andres Preciado</h2>

        <img
          src={`${import.meta.env.BASE_URL}images/bio.jpg`}
          className="w-full mb-8"
        />

        <div className="space-y-4 text-gray-700 text-sm">
          <p>
            Andres Preciado is a mixed media artist born and raised in San
            Ysidro, California. Combining poetry and photography, Preciado
            chronicles life on the U.S–Mexico border.
          </p>
          <p>
            Preciado's work centers around themes of collectivism, Fronterizo
            identity, and familial relationships.
          </p>
          <p>
            Preciado is currently a Senior at Boston College majoring in
            International Relations and English. He is a co-founder and editor
            for Genesis Literary Magazine, and a student ambassador for the
            McMullen Museum of Art. In 2026, Preciado was awarded an Advanced
            Study Grant in the Arts by the Boston College University
            Fellowship Committee.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-block mt-8 px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors focus:outline-none"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}