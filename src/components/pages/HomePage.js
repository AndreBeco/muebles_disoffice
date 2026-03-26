import React from "react";

const HomePage = () => {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Optimizamos, reparamos y adaptamos mobiliario de oficina en Cali
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Mejora la comodidad, funcionalidad y durabilidad de tus espacios sin necesidad de reemplazar todo. 
            También diseñamos y suministramos mobiliario según tus necesidades.
          </p>

          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            No solo vendemos muebles
          </h2>

          <p className="text-lg text-gray-700">
            Transformamos, adaptamos y mejoramos tu mobiliario para que realmente funcione para ti.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

          {/* Adaptación */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Adaptación y mejora ergonómica
            </h3>
            <p className="text-gray-700">
              Ajustamos tu mobiliario para mejorar postura, comodidad y productividad.
            </p>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>✔ Ajuste de altura y brazos</li>
              <li>✔ Soporte lumbar</li>
              <li>✔ Adaptación al usuario</li>
            </ul>
          </div>

          {/* Reparación */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
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
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Diseño y venta de mobiliario
            </h3>
            <p className="text-gray-700">
              Suministramos mobiliario de oficina funcional y adaptado a tus espacios.
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
              <p className="font-semibold">1.</p>
              <p>Analizamos tu necesidad</p>
            </div>

            <div>
              <p className="font-semibold">2.</p>
              <p>Evaluamos el mobiliario o espacio</p>
            </div>

            <div>
              <p className="font-semibold">3.</p>
              <p>Proponemos la mejor solución</p>
            </div>

            <div>
              <p className="font-semibold">4.</p>
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
          Escríbenos y recibe asesoría personalizada sin compromiso.
        </p>

        <a
          href="https://wa.me/573177110447"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Hablar por WhatsApp
        </a>
      </section>

    </div>
  );
};

export default HomePage;
