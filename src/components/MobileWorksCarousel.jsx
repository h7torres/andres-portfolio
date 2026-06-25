// src/components/MobileWorksCarousel.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";
import CrossfadeImage from "./CrossfadeImage";

export default function MobileWorksCarousel() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const goTo = (delta) => {
    setIndex((prev) => (prev + delta + projects.length) % projects.length);
  };

  return (
    <div className="md:hidden flex flex-col items-center px-6">
      <div className="flex items-center gap-3 w-full max-w-md mx-auto">
        <button
          onClick={() => goTo(-1)}
          className="text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors"
          aria-label="Previous project"
        >
          ‹
        </button>

        <Link to={`/works/${project.slug}`} className="flex-1 focus:outline-none">
          <CrossfadeImage
            src={project.images[0].src}
            alt={project.title}
            fit="contain"
            className="w-full h-80"
            loading="eager"
          />
        </Link>

        <button
          onClick={() => goTo(1)}
          className="text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors"
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-400 font-mono">
        {project.title}, {project.year}
      </p>
    </div>
  );
}