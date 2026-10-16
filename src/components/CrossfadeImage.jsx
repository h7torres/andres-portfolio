// src/components/CrossfadeImage.jsx
import { useEffect, useRef, useState } from "react";

// True when the browser already has this image (e.g. you just saw it on the grid)
const isCached = (src) => {
  const img = new Image();
  img.src = src;
  return img.complete && img.naturalWidth > 0;
};

export default function CrossfadeImage({ src, alt = "", className = "", fit = "cover", ...props }) {
  // First image: show instantly if cached, otherwise fade in once it loads
  const [layers, setLayers] = useState(() => [{ src, id: 0, entered: isCached(src) }]);
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

  const enter = (id) =>
    setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, entered: true } : l)));

  // Once the top image has faded in, drop the older layers underneath
  const top = layers[layers.length - 1];
  useEffect(() => {
    if (layers.length > 1 && top.entered) {
      const t = setTimeout(() => setLayers((prev) => prev.slice(-1)), 500);
      return () => clearTimeout(t);
    }
  }, [layers.length, top.entered]);

  return (
    <div className={`relative bg-white overflow-hidden grid ${className}`}>
      {layers.map((layer) => (
        <img
          key={layer.id}
          src={layer.src}
          alt={alt}
          loading="eager"
          onLoad={() => enter(layer.id)}
          className={`w-full h-full ${fitClass} [grid-area:1/1]`}
          style={{
            opacity: layer.entered ? 1 : 0,
            transition: "opacity 400ms ease-out",
          }}
          {...props}
        />
      ))}
    </div>
  );
}