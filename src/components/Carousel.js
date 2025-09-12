// src/components/Carousel.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items, type, currentIndex, onIndexChange }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No hay imágenes disponibles
      </div>
    );
  }

  const currentItem = items[currentIndex];

  // 🔑 Normaliza claves posibles para la imagen única
  const soloImageSrc =
    currentItem?.image ||
    currentItem?.img ||
    currentItem?.url ||
    currentItem?.src ||
    null;

  const hasBeforeAfter = currentItem?.before && currentItem?.after;

  const nextSlide = () => onIndexChange((currentIndex + 1) % items.length);
  const prevSlide = () => onIndexChange(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  const goToSlide = (index) => onIndexChange(index);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Contenedor de imágenes con proporciones iguales */}
        <div className="relative w-full">
          {hasBeforeAfter ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              <div className="aspect-[1/1] w-full bg-white relative">
                <img
                  src={currentItem.before}
                  alt="Antes"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  Antes
                </div>
              </div>
              <div className="aspect-[1/1] w-full bg-white relative">
                <img
                  src={currentItem.after}
                  alt="Después"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  Después
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-[16/9] w-full relative bg-white">
              {soloImageSrc ? (
                <img
                  src={soloImageSrc}
                  alt={currentItem.title || 'Imagen'}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  (Falta la propiedad de imagen: usa <code>image</code>, <code>img</code> o <code>url</code>)
                </div>
              )}
            </div>
          )}

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
          {currentItem?.title && (
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {currentItem.title}
            </h3>
          )}
          {currentItem?.description && (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {currentItem.description.length > 120
                ? `${currentItem.description.substring(0, 120)}...`
                : currentItem.description}
            </p>
          )}
        </div>
      </div>

      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                index === currentIndex
                  ? 'bg-orange-500 scale-110 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
