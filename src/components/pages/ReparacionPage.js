import React from "react";
import {
  Hammer,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  MessageCircle,
  Armchair,
  LayoutGrid,
  Briefcase,
} from "lucide-react";

import BeforeAfterSection from "../BeforeAfterSection";

const reparacionCases = [
  {
    type: "image",
    title: "Recuperación de sillas",
    media:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    beforeAfter: "Antes → Después",
    description:
      "Reparaciones enfocadas en estabilidad, comodidad y mejor desempeño para prolongar la vida útil del mobiliario.",
    result: "Mayor estabilidad y mejor experiencia de uso.",
  },
  {
    type: "image",
    title: "Mantenimiento funcional",
    media:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    beforeAfter: "Antes → Después",
    description:
      "Intervenciones pensadas para prevenir daños mayores y conservar el mobiliario en mejores condiciones.",
    result: "Menos fallas y mejor durabilidad del mobiliario.",
  },
  {
    type: "image",
    title: "Refuerzo y mejora",
    media:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    beforeAfter: "Antes → Después",
    description:
      "Mejoras estructurales y correctivas que ayudan a recuperar funcionalidad sin reemplazar todo.",
    result: "Más funcionalidad y ahorro frente al reemplazo.",
  },
];

const ReparacionPage = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Reparación y mantenimiento de mobiliario de oficina
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Recuperamos tu mobiliario para que funcione mejor y dure más
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              Reparamos, reforzamos y mantenemos mobiliario de oficina para
              extender su vida útil, mejorar su desempeño y evitar reemplazos
              innecesarios.
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
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Más durabilidad</p>
                <p>Extiende la vida útil del mobiliario</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Más ahorro</p>
                <p>Evita reemplazos completos</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Más confianza</p>
                <p>Mejor funcionamiento y presentación</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Espacio de oficina profesional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[320px]">
              <p className="text-sm text-gray-500 mb-1">Valor diferencial</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                Reparar también es invertir bien
              </p>
              <p className="text-gray-700 text-sm">
                Un buen mantenimiento y una reparación oportuna pueden ahorrarte
                tiempo, dinero y reemplazos innecesarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <BeforeAfterSection
        title="Casos reales de reparación y mantenimiento"
        subtitle="Mira cómo recuperamos mobiliario real para devolverle funcionalidad, mejor presentación y mayor vida útil."
        items={reparacionCases}
        bgClass="bg-gray-50"
      />

      {/* BENEFICIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            [
              ShieldCheck,
              "Mejor funcionamiento",
              "Corregimos fallas que afectan estabilidad y uso diario",
            ],
            [
              RefreshCw,
              "Más vida útil",
              "Reforzar y mantener a tiempo alarga el tiempo de uso",
            ],
            [
              Hammer,
              "Ahorro frente al reemplazo",
              "Menos gasto al evitar comprar nuevo sin necesidad",
            ],
          ].map(([Icon, title, desc], i) => (
            <div
              key={i}
              className="bg-gray-50 p-7 rounded-2xl border border-gray-200 text-center h-full shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 mt-10">
          <p className="text-lg text-gray-600">
            El objetivo principal de este servicio es recuperar el mobiliario,
            mejorar su desempeño y evitar daños mayores que generen más costos.
          </p>
        </div>
      </section>

      {/* QUÉ REPARAMOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué podemos reparar o mantener?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos sobre diferentes tipos de mobiliario para recuperar su
              funcionalidad, reforzar su estructura y conservar una mejor
              presentación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                Armchair,
                "Sillas de oficina",
                "Reparación de mecanismos, bases, ruedas, brazos, espaldar, tapizado y componentes que afectan el uso diario.",
                ["Mejor estabilidad", "Mejor comodidad", "Mejor desempeño"],
              ],
              [
                LayoutGrid,
                "Puestos y mesas de trabajo",
                "Ajustes, refuerzos, nivelación y mejoras estructurales para conservar funcionalidad y buena presentación.",
                ["Más firmeza", "Más seguridad", "Mejor uso diario"],
              ],
              [
                Briefcase,
                "Archivadores y mobiliario auxiliar",
                "Reparación de herrajes, correderas, cierres, estructuras y otros elementos que influyen en el uso y la durabilidad.",
                ["Más funcionalidad", "Más durabilidad", "Mejor presentación"],
              ],
            ].map(([Icon, title, desc, bullets], i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-gray-200 text-center h-full shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-5">{desc}</p>
                <ul className="space-y-2 text-gray-700">
                  {bullets.map((b, idx) => (
                    <li key={idx}>✔ {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            ¿Cómo trabajamos este servicio?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Evaluamos el estado del mobiliario",
              "Identificamos la mejor solución",
              "Realizamos la reparación o mantenimiento",
              "Entregamos un resultado funcional y duradero",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3 font-bold">
                  {i + 1}
                </div>
                <p className="font-semibold text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tu mobiliario no está funcionando como debería?
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Recibe una solución práctica, duradera y ajustada a tu necesidad con
            asesoría personalizada.
          </p>

          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-semibold transition"
          >
            <MessageCircle size={20} />
            Hablar con un asesor
          </a>
        </div>
      </section>
    </section>
  );
};

export default ReparacionPage;
