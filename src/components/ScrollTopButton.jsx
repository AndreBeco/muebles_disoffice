// src/components/ScrollTopButton.jsx
import React from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll(); // estado inicial por si entras ya scrolleado
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Nota: lo pongo un poco más arriba (bottom-24) para no chocar con el FAB de WhatsApp
  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed right-4 sm:right-6 bottom-24 z-40 rounded-full shadow-lg transition
        bg-orange-600 text-white hover:bg-orange-700 active:scale-95
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      style={{ width: 48, height: 48 }}
    >
      {/* Flecha simple */}
      <svg viewBox="0 0 24 24" width="24" height="24" className="mx-auto" fill="currentColor" aria-hidden="true">
        <path d="M12 5l6 6-1.4 1.4L13 9.8V19h-2V9.8L7.4 12.4 6 11l6-6z" />
      </svg>
    </button>
  );
}
