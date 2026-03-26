import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Adaptamos y optimizamos mobiliario de oficina en Cali
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Mejora la comodidad, funcionalidad y durabilidad de tus espacios sin
            necesidad de reemplazar todo.
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
      </section>

      {/* DIFERENCIAL */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 uppercase">
            No solo vendemos muebles
          </h2>

          <p className="text-lg text-gray-700">
            Transformamos, adaptamos y mejoramos tu mobiliario para que
            realmente funcione para ti.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Adaptación */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md border-2 border-orange-500">
            <div className="mb-4 text-4xl">🔧</div>
            <div className="inline-block mb-3 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
              Más solicitado
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Adaptación y mejora ergonómica
            </h3>
            <p className="text-gray-700">
              Ajustamos tu mobiliario para mejorar postura, comodidad y
              productividad.
            </p>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>✔ Ajuste de altura y brazos</li>
              <li>✔ Soporte lumbar</li>
              <li>✔ Adaptación al usuario</li>
            </ul>
          </div>

          {/* Reparación */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="mb-4 text-4xl">🛠</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Reparación y mantenimiento
            </h3>
            <p className="text-gray-700">
              Recuperamos y reforzamos mobiliario para extender su vida útil.
            </p>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>✔ Cambio de piezas</li>
              <li>✔ Refuerzos estructurales</li>
              <li>✔ Mantenimiento preventivo</li>
            </ul>
          </div>

          {/* Diseño */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="mb-4 text-4xl">🪑</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Diseño y venta de mobiliario
            </h3>
            <p className="text-gray-700">
              Suministramos mobiliario de oficina funcional y adaptado a tus
              espacios.
            </p>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>✔ Sillas ergonómicas</li>
              <li>✔ Puestos de trabajo</li>
              <li>✔ Archivadores</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            ¿Cómo trabajamos?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-gray-700">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
                1
              </div>
              <p>Analizamos tu necesidad</p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
                2
              </div>
              <p>Evaluamos el mobiliario o espacio</p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
                3
              </div>
              <p>Proponemos la mejor solución</p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
                4
              </div>
              <p>Ejecutamos el trabajo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          ¿Necesitas mejorar tu mobiliario?
        </h2>

        <p className="text-gray-700 mb-6">
          Recibe una solución a tu medida con asesoría personalizada.
        </p>

        <a
          href="https://wa.me/573177110447"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Hablar con un asesor
        </a>
      </section>
    </div>
  );
};

export default HomePage;
