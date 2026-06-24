// src/components/FadeImage.jsx
import { useState } from "react";

export default function FadeImage({ src, className, alt = "", clip = true, fit = "cover", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative bg-white ${clip ? "overflow-hidden" : ""} ${className || ""}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-[1400ms] ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}