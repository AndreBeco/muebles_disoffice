import React from "react";

const AdaptacionPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Adaptación y Mejora Ergonómica
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos mobiliario de oficina para mejorar comodidad, funcionalidad y
            rendimiento, adaptándolo al usuario, al espacio y a la necesidad real.
          </p>
        </div>

        {/* Introducción */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestro diferencial está en mejorar lo que ya tienes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En Muebles DisOffice entendemos que muchas veces no es necesario reemplazar
              todo el mobiliario para lograr un espacio más cómodo, funcional y eficiente.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Por eso ofrecemos soluciones de adaptación y mejora ergonómica que permiten
              ajustar, optimizar y transformar muebles de oficina según las necesidades
              del usuario y las condiciones del espacio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestro enfoque busca que cada elemento trabaje mejor para quien lo usa,
              ayudando a mejorar postura, comodidad, productividad y vida útil del mobiliario.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Beneficios de adaptar tu mobiliario
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Más comodidad en el uso diario</li>
              <li>✔ Mejor ajuste al cuerpo y a la postura</li>
              <li>✔ Aprovechamiento del mobiliario existente</li>
              <li>✔ Ahorro frente a reemplazos innecesarios</li>
              <li>✔ Soluciones ajustadas al espacio disponible</li>
              <li>✔ Mayor funcionalidad y durabilidad</li>
            </ul>
          </div>
        </div>

        {/* Qué podemos adaptar */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            ¿Qué podemos adaptar o mejorar?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sillas de oficina
              </h3>
              <p className="text-gray-700">
                Ajustes de altura, brazos, soporte lumbar, mecanismos, ruedas y componentes
                que influyen directamente en la comodidad y funcionalidad.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Puestos de trabajo
              </h3>
              <p className="text-gray-700">
                Adecuaciones para mejorar distribución, uso del espacio y funcionalidad del
                puesto según el tipo de trabajo y la necesidad del usuario.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mobiliario complementario
              </h3>
              <p className="text-gray-700">
                Mejoras en archivadores, mesas y otros elementos para optimizar su uso,
                reforzar su estructura o ajustarlos a nuevos requerimientos.
              </p>
            </div>
          </div>
        </div>

        {/* Cómo trabajamos */}
        <div className="mb-16 bg-gray-100 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            ¿Cómo trabajamos este servicio?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-orange-600 mb-2">1</p>
              <p className="text-gray-700">Escuchamos tu necesidad</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600 mb-2">2</p>
              <p className="text-gray-700">Evaluamos el mobiliario y el espacio</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600 mb-2">3</p>
              <p className="text-gray-700">Proponemos la mejor adaptación</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600 mb-2">4</p>
              <p className="text-gray-700">Ejecutamos la mejora</p>
            </div>
          </div>
        </div>

        {/* Nota visual por falta de fotos */}
        <div className="mb-16 text-center">
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Soluciones adaptadas a cada caso
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Cada adaptación se realiza según el tipo de mobiliario, el uso esperado y la
              necesidad específica del cliente. Nuestro objetivo es encontrar una solución
              práctica, funcional y duradera.
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Quieres mejorar tu mobiliario sin reemplazar todo?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Escríbenos y te ayudamos a encontrar una solución funcional, cómoda y ajustada
            a tu espacio.
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

export default AdaptacionPage;
