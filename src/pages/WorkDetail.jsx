// src/pages/WorkDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import FadeImage from "../components/FadeImage";

export default function WorkDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  const [i, setI] = useState(0);

  useEffect(() => { setI(0); }, [slug]);

  useEffect(() => {
    if (!project) return;
    project.images.forEach((img) => {
      const preload = new Image();
      preload.src = img.src;
    });
  }, [project]);

  if (!project) return <div className="px-10">Project not found.</div>;

  const current = project.images[i];
  const hasPrev = i > 0;
  const hasNext = i < project.images.length - 1;

  const goTo = (newIndex) => {
    if (newIndex >= 0 && newIndex < project.images.length) setI(newIndex);
  };

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="w-full flex flex-col items-center px-10">
      <div className="flex items-center gap-3 w-full max-w-2xl mx-auto">
        <button onClick={() => goTo(i - 1)} className={`text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors ${hasPrev ? "visible" : "invisible"}`} aria-label="Previous">‹</button>
        <div className="relative flex-1">
          <FadeImage key={current.src} src={current.src} alt={project.title} clip={false} loading="eager" />
        </div>
        <button onClick={() => goTo(i + 1)} className={`text-2xl text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none transition-colors ${hasNext ? "visible" : "invisible"}`} aria-label="Next">›</button>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-2xl mt-8 font-mono">{project.title}</h2>
        {project.collaborators && <p className="text-gray-500 font-mono mt-6 text-xs">{project.collaborators}</p>}
        {project.description && <p className="text-gray-500 font-mono mt-4 text-xs">{project.description}</p>}
        <p className="text-gray-500 mb-4 font-mono mt-4 text-xs">{project.year}</p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex justify-between items-center mt-16 font-mono text-lg">
        {prevProject ? (
          <Link to={`/works/${prevProject.slug}`} className="flex items-center gap-2 text-black-400 hover:text-gray-400 transition-colors focus:outline-none">
            <span>‹</span><span>{prevProject.title}</span>
          </Link>
        ) : (
          <span className="flex items-center gap-2 text-gray-300"><span>‹</span></span>
        )}

        {nextProject ? (
          <Link to={`/works/${nextProject.slug}`} className="flex items-center gap-2 text-black-400 hover:text-gray-400 transition-colors focus:outline-none">
            <span>{nextProject.title}</span><span>›</span>
          </Link>
        ) : (
          <span className="flex items-center gap-2 text-gray-300"><span>›</span></span>
        )}
      </div>
    </div>
  );
}
EOF