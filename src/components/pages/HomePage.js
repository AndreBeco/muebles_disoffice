import React from "react";
import { Wrench, Hammer, Armchair, MessageCircle, CheckCircle2 } from "lucide-react";

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

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Adaptamos y optimizamos mobiliario de oficina para que funcione mejor para ti
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              Mejoramos comodidad, funcionalidad y durabilidad sin necesidad de reemplazar todo.
              También suministramos mobiliario para oficinas, empresas e instituciones.
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

            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <p className="font-semibold text-gray-900">Ahorro inteligente</p>
                <p>Evita reemplazos innecesarios</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <p className="font-semibold text-gray-900">Soluciones reales</p>
                <p>Según espacio y necesidad</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <p className="font-semibold text-gray-900">Atención en Cali</p>
                <p>Asesoría cercana y personalizada</p>
              </div>
            </div>
          </div>

          {/* Imagen / bloque visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[420px] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                alt="Espacio de oficina moderno"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 md:left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-xs">
              <p className="text-sm text-gray-500 mb-1">Diferencial DisOffice</p>
              <p className="font-bold text-gray-900 text-lg">
                No solo vendemos muebles
              </p>
              <p className="text-gray-700 text-sm mt-1">
                Los adaptamos, mejoramos y optimizamos para extender su vida útil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 uppercase">
            No solo vendemos muebles
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Transformamos, adaptamos y mejoramos tu mobiliario para que realmente
            funcione para ti, se ajuste a tu espacio y dure más tiempo.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
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
            <div className="bg-white p-7 rounded-2xl shadow-md border-2 border-orange-500 relative">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Wrench size={28} />
              </div>

              <div className="inline-block mb-4 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                Más solicitado
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Adaptación y mejora ergonómica
              </h3>

              <p className="text-gray-700 mb-5">
                Ajustamos tu mobiliario para mejorar postura, comodidad y productividad.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-orange-500" />
                  Ajuste de altura y brazos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-orange-500" />
                  Soporte lumbar
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-orange-500" />
                  Adaptación al usuario
                </li>
              </ul>
            </div>

            {/* Reparación */}
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Hammer size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Reparación y mantenimiento
              </h3>

              <p className="text-gray-700 mb-5">
                Recuperamos y reforzamos mobiliario para extender su vida útil.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Cambio de piezas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Refuerzos estructurales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Mantenimiento preventivo
                </li>
              </ul>
            </div>

            {/* Diseño */}
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Armchair size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Diseño y venta de mobiliario
              </h3>

              <p className="text-gray-700 mb-5">
                Suministramos mobiliario de oficina funcional y adaptado a tus espacios.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Sillas ergonómicas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Puestos de trabajo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Archivadores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            ¿Cómo trabajamos?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-700">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xl">
                1
              </div>
              <p className="font-medium">Analizamos tu necesidad</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xl">
                2
              </div>
              <p className="font-medium">Evaluamos el mobiliario o espacio</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xl">
                3
              </div>
              <p className="font-medium">Proponemos la mejor solución</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xl">
                4
              </div>
              <p className="font-medium">Ejecutamos el trabajo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas mejorar tu mobiliario?
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Recibe una solución a tu medida con asesoría personalizada.
          </p>

          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-4 rounded-full text-lg font-semibold transition shadow-md"
          >
            <MessageCircle size={20} />
            Hablar con un asesor
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
