// src/pages/WorkDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { slug, index } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const i = parseInt(index);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [i]);

  if (!project) return <div className="px-10">Project not found.</div>;

  const current = project.images[i];
  const hasPrev = i > 0;
  const hasNext = i < project.images.length - 1;

  const goTo = (newIndex) => {
    if (newIndex >= 0 && newIndex < project.images.length) {
      navigate(`/works/${project.slug}/${newIndex}`);
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-10">
      <div className="flex items-center gap-3 w-full max-w-2xl mx-auto">
        <button
          onClick={() => goTo(i - 1)}
          className={`text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors ${
            hasPrev ? "visible" : "invisible"
          }`}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="relative flex-1">
          <img
            src={current.src}
            className={`w-full transition-opacity duration-300 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            decoding="async"
          />
        </div>

        <button
          onClick={() => goTo(i + 1)}
          className={`text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors ${
            hasNext ? "visible" : "invisible"
          }`}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-2xl mt-8 font-mono">{project.title}</h2>
        {project.collaborators && (
          <p className="text-gray-500 font-mono mt-6 text-xs">{project.collaborators}</p>
        )}
        {project.description && (
          <p className="text-gray-500 font-mono mt-4 text-xs">{project.description}</p>
        )}
        <p className="text-gray-500 mb-4 font-mono mt-4 text-xs">{project.year}</p>
      </div>
    </div>
  );
}