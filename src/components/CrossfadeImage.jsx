// src/components/CrossfadeImage.jsx
import { useEffect, useRef, useState } from "react";

export default function CrossfadeImage({ src, alt = "", className = "", fit = "cover", ...props }) {
  const [layers, setLayers] = useState([{ src, id: 0, entered: false }]);
  const idRef = useRef(1);
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  // Add a new layer on top whenever src changes, without removing the old one yet
  useEffect(() => {
    setLayers((prev) => {
      if (prev[prev.length - 1].src === src) return prev;
      const id = idRef.current++;
      return [...prev, { src, id, entered: false }];
    });
  }, [src]);

  // Trigger the fade-in on the newest layer
  useEffect(() => {
    const top = layers[layers.length - 1];
    if (!top.entered) {
      const raf = requestAnimationFrame(() => {
        setLayers((prev) =>
          prev.map((l) => (l.id === top.id ? { ...l, entered: true } : l))
        );
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [layers]);

  // Once the fade-in finishes, drop older layers underneath
  useEffect(() => {
    if (layers.length > 1) {
      const t = setTimeout(() => setLayers((prev) => prev.slice(-1)), 1300);
      return () => clearTimeout(t);
    }
  }, [layers]);

  return (
    <div className={`relative bg-white overflow-hidden grid ${className}`}>
      {layers.map((layer) => (
        <img
          key={layer.id}
          src={layer.src}
          alt={alt}
          loading="eager"
          className={`w-full h-full ${fitClass} [grid-area:1/1]`}
          style={{
            opacity: layer.entered ? 1 : 0,
            transition: "opacity 1100ms ease-in-out",
          }}
          {...props}
        />
      ))}
    </div>
  );
}