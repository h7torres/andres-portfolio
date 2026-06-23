// src/pages/WorkDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { slug, index } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const i = parseInt(index);

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
      <div className="relative w-full max-w-2xl mx-auto group">
        <img src={current.src} className="w-full" loading="eager" decoding="async" />

        {hasPrev && (
          <button
            onClick={() => goTo(i - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>
        )}

        {hasNext && (
          <button
            onClick={() => goTo(i + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        )}
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