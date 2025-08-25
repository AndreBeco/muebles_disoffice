// components/DisenoVentasPage.jsx
import React from "react";
import { CATEGORIES, PRODUCTS } from "../data/catalogData";

const WP = "573177110447";

export default function DisenoVentasPage() {
  const [view, setView] = React.useState("grid");
  const [categoryId, setCategoryId] = React.useState(CATEGORIES[0]?.id);
  const category = CATEGORIES.find(c => c.id === categoryId);
  const [activeSubtype, setActiveSubtype] = React.useState(category?.subtypes?.[0]?.id || "");

  React.useEffect(() => {
    const c = CATEGORIES.find(c => c.id === categoryId);
    if (c?.subtypes?.length) setActiveSubtype(c.subtypes[0].id);
  }, [categoryId]);

  const filtered = PRODUCTS.filter(
    p => p.category === categoryId && (!activeSubtype || p.subtype === activeSubtype)
  );

  const ProductCard = ({ p }) => (
    <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
   {/* Imagen cuadrada 1:1 */}
<div className="relative w-full" style={{ paddingTop: '100%' }}>
  <img
    src={p.img}
    alt={p.name}
    className="absolute inset-0 w-full h-full object-cover"
    referrerPolicy="no-referrer"
  />
</div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        {p.features?.length > 0 && (
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
            {p.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        )}
        <div className="mt-4 flex items-center justify-between">
          <a
            href={`https://wa.me/${WP}?text=Hola,%20me%20interesa%20${encodeURIComponent(p.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            Cotizar por WhatsApp
          </a>
          <button
            className="text-sm px-3 py-2 border rounded hover:bg-gray-50"
            onClick={() => alert("Aquí puedes abrir un modal con más fotos o ficha técnica.")}
          >
            Ver más
          </button>
        </div>
      </div>
    </article>
  );

  const CategoriesGrid = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Diseño y Ventas</h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Explora nuestras categorías y descubre subtipos y modelos.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setCategoryId(cat.id); setView("category"); }}
            className="text-left bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {/* Imagen 3:2 para portada de categoría */}
      <div className="relative w-full" style={{ paddingTop: '66.6667%' }}>
        <img
          src={cat.cover}
          alt={cat.title}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
         />
      </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
              <span className="inline-block mt-3 text-orange-600 font-medium">
                Ver {cat.title} →
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );

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
          {category.subtypes.map(st => {
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
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </section>
  );

  return view === "grid" ? <CategoriesGrid /> : <CategoryView />;
}
