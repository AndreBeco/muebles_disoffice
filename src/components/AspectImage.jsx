// src/components/AspectImage.jsx
import React from "react";

export default function AspectImage({
  src,
  alt = "",
  ratio = "1:1",     // "1:1" | "3:2" | "4:3" | "16:9" ...
  fit = "contain",   // "contain" -> no recorta | "cover" -> recorta para llenar
  className = "",
  imgClassName = "",
}) {
  const [w, h] = ratio.split(":").map(Number);
  const paddingTop = `${(h / w) * 100}%`;
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative w-full bg-white ${className}`}
      style={{ paddingTop }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full ${objectClass} ${imgClassName}`}
      />
    </div>
  );
}
