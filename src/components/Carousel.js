// src/components/Carousel.js
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AspectImage from "./AspectImage";

export default function Carousel({
  items = [],
  currentIndex = 0,
  onIndexChange = () => {},
  aspectRatio = "4:3",     // "1:1" | "3:2" | "4:3" | "16:9"
  fit = "contain",         // "contain" (no recorta) | "cover" (recorta)
  showCaptions = true,
}) {

  const prev = () => onIndexChange((currentIndex - 1 + items.length) % items.length);
  const next = () => onIndexChange((currentIndex + 1) % items.length);

  if (!items.length) return null;
  const item = items[currentIndex] || {};

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Imagen con proporción y sin recortes */}
      <AspectImage
        src={item.src || item.img || ""}
        alt={item.alt || item.title || "Imagen del carrusel"}
        ratio={aspectRatio}
        fit={fit}
        className="bg-gray-50 rounded-lg overflow-hidden"
        imgClassName="p-0"
      />

      {/* Botones */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === currentIndex ? "bg-orange-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Caption opcional */}
      {showCaptions && (item.title || item.caption) && (
        <div className="mt-6 text-center">
          {item.title && <h3 className="text-lg font-semibold">{item.title}</h3>}
          {item.caption && <p className="text-sm text-gray-600">{item.caption}</p>}
        </div>
      )}
    </div>
  );
}
