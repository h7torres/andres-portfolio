// src/components/WorkGrid.jsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 px-10">
      {projects.map((project) => (
        <Link to={`/works/${project.slug}/0`} key={project.slug} className="relative block">
          <img src={project.images[0].src} className="w-full h-full object-cover" />
        </Link>
      ))}
    </div>
  );
}