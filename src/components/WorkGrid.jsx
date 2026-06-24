// src/components/WorkGrid.jsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import FadeImage from "./FadeImage";

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-10">
      {projects.map((project) => (
        <Link
          to={`/works/${project.slug}`}
          key={project.slug}
          className="relative block focus:outline-none"
        >
          <FadeImage
            src={project.images[0].src}
            alt={project.title}
            clip={false}
            className="w-full h-full transition-transform duration-300 ease-out hover:scale-110 hover:z-10"
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}