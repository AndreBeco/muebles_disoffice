// src/components/Carousel.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items, type, currentIndex, onIndexChange }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No hay elementos disponibles
      </div>
    );
  }

  const currentItem = items[currentIndex];

  const nextSlide = () => onIndexChange((currentIndex + 1) % items.length);
  const prevSlide = () => onIndexChange(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  const goToSlide = (i) => onIndexChange(i);

  // Helpers para aspectos (sin plugin aspect-ratio)
  const Box = ({ ratio = '56.25%', children, className = '' }) => (
    <div className={`relative w-full bg-white ${className}`} style={{ paddingTop: ratio }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );

  const MediaImage = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-center"
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );

  const MediaVideo = ({ src, poster }) => (
    <video
      className="w-full h-full object-cover"
      controls
      preload="metadata"
      playsInline
      // muted // <- activa si algún día quieres autoplay silencioso
      poster={poster || undefined}
    >
      <source src={src} type="video/mp4" />
      {/* Si tienes webm puedes agregar otra source */}
      {/* <source src="..." type="video/webm" /> */}
      Tu navegador no soporta video HTML5.
    </video>
  );

  // Render del área principal (antes/después o único)
  const renderMain = () => {
    // Caso 1: Antes/Después con imágenes
    if (currentItem.before && currentItem.after) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
          <Box ratio="100%">
            <MediaImage src={currentItem.before} alt="Antes" />
            <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              Antes
            </div>
          </Box>
          <Box ratio="100%">
            <MediaImage src={currentItem.after} alt="Después" />
            <div className="absolute bottom-2 right-2 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              Después
            </div>
          </Box>
        </div>
      );
    }

    // Caso 2: Antes/Después con videos
    if (currentItem.beforeVideo && currentItem.afterVideo) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
          <Box ratio="56.25%">
            <MediaVideo src={currentItem.beforeVideo} poster={currentItem.beforePoster} />
            <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              Antes
            </div>
          </Box>
          <Box ratio="56.25%">
            <MediaVideo src={currentItem.afterVideo} poster={currentItem.afterPoster} />
            <div className="absolute bottom-2 right-2 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              Después
            </div>
          </Box>
        </div>
      );
    }

    // Caso 3: Un solo video
    if (currentItem.video) {
      return (
        <Box ratio="56.25%">
          <MediaVideo src={currentItem.video} poster={currentItem.poster} />
        </Box>
      );
    }

    // Caso 4: Una sola imagen
    const src = currentItem.image || currentItem.after || currentItem.before; // fallback
    return (
      <Box ratio="56.25%">
        <MediaImage src={src} alt={currentItem.title || 'Imagen'} />
      </Box>
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="relative w-full">
          {renderMain()}

          {items.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {items.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
              {currentIndex + 1} / {items.length}
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {currentItem.description.length > 160
                ? `${currentItem.description.substring(0, 160)}...`
                : currentItem.description}
            </p>
          )}
        </div>
      </div>

      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                i === currentIndex
                  ? 'bg-orange-500 scale-110 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a elemento ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
