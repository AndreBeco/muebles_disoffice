import React from "react";
import {
  Hammer,
  CheckCircle2,
  Sparkles,
  Wrench,
  ShieldCheck,
  RefreshCw,
  MessageCircle,
  Images,
  Armchair,
  PanelTop,
  Briefcase,
} from "lucide-react";

const ReparacionPage = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
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

            {/* Beneficios rápidos */}
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

          {/* Imagen / bloque visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Espacio de oficina profesional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 bg-white rounded-2xl shadow-xl p-4 md:p-5 border border-gray-100 max-w-[320px]">
              <p className="text-sm text-gray-500 mb-1">Valor diferencial</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                Reparar también es invertir bien
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Un buen mantenimiento y una reparación oportuna pueden ahorrarte
                tiempo, dinero y reemplazos innecesarios.
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
            Cuidar tu mobiliario también es una inversión inteligente
          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            En Muebles DisOffice entendemos que el mobiliario de oficina está
            expuesto al uso constante y al desgaste diario. Nuestro trabajo está
            en repararlo, reforzarlo y mantenerlo en mejores condiciones para que
            siga cumpliendo su función de forma segura, cómoda y eficiente.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de reparar y mantener
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una reparación oportuna y un buen mantenimiento pueden mejorar la
              funcionalidad, la apariencia y la durabilidad de tu mobiliario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Mejor funcionamiento
              </h3>
              <p className="text-gray-700">
                Corregimos fallas que afectan la estabilidad, el uso diario y la
                comodidad para que el mobiliario vuelva a responder bien.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <RefreshCw size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Más vida útil
              </h3>
              <p className="text-gray-700">
                Reforzar y mantener a tiempo permite alargar el tiempo de uso del
                mobiliario y aprovechar mejor la inversión realizada.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Ahorro frente al reemplazo
              </h3>
              <p className="text-gray-700">
                Muchas veces una reparación o un mantenimiento adecuado evitan el
                costo de tener que comprar mobiliario nuevo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Antes / después - preparado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
              <Images size={30} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Próximamente: antes y después de reparaciones reales
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              Esta sección quedará lista para mostrar imágenes o videos reales de
              reparaciones y mantenimientos realizados, para que los clientes
              puedan ver la mejora visual y funcional del mobiliario.
            </p>

            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Por ahora, nuestras intervenciones se realizan según el tipo de
              daño, el uso esperado y la necesidad específica de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Qué podemos reparar */}
      <section className="py-16 bg-white">
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
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Armchair size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Sillas de oficina
              </h3>
              <p className="text-gray-700 mb-4">
                Reparación de mecanismos, bases, ruedas, brazos, espaldar,
                tapizado y componentes que afectan el uso diario.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Mejor estabilidad</li>
                <li>✔ Mejor comodidad</li>
                <li>✔ Mejor desempeño</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <PanelTop size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Puestos y mesas de trabajo
              </h3>
              <p className="text-gray-700 mb-4">
                Ajustes, refuerzos, nivelación y mejoras estructurales para
                conservar funcionalidad y buena presentación.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Más firmeza</li>
                <li>✔ Más seguridad</li>
                <li>✔ Mejor uso diario</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Archivadores y mobiliario auxiliar
              </h3>
              <p className="text-gray-700 mb-4">
                Reparación de herrajes, correderas, cierres, estructuras y otros
                elementos que influyen en el uso y la durabilidad.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Más funcionalidad</li>
                <li>✔ Más durabilidad</li>
                <li>✔ Mejor presentación</li>
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
                "Evaluamos el estado del mobiliario",
                "Identificamos la mejor solución",
                "Realizamos la reparación o mantenimiento",
                "Entregamos un resultado funcional y duradero",
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
            ¿Tu mobiliario necesita reparación o mantenimiento?
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Recibe una solución práctica, duradera y ajustada a tu necesidad con
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

export default ReparacionPage;
