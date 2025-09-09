import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import emailjs from "@emailjs/browser";
import carouselData from "./data/carouselData";
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import DisenoVentasPage from './components/DisenoVentasPage.js'; // <-- ajusta a .js si tu archivo es .js

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [carouselIndex, setCarouselIndex] = useState({ adaptacion: 0, diseno: 0, reparacion: 0 });

  // Función para manejar la navegación
  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
  };

  const updateCarouselIndex = (type, newIndex) => {
    setCarouselIndex(prev => ({
      ...prev,
      [type]: newIndex
    }));
  }; // <-- CERRAR ESTA FUNCIÓN ERA EL ERROR

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
          <div className="flex justify-center space-x-6">

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              {/* Ícono Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
              Instagram
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              {/* Ícono Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
              </svg>
              Facebook
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@mueblesdisoffice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              {/* Ícono TikTok */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                <path d="M12 2c1.5 0 2.9.5 4.1 1.3a6.3 6.3 0 0 0 2.6 1.1v3.4a9.7 9.7 0 0 1-3-.7v7.6a6.7 6.7 0 1 1-6.7-6.7c.4 0 .8 0 1.2.1V12a3.3 3.3 0 1 0 2.3 3.1V2z" />
              </svg>
              TikTok
            </a>

          </div>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/37/b8/dc/37b8dc7d09da2a13850861cc2d50002a.jpg')`,
        }}
      >
        {/* Capa de oscurecimiento */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Contenido encima */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Muebles DisOffice transforma tu mobiliario para que trabaje contigo, no contra ti.
            </h1>
            <p className="text-xl mb-8">
              Diseñamos, adaptamos y reparamos muebles de oficina para extender su vida útil, para mejorar
              su ergonomía y ajustarlo a las necesidades reales de cada espacio. Más que vender muebles,
              ayudamos a crear entornos funcionales, cómodos y personalizados que impulsan tu bienestar y productividad.
            </p>
            <button
              onClick={() => handleNavigation('contacto')}
              className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700"
            >
              Recibe una cotización sin costo
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Adaptación y Mejora Ergonómica</h3>
              <p className="text-gray-600 mb-4">
                En Muebles DisOffice transformamos tu mobiliario para que se ajuste a ti, no al revés.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Ajustes ergonómicos personalizados: altura, respaldo, apoyo lumbar y reposabrazos.</li>
                <li>✓ Mejora de mecanismos: reemplazo de partes desgastadas por opciones más resistentes.</li>
                <li>✓ Refuerzo de estructuras: prolongamos la vida útil de sillas, escritorios y archivadores.</li>
                <li>✓ Reacondicionamiento visual y funcional: pintura, tapizado, rodachines y más.</li>
                <li>✓ Adaptación a nuevos espacios o usos: rediseñamos según tus nuevas necesidades.</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Diseño y Ventas</h3>
              <p className="text-gray-600 mb-6">
                Creamos muebles que se adaptan a tu espacio, estilo y forma de trabajar. Diseñamos y fabricamos mobiliario de oficina funcional, ergonómico y a medida, con materiales de alta calidad y enfoque en la durabilidad.
              </p>
              <p className="text-gray-600">
                Ofrecemos desde escritorios, archivadores y sillas, hasta soluciones personalizadas para oficinas completas. Te asesoramos sin costo, entregamos e instalamos en Cali, y garantizamos cada producto que sale de nuestro taller.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🧰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Reparación y Mantenimiento</h3>
              <p className="text-gray-600 mb-4">
                Reparamos y restauramos sillas, escritorios y archivadores, dejándolos como nuevos sin necesidad de reemplazo.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Reparación de mecanismos y estructuras: Arreglamos bases, pistones, brazos, gavetas y más.</li>
                <li>✓ Reemplazo de partes dañadas: Rodachines, espumas, tornillos, rieles y componentes técnicos.</li>
                <li>✓ Retapizado profesional: Renovamos el aspecto con telas y acabados resistentes y modernos.</li>
                <li>✓ Corrección de fallas funcionales: Solucionamos problemas de estabilidad, movimiento o ajuste</li>
                <li>✓ Revisión técnica preventiva: Evaluamos el estado del mobiliario para evitar daños futuros.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas renovar o mejorar tu mobiliario de oficina?</h2>
          <p className="text-xl mb-8">Solicita una asesoría sin costo y descubre cómo podemos transformar tu espacio de trabajo.</p>
          <button
            onClick={() => handleNavigation('contacto')}
            className="bg-white text-orange-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
          >
            Contactar ahora
          </button>
        </div>
      </section>
    </div>
  );

  const QuienesSomosPage = () => (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Quiénes Somos</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Muebles DisOffice es una empresa caleña especializada en diseño, fabricación, venta,
            reparación y adaptación de mobiliario para oficina y hogar. Nuestra propuesta va más allá de vender muebles: transformamos
            los que ya tienes para que se ajusten a tus necesidades reales, creando espacios más cómodos, ergonómicos y funcionales.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700">
              Ofrecer soluciones de mobiliario que aumenten el bienestar y la productividad, prolongando la vida útil de los muebles
              mediante mejoras, restauraciones y rediseños, con un enfoque sostenible.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700">
              Ser la empresa líder en Cali en soluciones integrales de mobiliario, reconocida por la innovación ergonómica,
              la personalización y el compromiso ambiental a través de la reutilización.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• No solo vendemos: restauramos, adaptamos y mejoramos.</li>
              <li>• Especialistas en escritorios, archivadores, puestos de trabajo y sillas ergonómicas.</li>
              <li>• Ahorro para empresas mediante reparación y mantenimiento profesional.</li>
              <li>• Asesoría personalizada sin costo.</li>
              <li>• Garantías de hasta 3 años.</li>
              <li>• Transporte e instalación incluidos en Cali.</li>
              <li>• Servicio en otras ciudades según acuerdo.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestro Valor Diferencial</h2>
            <p className="text-gray-700 mb-4">
              En Muebles DisOffice no solo diseñamos y fabricamos mobiliario nuevo, también recuperamos y transformamos el que ya tienes. Restauramos sillas, escritorios, archivadores y otros muebles de oficina que muchas empresas creen irrecuperables, extendiendo su vida útil y reduciendo costos.
            </p>
            <p className="text-gray-700 mb-4">
              Ofrecemos un portafolio completo: desde puestos de trabajo, divisiones y sillas ergonómicas, hasta muebles personalizados para cafetería, recepción y más. Además, brindamos mantenimiento, repuestos, reubicación y asesoría sin costo, con instalación incluida en Cali.
            </p>
            <p className="text-gray-700">
              Nos especializamos en soluciones reales, sostenibles y centradas en el cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

 const AdaptacionPage = () => (
  <div className="py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Adaptación y Mejora Ergonómica</h1>

      {/* Intro */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6 text-center">
          Sabemos lo frustrante que puede ser una silla incómoda o un escritorio mal diseñado. Por eso, en lugar de reemplazar, lo transformamos.
          Mejoramos lo que ya tienes para que funcione mejor contigo y tu espacio.
        </p>

        {/* Grid SOLO para Tipos y Beneficios */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Tipos de Adaptación</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">🔧 Cambio de mecanismos en sillas:</span><br />
                Reemplazo de sistemas reclinables, hidráulicos y giratorios por versiones más modernas y resistentes.
              </li>
              <li>
                <span className="font-semibold">🪑 Modificación estructural de muebles:</span><br />
                Ajuste de alturas o formas de escritorios y sillas para mejorar la postura.
              </li>
              <li>
                <span className="font-semibold">🗄️ Adaptación de archivadores y almacenamiento:</span><br />
                Rediseño de compartimientos, ruedas o cerraduras de seguridad.
              </li>
              <li>
                <span className="font-semibold">🎨 Personalización estética:</span><br />
                Cambio de colores o acabados para armonizar con tu marca o entorno.
              </li>
              <li>
                <span className="font-semibold">🔄 Conversión y reutilización:</span><br />
                Transformamos muebles antiguos en soluciones nuevas sin desecharlos.
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Beneficios</h3>
            <ul className="space-y-6 text-gray-700">
              <li>🟢 Mayor comodidad, ergonomía y durabilidad.</li>
              <li>🟢 Reducción de fatiga y adaptación a necesidades especiales.</li>
              <li>🟢 Mejor organización y funcionalidad del espacio.</li>
              <li>🟢 Ambientes más agradables y coherentes con tu identidad visual.</li>
              <li>🟢 Ahorro económico y menor generación de residuos.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Galería — FUERA del grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Galería de Transformaciones</h2>
        <Carousel
          items={carouselData.adaptacion}
          type="adaptacion"
          currentIndex={carouselIndex.adaptacion}
          onIndexChange={(newIndex) => setCarouselIndex(prev => ({ ...prev, adaptacion: newIndex }))}
        />
      </div>

      {/* CTA FINAL — FUERA del grid y de la galería */}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/573177110447?text=Hola,%20quisiera%20cotizar%20una%20adaptación/mejora%20ergonómica%20para%20mi%20mobiliario."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition"
        >
          Solicitar visita técnica
        </a>
      </div>
    </div>
  </div>
);

  const DisenoPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Diseño y Ventas</h1>

        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Diseñamos y fabricamos muebles de oficina que combinan funcionalidad, confort y estilo. Ofrecemos sillas ergonómicas, escritorios, puestos de trabajo, archivadores metálicos y soluciones a medida.
            También disponemos de repuestos como ruedas, cilindros, tapicería y mecanismos para renovar tu mobiliario de forma práctica y económica.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Escritorios</h3>
              <p className="text-gray-700">
                Diseños ejecutivos, modulares y ergonómicos adaptados a tu espacio de trabajo.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Sillas</h3>
              <p className="text-gray-700">
                Sillas ergonómicas diseñadas para brindar máximo confort y soporte durante largas jornadas.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Archivadores</h3>
              <p className="text-gray-700">
                Soluciones de almacenamiento inteligentes y funcionales para optimizar tu espacio.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Diseños</h2>
          <Carousel
            items={carouselData.diseno}
            type="diseno"
            currentIndex={carouselIndex.diseno}
            onIndexChange={(newIndex) => setCarouselIndex(prev => ({ ...prev, diseno: newIndex }))}
          />
        </div>

        <div className="text-center">
          <button
            onClick={() => handleNavigation('contacto')}
            className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </div>
  );

  const ReparacionPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Reparación y Mantenimiento</h1>

        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 text-center">
            entendemos que tu mobiliario no solo es una inversión, sino parte fundamental del bienestar y productividad en tu empresa. Por eso ofrecemos soluciones integrales para devolverle vida, funcionalidad y estética a tus muebles sin necesidad de reemplazarlos.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Servicios que Ofrecemos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🔧 Reparación y ajuste de sillas secretariales, gerenciales, fijas y tipo tándem.</li>
                <li>🪑 Restauración de escritorios, puestos de trabajo y archivadores de gavetas.</li>
                <li>🛠️ Cambio de cilindros, mecanismos, ruedas, espaldar y tapicería.</li>
                <li>🧼 Limpieza profunda, eliminación de manchas y desinfección de tapizados.</li>
                <li>⚙️ Lubricación de piezas, ajuste de estructuras y mantenimiento preventivo.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Lo que Garantizamos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Resultados duraderos y funcionales</li>
                <li>🔩 Repuestos originales y servicio especializado</li>
                <li>💰 Ahorro frente a la compra de muebles nuevos</li>
                <li>🌱 Menor impacto ambiental al recuperar lo existente</li>
                <li>🤝 Atención cercana, rápida y con garantía</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Trabajos de Reparación</h2>
          <Carousel
            items={carouselData.reparacion}
            type="reparacion"
            currentIndex={carouselIndex.reparacion}
            onIndexChange={(newIndex) => setCarouselIndex(prev => ({ ...prev, reparacion: newIndex }))}
          />
        </div>

        {/* CTA final de Reparación */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/573177110447?text=Hola,%20necesito%20reparación/mantenimiento%20de%20muebles%20de%20oficina.%20¿Pueden%20agendar%20una%20visita%20técnica?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition"
          >
            Solicitar visita técnica
          </a>
        </div>
      </div>
    </div>
  );

  const ContactoPage = () => {
    const form = useRef(null);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSending(true);

      const formData = new FormData(form.current);
      const debugData = Object.fromEntries(formData.entries());

      console.log("📤 Enviando formulario con los siguientes datos:", debugData);

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("Email enviado:", result.text,);
            alert("Mensaje enviado correctamente.");
            form.current.reset();
          },
          (error) => {
            console.error("Error al enviar:", error.text);
            alert("Hubo un error al enviar el mensaje.");
          }
        )
        .finally(() => setSending(false));
    };

    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <span>+57 318 406 3943 +57 317 711 0447</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <span>mueblesdisoffice@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span>Cali, Valle del Cauca, Colombia</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
                <p className="text-gray-700">
                  Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 4:00 PM<br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="number"
                    name="telefono"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold ${sending ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-700"}`}
                >
                  {sending ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage />;
      case 'quienes-somos':
        return <QuienesSomosPage />;
      case 'adaptacion':
        return <AdaptacionPage />;
      case 'diseno':
        return <DisenoVentasPage />; // usa la página avanzada de catálogo
      case 'reparacion':
        return <ReparacionPage />;
      case 'contacto':
        return <ContactoPage />;
      default:
        return <HomePage />;
    }
  };

  // ===== WhatsApp FAB (flotante) =====
  const WA_CONFIG = {
    number: "573177110447",
    message: "Hola, quisiera una cotización de mobiliario de oficina.",
    position: "right",
    showTextFrom: "sm",
    theme: "green",
    size: "md",
  };

  const THEME = {
    green: "bg-green-500 hover:bg-green-600 text-white",
    orange: "bg-orange-600 hover:bg-orange-700 text-white",
    dark: "bg-gray-900 hover:bg-black text-white",
  };

  const SIZE = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3",
    lg: "px-5 py-4 text-lg",
  };

  const POS = (side) =>
    side === "left"
      ? "left-4 sm:left-6"
      : "right-4 sm:right-6";

  const WhatsAppFAB = () => {
    const url = `https://wa.me/${WA_CONFIG.number}?text=${encodeURIComponent(WA_CONFIG.message)}`;

    const textVisibility = {
      never: "hidden",
      sm: "hidden sm:inline",
      md: "hidden md:inline",
      lg: "hidden lg:inline",
    }[WA_CONFIG.showTextFrom || "sm"];

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className={`fixed bottom-4 sm:bottom-6 ${POS(WA_CONFIG.position)} z-50 select-none`}
      >
        <div
          className={`flex items-center gap-3 rounded-full shadow-lg active:scale-95 transition ${THEME[WA_CONFIG.theme]} ${SIZE[WA_CONFIG.size]} pr-5`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.43.25-.71.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35zM26 16c0 5.52-4.48 10-10 10-1.76 0-3.41-.46-4.85-1.27L6 26l1.3-5.06C6.46 19.41 6 17.76 6 16 6 10.48 10.48 6 16 6s10 4.48 10 10zm-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 1.5.42 2.89 1.15 4.08l-.75 2.93 3-.79A7.95 7.95 0 0 0 16 24c4.42 0 8-3.58 8-8z"/>
          </svg>
          <span className={`${textVisibility} font-semibold`}>WhatsApp</span>
        </div>
      </a>
    );
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderCurrentPage()}</main>
      <WhatsAppFAB />
      <Footer />
    </div>
  );
};

export default App;
