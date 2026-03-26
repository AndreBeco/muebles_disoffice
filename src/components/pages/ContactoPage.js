import React from "react";

const ContactoPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte con soluciones en mobiliario de oficina,
            adaptación, reparación, mantenimiento y asesoría personalizada en Cali.
          </p>
        </div>

        {/* Bloques de contacto */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          {/* Información directa */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h2>

            <div className="space-y-5 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Teléfonos</p>
                <p>+57 318 406 3943</p>
                <p>+57 317 711 0447</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Correo electrónico</p>
                <p>mueblesdisoffice@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Ubicación</p>
                <p>Cali, Valle del Cauca, Colombia</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Horario de atención</p>
                <p>Lunes a sábado</p>
              </div>
            </div>
          </div>

          {/* Acción principal */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-sm flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Recibe asesoría personalizada
            </h2>
            <p className="text-gray-300 mb-6">
              Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución
              para tu mobiliario de oficina, ya sea compra, adaptación, reparación
              o mantenimiento.
            </p>

            <a
              href="https://wa.me/573177110447"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition text-center"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Síguenos en redes sociales
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600">@mueblesdisoffice</p>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600">Muebles DisOffice</p>
            </a>

            <a
              href="https://www.tiktok.com/@mueblesdisoffice"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-600">@mueblesdisoffice</p>
            </a>
          </div>
        </div>

        {/* Cierre */}
        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            En Muebles DisOffice estamos para ayudarte a crear, mejorar y mantener
            espacios de trabajo más funcionales, cómodos y duraderos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactoPage;
