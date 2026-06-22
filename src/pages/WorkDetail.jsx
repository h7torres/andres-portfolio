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

  const goTo = (newIndex) => {
    if (newIndex >= 0 && newIndex < project.images.length) {
      navigate(`/works/${project.slug}/${newIndex}`);
    }
  };

  return (
  <div className="w-full flex flex-col items-center px-10">
    <div className="relative w-full max-w-2xl mx-auto">
      <img src={current.src} className="w-full" />
      {current.poem && (
        <p className="absolute inset-0 text-white text-xs p-4 whitespace-pre-line font-mono">
          {current.poem}
        </p>
      )}
    </div>

    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl mt-8 font-mono">{project.title}</h2>
      {project.collaborators && <p className="text-gray-500 font-mono mt-6 text-xs" >{project.collaborators}</p>}
      {project.description && <p className="text-gray-500 font-mono mt-4 text-xs">{project.description}</p>}
      <p className="text-gray-500 mb-4 font-mono mt-4 text-xs">{project.year}</p>

      <div className="flex gap-2 text-blue-400 font-mono text-xs">
        <button onClick={() => goTo(i - 1)} disabled={i === 0}>
          ← Previous
        </button>
        <span>|</span>
        <button onClick={() => goTo(i + 1)} disabled={i === project.images.length - 1}>
          Next →
        </button>
      </div>
    </div>
  </div>
);
}