import React from "react";
import {
  Wrench,
  Hammer,
  Armchair,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Soluciones en mobiliario de oficina en Cali
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Adaptamos y optimizamos mobiliario de oficina en Cali
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              Para que funcione mejor, dure más y se adapte a ti sin necesidad de
              reemplazar todo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/573177110447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-4 rounded-full text-lg font-semibold transition shadow-md"
              >
                <MessageCircle size={20} />
                Solicitar asesoría
              </a>

              <a
                href="https://wa.me/573177110447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-orange-400 text-gray-900 px-7 py-4 rounded-full text-lg font-semibold transition"
              >
                Cotizar por WhatsApp
              </a>
            </div>

            {/* BENEFICIOS */}
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Ahorro inteligente</p>
                <p>Evita reemplazos innecesarios</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Soluciones reales</p>
                <p>Según espacio y necesidad</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Atención en Cali</p>
                <p>Asesoría cercana y personalizada</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                alt="Oficina moderna"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tarjeta */}
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 bg-white rounded-2xl shadow-xl p-4 md:p-5 border border-gray-100 max-w-[300px]">
              <p className="text-sm text-gray-500 mb-1">Diferencial DisOffice</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                No solo vendemos muebles
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Los adaptamos y optimizamos para extender su vida útil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 text-orange-600 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Nuestro valor diferencial
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 uppercase">
            No solo vendemos muebles
          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Transformamos, adaptamos y mejoramos tu mobiliario para que realmente
            funcione para ti, se ajuste a tu espacio y dure más tiempo.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluciones que impulsan tu espacio de trabajo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combinamos suministro, mejora, reparación y adaptación para ofrecer
              soluciones prácticas, duraderas y funcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Adaptación */}
            <div className="bg-white p-7 rounded-2xl shadow-md border-2 border-orange-500 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Wrench size={28} />
              </div>

              <div className="inline-block mb-4 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                Más solicitado
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Adaptación y mejora ergonómica
              </h3>

              <p className="text-gray-700 mb-4">
                Ajustamos tu mobiliario para mejorar postura, comodidad y
                productividad.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Ajuste de altura y brazos</li>
                <li>✔ Soporte lumbar</li>
                <li>✔ Adaptación al usuario</li>
              </ul>
            </div>

            {/* Reparación */}
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Hammer size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Reparación y mantenimiento
              </h3>

              <p className="text-gray-700 mb-4">
                Recuperamos y reforzamos mobiliario para extender su vida útil.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Cambio de piezas</li>
                <li>✔ Refuerzos estructurales</li>
                <li>✔ Mantenimiento preventivo</li>
              </ul>
            </div>

            {/* Diseño */}
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Armchair size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Diseño y venta de mobiliario
              </h3>

              <p className="text-gray-700 mb-4">
                Suministramos mobiliario de oficina funcional y adaptado a tus
                espacios.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Sillas ergonómicas</li>
                <li>✔ Puestos de trabajo</li>
                <li>✔ Archivadores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            ¿Cómo trabajamos?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num, i) => {
              const textos = [
                "Analizamos tu necesidad",
                "Evaluamos el mobiliario o espacio",
                "Proponemos la mejor solución",
                "Ejecutamos el trabajo",
              ];

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
                    {num}
                  </div>
                  <p className="text-gray-700 font-medium">{textos[i]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesitas mejorar tu mobiliario?
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Recibe una solución a tu medida con asesoría personalizada.
        </p>

        <a
          href="https://wa.me/573177110447"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          <MessageCircle size={20} />
          Hablar con un asesor
        </a>
      </section>
    </div>
  );
};

export default HomePage;
