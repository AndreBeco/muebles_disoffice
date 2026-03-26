import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Instagram,
  Facebook,
  Music2,
  CheckCircle2,
} from "lucide-react";

const ContactoPage = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Estamos listos para ayudarte
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Hablemos de la mejor solución para tu mobiliario
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8">
              Contáctanos para asesorarte en compra, adaptación, reparación o
              mantenimiento de mobiliario de oficina en Cali.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/573177110447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-4 rounded-full text-lg font-semibold transition shadow-md"
              >
                <MessageCircle size={20} />
                Hablar por WhatsApp
              </a>

              <a
                href="mailto:mueblesdisoffice@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-orange-400 text-gray-900 px-7 py-4 rounded-full text-lg font-semibold transition"
              >
                <Mail size={20} />
                Escribir al correo
              </a>
            </div>

            {/* Beneficios */}
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Atención rápida</p>
                <p>Respuesta directa por WhatsApp</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Asesoría real</p>
                <p>Según tu espacio y necesidad</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={20} />
                <p className="font-semibold text-gray-900">Atención en Cali</p>
                <p>Soluciones cercanas y personalizadas</p>
              </div>
            </div>
          </div>

          {/* Tarjeta derecha */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 min-h-[430px] flex items-center justify-center p-10">
              <div className="text-center text-white max-w-md">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <MessageCircle size={36} />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Te ayudamos a encontrar la mejor solución
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Compra, adapta, repara o mejora tu mobiliario con una atención
                  cercana, práctica y enfocada en tu necesidad real.
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[320px]">
              <p className="text-sm text-gray-500 mb-1">Canal recomendado</p>
              <p className="font-bold text-gray-900 text-lg mb-1">
                WhatsApp directo
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Escríbenos y recibe atención rápida y asesoría personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CONTACTO */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Información de contacto
            </h2>
            <p className="text-lg text-gray-600">
              Contáctanos de la forma que te resulte más cómoda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Phone size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teléfonos</h3>
              <p className="text-gray-700">+57 318 406 3943</p>
              <p className="text-gray-700">+57 317 711 0447</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Mail size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Correo</h3>
              <p className="text-gray-700 break-words">
                mueblesdisoffice@gmail.com
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <MapPin size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ubicación</h3>
              <p className="text-gray-700">Cali, Valle del Cauca</p>
              <p className="text-gray-700">Colombia</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Clock3 size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atención</h3>
              <p className="text-gray-700">Lunes a sábado</p>
              <p className="text-gray-700">Asesoría personalizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* REDES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Síguenos en redes sociales
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD */}
            <div className="bg-gray-50 rounded-2xl p-7 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Instagram size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-700">@mueblesdisoffice</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Facebook size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-700">Muebles DisOffice</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 shadow-sm border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Music2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-700">@mueblesdisoffice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para cotizar o pedir asesoría?
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Escríbenos y te ayudamos a encontrar la mejor solución.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573177110447"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>

            <a
              href="mailto:mueblesdisoffice@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              <Mail size={20} />
              Enviar correo
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactoPage;
