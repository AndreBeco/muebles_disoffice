import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import emailjs from "@emailjs/browser";
import carouselData from "./data/carouselData";
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [carouselIndex, setCarouselIndex] = useState({ adaptacion: 0, diseno: 0, reparacion: 0 });

  const handleNavigation = (pageId) => setCurrentPage(pageId);

  const updateCarouselIndex = (type, newIndex) => {
    setCarouselIndex(prev => ({ ...prev, [type]: newIndex }));
  };

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
          <div className="flex justify-center space-x-6">

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
              <Instagram className="w-6 h-6 mr-2" />
              Instagram
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
              <Facebook className="w-6 h-6 mr-2" />
              Facebook
            </a>

            {/* TikTok con SVG */}
            <a
              href="https://www.tiktok.com/@mueblesdisoffice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-2">
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
      {/* Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/37/b8/dc/37b8dc7d09da2a13850861cc2d50002a.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Muebles DisOffice transforma tu mobiliario para que trabaje contigo, no contra ti.
            </h1>
            <p className="text-xl mb-8">
              Diseñamos, adaptamos y reparamos muebles de oficina para extender su vida útil, mejorar su ergonomía
              y ajustarlo a las necesidades reales de cada espacio. Más que vender muebles, creamos entornos funcionales
              y cómodos que impulsan tu bienestar y productividad.
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

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Adaptación */}
            <div className="text-center">
              <div className="bg-orange-200 text-orange-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Adaptación y Mejora Ergonómica</h3>
              <p className="text-gray-600 mb-4">Transformamos tu mobiliario para que se ajuste a ti, no al revés.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Ajustes ergonómicos personalizados</li>
                <li>✓ Mejora de mecanismos</li>
                <li>✓ Refuerzo de estructuras</li>
                <li>✓ Reacondicionamiento visual</li>
                <li>✓ Adaptación a nuevos espacios</li>
              </ul>
            </div>

            {/* Diseño */}
            <div className="text-center">
              <div className="bg-orange-200 text-orange-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Diseño y Ventas</h3>
              <p className="text-gray-600 mb-6">
                Diseños funcionales y a medida: escritorios, sillas, archivadores y soluciones integrales.
              </p>
            </div>

            {/* Reparación */}
            <div className="text-center">
              <div className="bg-orange-200 text-orange-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Reparación y Mantenimiento</h3>
              <p className="text-gray-600 mb-4">
                Dejamos tus muebles como nuevos sin necesidad de reemplazo.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Reparación de mecanismos y estructuras</li>
                <li>✓ Reemplazo de partes</li>
                <li>✓ Retapizado profesional</li>
                <li>✓ Corrección de fallas</li>
                <li>✓ Mantenimiento preventivo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            reparación y adaptación de mobiliario para oficina y hogar. Nuestra propuesta va más allá de vender muebles:
            transformamos los que ya tienes para que se ajusten a tus necesidades reales.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700">
              Ofrecer soluciones de mobiliario que aumenten el bienestar y la productividad,
              prolongando la vida útil de los muebles mediante mejoras, restauraciones y rediseños, con enfoque sostenible.
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
        </div>
      </div>
    </div>
  );

  const AdaptacionPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Adaptación y Mejora Ergonómica</h1>

        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Sabemos lo frustrante que puede ser una silla incómoda o un escritorio mal diseñado.
            En lugar de reemplazar, lo transformamos para que funcione mejor contigo y tu espacio.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Tipos de Adaptación</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">🔧 Cambio de mecanismos en sillas:</span><br />
                  Reemplazo de sistemas reclinables, hidráulicos y giratorios por versiones más resistentes.
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
                <li>🟢 Ambientes coherentes con tu identidad visual.</li>
                <li>🟢 Ahorro económico y menor generación de residuos.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Galería */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Galería de Transformaciones</h2>
          <Carousel
            items={carouselData.adaptacion}
            type="adaptacion"
            currentIndex={carouselIndex.adaptacion}
            onIndexChange={(newIndex) => updateCarouselIndex('adaptacion', newIndex)}
          />
        </div>

        {/* CTA FINAL (debajo del carrusel) */}
        <div className="text-center mt-10">
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
            Diseñamos y fabricamos muebles de oficina funcionales, ergonómicos y a medida:
            escritorios, puestos de trabajo, sillas y archivadores metálicos. También disponemos de repuestos
            como ruedas, cilindros, tapicería y mecanismos para renovar tu mobiliario de forma práctica.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Escritorios</h3>
              <p className="text-gray-700">Diseños ejecutivos, modulares y ergonómicos adaptados a tu espacio.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Sillas</h3>
              <p className="text-gray-700">Confort y soporte para largas jornadas: ergonómicas y ajustables.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Archivadores</h3>
              <p className="text-gray-700">Almacenamiento inteligente para optimizar tu espacio.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Diseños</h2>
          <Carousel
            items={carouselData.diseno}
            type="diseno"
            currentIndex={carouselIndex.diseno}
            onIndexChange={(newIndex) => updateCarouselIndex('diseno', newIndex)}
          />
        </div>

        {/* CTA final de Diseño */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/573177110447?text=Hola,%20quiero%20cotizar%20muebles%20de%20Diseño%20y%20Ventas%20para%20mi%20oficina."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition"
          >
            Cotizar ahora
          </a>
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
            Entendemos que tu mobiliario no solo es una inversión, sino parte del bienestar y productividad en tu empresa.
            Devolvemos vida, funcionalidad y estética a tus muebles sin necesidad de reemplazarlos.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Servicios que Ofrecemos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🔧 Reparación y ajuste de sillas secretariales, gerenciales, fijas y tándem.</li>
                <li>🪑 Restauración de escritorios, puestos de trabajo y archivadores.</li>
                <li>🛠️ Cambio de cilindros, mecanismos, ruedas, espaldar y tapicería.</li>
                <li>🧼 Limpieza profunda, eliminación de manchas y desinfección.</li>
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

        {/* Galería */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Trabajos de Reparación</h2>
          <Carousel
            items={carouselData.reparacion}
            type="reparacion"
            currentIndex={carouselIndex.reparacion}
            onIndexChange={(newIndex) => updateCarouselIndex('reparacion', newIndex)}
          />
        </div>

        {/* CTA final de Reparación */}
        <div className="text-center mt-10">
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

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            alert("Mensaje enviado correctamente.");
            form.current.reset();
          },
          () => {
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
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center"><Phone className="w-5 h-5 text-orange-600 mr-3" /><span>+57 318 406 3943</span></div>
                <div className="flex items-center"><Mail className="w-5 h-5 text-orange-600 mr-3" /><span>mueblesdisoffice@gmail.com</span></div>
                <div className="flex items-center"><MapPin className="w-5 h-5 text-orange-600 mr-3" /><span>Cali, Valle del Cauca, Colombia</span></div>
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

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" name="nombre" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input type="number" name="telefono" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea name="mensaje" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <button type="submit" disabled={sending} className={`w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold ${sending ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-700"}`}>
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
      case 'inicio': return <HomePage />;
      case 'quienes-somos': return <QuienesSomosPage />;
      case 'adaptacion': return <AdaptacionPage />;
      case 'diseno': return <DisenoPage />;
      case 'reparacion': return <ReparacionPage />;
      case 'contacto': return <ContactoPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderCurrentPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
