// src/components/DisenoVentasPage.js
import React from "react";
import { CATEGORIES, PRODUCTS } from "../data/catalogData";

const WP = "573177110447";

/* ========= MINI CARRUSEL 1:1 POR PRODUCTO =========
   - Usa p.images (array). Si no hay, cae a p.img (string).
   - object-contain para NO recortar imágenes.
   - Flechas, bullets y swipe (móvil).
*/
function MiniCarousel({ images = [], alt = "" }) {
  const imgs = Array.isArray(images) && images.length > 0 ? images : [];
  const [index, setIndex] = React.useState(0);
  const hasMany = imgs.length > 1;

  if (imgs.length === 0) {
    return (
      <div className="relative w-full" style={{ paddingTop: "100%" }}>
        <div className="absolute inset-0 flex items-center justify-center bg-white text-gray-400 text-sm">
          Sin imágenes
        </div>
      </div>
    );
  }

  const go = (dir) => {
    setIndex((prev) => (prev + dir + imgs.length) % imgs.length);
  };

  // Soporte de swipe en móvil
  const startX = React.useRef(0);
  const deltaX = React.useRef(0);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (deltaX.current = e.touches[0].clientX - startX.current);
  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 40) go(deltaX.current > 0 ? -1 : 1);
    deltaX.current = 0;
  };

  return (
    <div className="relative">
      {/* Lienzo cuadrado 1:1 */}
      <div
        className="relative w-full bg-white overflow-hidden"
        style={{ paddingTop: "100%" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={index}
          src={imgs[index]}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-contain bg-white p-2 transition-opacity duration-300"
        />

        {/* Contador */}
        {hasMany && (
          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {index + 1} / {imgs.length}
          </div>
        )}

        {/* Flechas */}
        {hasMany && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 rounded-full shadow"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Bullets */}
      {hasMany && (
        <div className="flex items-center justify-center gap-2 py-3">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-orange-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ============ PÁGINA DE CATÁLOGO ============ */
export default function DisenoVentasPage() {
  const [view, setView] = React.useState("grid");
  const [categoryId, setCategoryId] = React.useState(CATEGORIES[0]?.id);
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const [activeSubtype, setActiveSubtype] = React.useState(
    category?.subtypes?.[0]?.id || ""
  );

  React.useEffect(() => {
    const c = CATEGORIES.find((c) => c.id === categoryId);
    if (c?.subtypes?.length) setActiveSubtype(c.subtypes[0].id);
  }, [categoryId]);

  const filtered = PRODUCTS.filter(
    (p) => p.category === categoryId && (!activeSubtype || p.subtype === activeSubtype)
  );

  // ---------- CARD DE PRODUCTO ----------
  const ProductCard = ({ p }) => {
    // Acepta p.images (array) o p.img (string como respaldo)
    const images =
      Array.isArray(p.images) && p.images.length > 0 ? p.images : p.img ? [p.img] : [];

    return (
      <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        {/* Mini carrusel de ángulos */}
        <MiniCarousel images={images} alt={p.name} />

        <div className="px-5 pb-5">
          <h3 className="text-lg font-semibold">{p.name}</h3>

          {p.features?.length > 0 && (
            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
              {p.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}

          <div className="mt-5">
            <a
              href={`https://wa.me/${WP}?text=Hola,%20me%20interesa:%20${encodeURIComponent(
                p.name
              )}.%20¿Me%20pueden%20cotizar?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </article>
    );
  };

  // ---------- GRID DE CATEGORÍAS ----------
  const CategoriesGrid = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Diseño y Ventas</h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Explora nuestras categorías y descubre subtipos y modelos.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="text-left bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Portada 3:2 con contain (para que no se corte) */}
            <button
              onClick={() => {
                setCategoryId(cat.id);
                setView("category");
              }}
              className="block w-full text-left focus:outline-none"
            >
              <div className="relative w-full overflow-hidden bg-white" style={{ paddingTop: "66.6667%" }}>
                <img
                  src={cat.cover}
                  alt={cat.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-contain p-3 pointer-events-none select-none"
                />
              </div>
            </button>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setCategoryId(cat.id);
                    setView("category");
                  }}
                  className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition"
                >
                  Ver {cat.title}
                </button>
                <a
                  href={`https://wa.me/${WP}?text=Hola,%20quiero%20cotizar%20${encodeURIComponent(
                    cat.title
                  )}%20para%20mi%20oficina.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-center hover:bg-gray-50 transition"
                >
                  Cotizar {cat.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // ---------- VISTA DE CATEGORÍA ----------
  const CategoryView = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setView("grid")} className="text-sm text-gray-600 hover:underline">
          ← Volver a categorías
        </button>
        <h2 className="text-2xl font-bold">{category?.title}</h2>
        <div />
      </div>

      {category?.subtypes?.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-8">
          {category.subtypes.map((st) => {
            const active = st.id === activeSubtype;
            return (
              <button
                key={st.id}
                onClick={() => setActiveSubtype(st.id)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  active
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
                }`}
              >
                {st.name}
              </button>
            );
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-gray-600">Pronto añadiremos más productos de esta categoría.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <a
          href={`https://wa.me/${WP}?text=Hola,%20quiero%20cotizar%20${encodeURIComponent(
            category?.title || "una categoría"
          )}%20para%20mi%20oficina.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition"
        >
          Cotizar esta categoría
        </a>
      </div>
    </section>
  );

  return view === "grid" ? <CategoriesGrid /> : <CategoryView />;
}
