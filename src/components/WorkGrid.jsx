// src/components/WorkGrid.jsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-10">
      {projects.map((project) => (
        <Link
          to={`/works/${project.slug}/0`}
          key={project.slug}
          className="relative block focus:outline-none"
        >
          <img
            src={project.images[0].src}
            className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110 hover:z-10 relative"
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}