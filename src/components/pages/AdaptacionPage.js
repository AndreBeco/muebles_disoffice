import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Move,
  LayoutGrid,
  Briefcase,
  Wrench,
  MessageCircle,
} from "lucide-react";

const AdaptacionPage = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Nuestro diferencial en mobiliario de oficina
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Adaptación y mejora ergonómica para que tu mobiliario funcione mejor
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              Ajustamos, optimizamos y transformamos mobiliario de oficina para mejorar comodidad, postura, funcionalidad y durabilidad sin necesidad de reemplazar todo.
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

            {/* BENEFICIOS RÁPIDOS */}
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              {[
                ["Más comodidad", "Mejor uso diario del mobiliario"],
                ["Más ahorro", "Menos reemplazos innecesarios"],
                ["Más funcionalidad", "Soluciones adaptadas a tu espacio"],
              ].map(([title, desc], i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                  <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Oficina moderna"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[320px]">
              <p className="text-sm text-gray-500 mb-1">Valor diferencial</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                No siempre hay que comprar nuevo
              </p>
              <p className="text-gray-700 text-sm">
                Muchas veces la mejor solución es adaptar y optimizar lo que ya tienes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 text-orange-600 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold uppercase">Nuestro enfoque</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Mejoramos lo que ya tienes para que te sirva mejor
          </h2>

          <p className="text-lg text-gray-700">
            Identificamos cómo ajustar, reforzar o mejorar el mobiliario para que responda mejor al usuario, al espacio y al uso diario.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            [Move, "Mejor ajuste al usuario", "Mejor postura, comodidad y funcionalidad"],
            [LayoutGrid, "Mejor uso del espacio", "Optimización del entorno de trabajo"],
            [Briefcase, "Inversión más inteligente", "Menos gastos innecesarios"],
          ].map(([Icon, title, desc], i) => (
            <div key={i} className="bg-gray-50 p-7 rounded-2xl border text-center h-full">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUÉ ADAPTAMOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            ["Sillas de oficina", "Ajustes ergonómicos, soporte lumbar, ruedas"],
            ["Puestos de trabajo", "Distribución, comodidad y funcionalidad"],
            ["Mobiliario complementario", "Archivadores, mesas y más"],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-white p-7 rounded-2xl border text-center h-full">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">
          ¿Cómo trabajamos este servicio?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 px-4">
          {[
            "Escuchamos tu necesidad",
            "Evaluamos el mobiliario",
            "Proponemos solución",
            "Ejecutamos mejora",
          ].map((step, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Quieres mejorar tu mobiliario sin reemplazar todo?
        </h2>

        <p className="text-gray-300 mb-8">
          Recibe una solución funcional, cómoda y ajustada a tu espacio.
        </p>

        <a
          href="https://wa.me/573177110447"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 px-8 py-4 rounded-full font-semibold"
        >
          <MessageCircle size={20} />
          Hablar con un asesor
        </a>
      </section>
    </section>
  );
};

export default AdaptacionPage;
