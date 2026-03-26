import React from "react";

const QuienesSomosPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            En Muebles DisOffice trabajamos para que tus espacios de oficina sean más cómodos,
            funcionales y duraderos, combinando diseño, suministro, reparación y adaptación
            del mobiliario según cada necesidad.
          </p>
        </div>

        {/* Historia / identidad */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Más que vender mobiliario, ofrecemos soluciones
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En Muebles DisOffice entendemos que cada espacio de trabajo necesita más que muebles:
              necesita comodidad, funcionalidad y soluciones que realmente se adapten al usuario.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Por eso no nos enfocamos solo en la venta. También ayudamos a recuperar,
              mejorar y optimizar mobiliario de oficina para extender su vida útil y
              aprovechar mejor cada espacio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestro enfoque combina asesoría personalizada, atención cercana y soluciones prácticas
              para empresas, oficinas, instituciones y personas que buscan mobiliario funcional y duradero.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Lo que nos diferencia
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ No solo vendemos: adaptamos, optimizamos y mejoramos.</li>
              <li>✔ Ayudamos a ahorrar al aprovechar mejor el mobiliario existente.</li>
              <li>✔ Ofrecemos soluciones según el espacio y la necesidad real del cliente.</li>
              <li>✔ Combinamos funcionalidad, comodidad y durabilidad.</li>
              <li>✔ Brindamos atención personalizada en Cali.</li>
            </ul>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Nuestro enfoque
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Funcionalidad
              </h3>
              <p className="text-gray-700">
                Diseñamos y proponemos soluciones que realmente respondan al uso diario,
                al espacio disponible y a las necesidades del cliente.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comodidad
              </h3>
              <p className="text-gray-700">
                Buscamos que cada puesto de trabajo aporte bienestar, mejor postura y una
                experiencia más cómoda para quien lo usa.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Durabilidad
              </h3>
              <p className="text-gray-700">
                Apostamos por soluciones prácticas que alarguen la vida útil del mobiliario
                y representen una inversión más inteligente.
              </p>
            </div>
          </div>
        </div>

        {/* Cierre */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Queremos que tu mobiliario trabaje a tu favor
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            En Muebles DisOffice creemos que un buen espacio de trabajo no solo se ve bien:
            debe funcionar bien, durar y adaptarse a quienes lo usan.
          </p>
          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosPage;
