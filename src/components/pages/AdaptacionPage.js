import React from "react";
import {
  Wrench,
  CheckCircle2,
  Sparkles,
  Move,
  PanelTop,
  Briefcase,
  MessageCircle,
  Images,
} from "lucide-react";

const AdaptacionPage = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Nuestro diferencial en mobiliario de oficina
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Adaptación y mejora ergonómica para que tu mobiliario funcione mejor
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              Ajustamos, optimizamos y transformamos mobiliario de oficina para
              mejorar comodidad, postura, funcionalidad y durabilidad sin necesidad
              de reemplazar todo.
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

            {/* Beneficios rápidos */}
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Más comodidad</p>
                <p>Mejor uso diario del mobiliario</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Más ahorro</p>
                <p>Menos reemplazos innecesarios</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Más funcionalidad</p>
                <p>Soluciones adaptadas a tu espacio</p>
              </div>
            </div>
          </div>

          {/* Imagen / bloque visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="Espacio de oficina funcional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 bg-white rounded-2xl shadow-xl p-4 md:p-5 border border-gray-100 max-w-[320px]">
              <p className="text-sm text-gray-500 mb-1">Valor diferencial</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                No siempre hay que comprar nuevo
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Muchas veces la mejor solución es adaptar y optimizar lo que ya
                tienes para que funcione mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valor diferencial */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 text-orange-600 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Nuestro enfoque
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Mejoramos lo que ya tienes para que te sirva mejor
          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            En Muebles DisOffice entendemos que muchas veces no es necesario
            reemplazar todo el mobiliario. Nuestro trabajo está en identificar
            cómo ajustarlo, reforzarlo o mejorarlo para responder mejor al usuario,
            al espacio y al uso diario.
          </p>
        </div>
      </section>

      {/* Qué beneficios obtienes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de adaptar tu mobiliario
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una buena adaptación puede transformar la experiencia de uso sin que
              tengas que asumir el costo de reemplazar todo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Move size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Mejor ajuste al usuario
              </h3>
              <p className="text-gray-700">
                Adaptamos elementos clave para mejorar postura, comodidad y
                funcionalidad según la necesidad real de quien usa el mobiliario.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <PanelTop size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Mejor aprovechamiento del espacio
              </h3>
              <p className="text-gray-700">
                Buscamos que el mobiliario responda mejor al entorno disponible y
                al tipo de trabajo, mejorando distribución y uso del espacio.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Inversión más inteligente
              </h3>
              <p className="text-gray-700">
                Al extender la vida útil del mobiliario y mejorar su desempeño,
                puedes ahorrar frente a reemplazos completos e innecesarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Antes / después - subido más arriba */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
              <Images size={30} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Próximamente: antes y después de nuestros trabajos
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              Esta sección quedará lista para mostrar imágenes o videos reales de
              adaptaciones y mejoras realizadas, de modo que los clientes puedan
              ver visualmente la transformación del mobiliario.
            </p>

            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Por ahora, nuestras soluciones se desarrollan según el tipo de
              mobiliario, el espacio disponible y la necesidad específica de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Qué podemos adaptar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué podemos adaptar o mejorar?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos sobre diferentes tipos de mobiliario para optimizar su
              uso, comodidad y funcionalidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Sillas de oficina
              </h3>
              <p className="text-gray-700 mb-4">
                Ajustes de altura, brazos, soporte lumbar, mecanismos, ruedas y
                otros componentes que influyen directamente en la comodidad.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Ajuste ergonómico</li>
                <li>✔ Mejor soporte</li>
                <li>✔ Mejor experiencia de uso</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <PanelTop size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Puestos de trabajo
              </h3>
              <p className="text-gray-700 mb-4">
                Adecuaciones que ayudan a mejorar distribución, funcionalidad,
                comodidad y aprovechamiento del espacio.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Optimización del espacio</li>
                <li>✔ Mejor disposición</li>
                <li>✔ Uso más práctico</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Mobiliario complementario
              </h3>
              <p className="text-gray-700 mb-4">
                Mejoras en archivadores, mesas u otros elementos para reforzar su
                uso, su estructura o su adaptación a nuevas necesidades.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Más funcionalidad</li>
                <li>✔ Más durabilidad</li>
                <li>✔ Mejor aprovechamiento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            ¿Cómo trabajamos este servicio?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num, i) => {
              const textos = [
                "Escuchamos tu necesidad",
                "Evaluamos el mobiliario y el espacio",
                "Proponemos la mejor adaptación",
                "Ejecutamos la mejora",
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
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres mejorar tu mobiliario sin reemplazar todo?
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Recibe una solución funcional, cómoda y ajustada a tu espacio con
            asesoría personalizada.
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

export default AdaptacionPage;
