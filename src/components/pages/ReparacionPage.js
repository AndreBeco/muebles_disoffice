import React from "react";

const ReparacionPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Reparación y Mantenimiento
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Recuperamos y mejoramos mobiliario de oficina para alargar su vida útil,
            optimizar su funcionamiento y evitar reemplazos innecesarios.
          </p>
        </div>

        {/* Introducción */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cuidar tu mobiliario también es una inversión inteligente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En Muebles DisOffice entendemos que el mobiliario de oficina está
              expuesto al uso constante y al desgaste diario. Por eso ofrecemos
              soluciones de reparación y mantenimiento que permiten conservar su
              funcionalidad, mejorar su apariencia y extender su tiempo de uso.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nuestro objetivo es ayudarte a reducir costos, aprovechar mejor tus
              recursos y mantener tus espacios de trabajo en condiciones óptimas,
              sin necesidad de reemplazar cada pieza al primer daño o deterioro.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trabajamos con enfoque práctico, revisando cada caso para proponer
              soluciones duraderas y funcionales según el tipo de mobiliario y
              la necesidad del cliente.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Beneficios de reparar y mantener
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Mayor vida útil del mobiliario</li>
              <li>✔ Ahorro frente a reemplazos completos</li>
              <li>✔ Mejor funcionamiento y seguridad</li>
              <li>✔ Mejor presentación de los espacios</li>
              <li>✔ Prevención de daños mayores</li>
              <li>✔ Soluciones ajustadas a cada necesidad</li>
            </ul>
          </div>
        </div>

        {/* Qué podemos reparar */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            ¿Qué podemos reparar o mantener?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sillas de oficina
              </h3>
              <p className="text-gray-700">
                Reparación de mecanismos, bases, ruedas, brazos, espaldar, tapizado
                y componentes que afectan el uso diario de la silla.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Puestos y mesas de trabajo
              </h3>
              <p className="text-gray-700">
                Ajustes, refuerzos, nivelación, mejoras estructurales y mantenimiento
                para conservar funcionalidad y buena presentación.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Archivadores y mobiliario auxiliar
              </h3>
              <p className="text-gray-700">
                Reparación de herrajes, correderas, cierres, estructuras y otros
                elementos que influyen en el uso y la durabilidad del mobiliario.
              </p>
            </div>
          </div>
        </div>

        {/* Enfoque del servicio */}
        <div className="mb-16 bg-gray-100 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Nuestro enfoque en reparación y mantenimiento
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Evaluación
              </h3>
              <p className="text-gray-700">
                Revisamos el estado del mobiliario para identificar el problema y
                la mejor alternativa de solución.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Intervención
              </h3>
              <p className="text-gray-700">
                Realizamos la reparación o el mantenimiento según el tipo de daño,
                uso esperado y condición del mueble.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Optimización
              </h3>
              <p className="text-gray-700">
                Buscamos que el mobiliario no solo vuelva a funcionar, sino que lo
                haga mejor y dure más tiempo.
              </p>
            </div>
          </div>
        </div>

        {/* Mensaje de confianza */}
        <div className="mb-16">
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Mantenimiento que ayuda a prevenir, no solo a corregir
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Un buen mantenimiento puede evitar daños mayores, mejorar la experiencia
              de uso y ayudarte a conservar tus espacios de trabajo en mejores
              condiciones durante más tiempo.
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tu mobiliario necesita reparación o mantenimiento?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Escríbenos y te ayudamos a encontrar una solución práctica, duradera
            y ajustada a tu necesidad.
          </p>
          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Solicitar asesoría por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReparacionPage;
