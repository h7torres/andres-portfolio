// src/components/FadeImage.jsx
import { useState } from "react";

export default function FadeImage({ src, className, alt = "", clip = true, fit = "cover", ...props }) {
  const [loaded, setLoaded] = useState(false);

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`relative bg-white ${clip ? "overflow-hidden" : ""} ${className || ""}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${fitClass} ${
          loaded ? "opacity-100" : "opacity-0"
        } [transition:opacity_1400ms_ease-in-out,transform_300ms_ease-out]`}
        {...props}
      />
    </div>
  );
}