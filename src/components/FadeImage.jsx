// src/components/FadeImage.jsx
import { useLayoutEffect, useRef, useState } from "react";

export default function FadeImage({ src, className, alt = "", clip = true, fit = "cover", ...props }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  // If the browser already has the image cached (e.g. coming back to the grid), show it instantly
  const [instant, setInstant] = useState(false);

  useLayoutEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setInstant(true);
      setLoaded(true);
    }
  }, [src]);

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const transition = instant
    ? "[transition:transform_300ms_ease-out]"
    : "[transition:opacity_400ms_ease-out,transform_300ms_ease-out]";

  return (
    <div className={`relative bg-white ${clip ? "overflow-hidden" : ""} ${className || ""}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${fitClass} ${loaded ? "opacity-100" : "opacity-0"} ${transition}`}
        {...props}
      />
    </div>
  );
}