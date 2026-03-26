import React from "react";
import {
  Sparkles,
  Target,
  ShieldCheck,
  Wrench,
  MessageCircle,
  CheckCircle2,
  Building2,
} from "lucide-react";

const QuienesSomosPage = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Más que mobiliario, soluciones reales
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ayudamos a que los espacios de trabajo funcionen mejor
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              En Muebles DisOffice combinamos venta, adaptación, reparación y
              mejora de mobiliario de oficina para ofrecer soluciones más
              funcionales, cómodas y duraderas en Cali.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/573177110447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-4 rounded-full text-lg font-semibold transition shadow-md"
              >
                <MessageCircle size={20} />
                Hablar con un asesor
              </a>

              <a
                href="https://wa.me/573177110447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-orange-400 text-gray-900 px-7 py-4 rounded-full text-lg font-semibold transition"
              >
                Conocer nuestros servicios
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Soluciones reales</p>
                <p>Según necesidad y espacio</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Atención cercana</p>
                <p>Asesoría personalizada en Cali</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Valor diferencial</p>
                <p>No solo vendemos, optimizamos</p>
              </div>
            </div>
          </div>

          {/* Bloque visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
                alt="Oficina moderna profesional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 bg-white rounded-2xl shadow-xl p-4 md:p-5 border border-gray-100 max-w-[320px]">
              <p className="text-sm text-gray-500 mb-1">Nuestra visión</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                Espacios más funcionales y duraderos
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Queremos que cada cliente sienta que su mobiliario le aporta más
                comodidad, mejor rendimiento y una inversión mejor aprovechada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 text-orange-600 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Quiénes somos
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            No somos solo una empresa de muebles
          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            En Muebles DisOffice entendemos que un espacio de trabajo no se
            resuelve únicamente comprando muebles. Muchas veces la mejor decisión
            está en adaptar, optimizar, reparar o mejorar lo que ya existe para
            que funcione mejor, dure más y responda realmente al usuario.
          </p>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro valor no está solo en vender mobiliario, sino en ofrecer
              soluciones útiles, prácticas y bien pensadas para cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full text-center hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Adaptación y mejora
              </h3>
              <p className="text-gray-700">
                No nos limitamos a suministrar mobiliario. También lo adaptamos,
                mejoramos y optimizamos para que se ajuste mejor al espacio y al usuario.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full text-center hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Soluciones duraderas
              </h3>
              <p className="text-gray-700">
                Buscamos que cada intervención represente una inversión mejor
                aprovechada, con más funcionalidad, más durabilidad y más valor.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full text-center hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Enfoque profesional
              </h3>
              <p className="text-gray-700">
                Atendemos empresas, oficinas e instituciones con una visión más
                seria, cercana y orientada a resolver necesidades reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIÓN Y ENFOQUE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestra visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Queremos consolidarnos como una marca reconocida por ofrecer
              soluciones en mobiliario de oficina que combinen funcionalidad,
              comodidad, adaptación y durabilidad, generando más valor para cada cliente.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestro enfoque
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Creemos en una forma más inteligente de trabajar el mobiliario:
              evaluar cada caso, proponer soluciones útiles y ayudar a que los
              espacios funcionen mejor sin caer siempre en el reemplazo total.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construimos espacios de trabajo con más valor
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Si buscas una empresa que no solo venda mobiliario, sino que también
            te ayude a optimizarlo y aprovecharlo mejor, estamos listos para ayudarte.
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
        </div>
      </section>
    </section>
  );
};

export default QuienesSomosPage;
