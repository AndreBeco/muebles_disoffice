import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import emailjs from "@emailjs/browser";
import carouselData from "./data/carouselData";
import Header from './components/Header.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [carouselIndex, setCarouselIndex] = useState({ adaptacion: 0, diseno: 0, reparacion: 0 });

  // Función para manejar la navegación
  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
  };

  const Carousel = ({ items, type }) => {
    const currentIndex = carouselIndex[type];

    const nextSlide = () => {
      setCarouselIndex(prev => ({
        ...prev,
        [type]: (prev[type] + 1) % items.length
      }));
    };

    const prevSlide = () => {
      setCarouselIndex(prev => ({
        ...prev,
        [type]: prev[type] === 0 ? items.length - 1 : prev[type] - 1
      }));
    };

    const currentItem = items[currentIndex];

    return (
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64">
            {currentItem.before ? (
              <div className="grid grid-cols-2 h-full">
                <div className="relative">
                  <img src={currentItem.before} alt="Antes" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Antes
                  </div>
                </div>
                <div className="relative">
                  <img src={currentItem.after} alt="Después" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                    Después
                  </div>
                </div>
              </div>
            ) : (
              <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover" />
            )}

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{currentItem.title}</h3>
            <p className="text-gray-600">{currentItem.description}</p>
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCarouselIndex(prev => ({ ...prev, [type]: index }))}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Facebook className="w-6 h-6 mr-2" />
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Facebook className="w-6 h-6 mr-2" />
              Tiktok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Muebles DisOffice transforma tu mobiliario para que trabaje contigo, no contra ti.
            </h1>
            <p className="text-xl mb-8">
              Diseñamos, adaptamos y reparamos muebles de oficina para extender su vida útil, para mejorar
              su ergonomía y ajustarlo a las necesidades reales de cada espacio. más que vender muebles,
              ayudamos a crear entornos funcionales, cómodos y personalizados que impulsan tu bienestar y productividad..
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
                <span className="text-orange-600 text-2xl">🪑</span>
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
                <span className="text-orange-600 text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Diseño y Venta de Muebles</h3>
               <p className="text-gray-600 mb-6">
                Creamos muebles que se adaptan a tu espacio, estilo y forma de trabajar. Diseñamos y fabricamos mobiliario de oficina funcional, ergonómico y a medida, con materiales de alta calidad y enfoque en la durabilidad.
              </p>
               <p className="text-gray-600">
                Ofrecemos desde escritorios, archivadores y sillas, hasta soluciones personalizadas para oficinas completas. Te asesoramos sin costo, entregamos e instalamos en Cali, y garantizamos cada producto que sale de nuestro taller.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🔧</span>
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
          <h2 className="text-3xl font-bold mb-4">Listo para mejorar tus muebles</h2>
          <p className="text-xl mb-8">Contáctanos para una cotización sin costo</p>
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

        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Sabemos lo frustrante que puede ser una silla incómoda o un escritorio mal diseñado. Por eso, en lugar de reemplazar, lo transformamos. 
            Mejoramos lo que ya tienes para que funcione mejor contigo y tu espacio.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Tipos de Adaptación y sus Beneficios</h2>
             
              <div className="space-y-6 text-gray-700">
               <div>
                 <h3 className="font-semibold">🔧 Cambio de mecanismos en sillas</h3>
                 <p>Reemplazo de sistemas reclinables, hidráulicos y giratorios por versiones más modernas y resistentes.</p>
                 <p className="text-green-600 font-medium">🟢 Beneficio: Mayor comodidad, ergonomía y durabilidad.</p>
               </div>

               <div>
                 <h3 className="font-semibold">🪑 Modificación estructural de muebles</h3>
                 <p>Ajuste de alturas, cambios en la forma o tamaño de escritorios y sillas para mejorar la postura del usuario.</p>
                 <p className="text-green-600 font-medium">🟢 Beneficio: Reducción de fatiga, adaptación a usuarios con necesidades especiales.</p>
               </div>

               <div>
                 <h3 className="font-semibold">🗄️ Adaptación de archivadores y almacenamiento</h3>
                 <p>Rediseño de compartimientos, incorporación de ruedas o cerraduras de seguridad.</p>
                 <p className="text-green-600 font-medium">🟢 Beneficio: Mayor funcionalidad y mejor organización del espacio.</p>
              </div>

              <div>
                <h3 className="font-semibold">🎨 Personalización estética</h3>
                <p>Cambio de colores, materiales o acabados para armonizar con la identidad visual del cliente.</p>
                <p className="text-green-600 font-medium">🟢 Beneficio: Ambientes más agradables y coherentes con la marca.</p>
              </div>

              <div>
                <h3 className="font-semibold">🔄 Conversión y reutilización</h3>
                <p>Transformamos muebles antiguos en soluciones nuevas sin desecharlos.</p>
                <p className="text-green-600 font-medium">🟢 Beneficio: Ahorro económico y reducción de desperdicios.</p>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Galería de Transformaciones</h2>
          <Carousel items={carouselData.adaptacion} type="adaptacion" />
        </div>
      </div>
    </div>
  );

  const DisenoPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Diseño y Venta de Muebles</h1>

        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Creamos escritorios, sillas, archivadores y soluciones modulares personalizadas.
            Ofrecemos diseño profesional adaptado a tu espacio y estilo.
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
          <Carousel items={carouselData.diseno} type="diseno" />
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
            Reparamos todo tipo de mobiliario de oficina. Servicio rápido, profesional y con garantía.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Servicios de Reparación</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cambio de ruedas dañadas</li>
                <li>• Reparación de mecanismos</li>
                <li>• Cambio de tapicería</li>
                <li>• Reparación de estructuras</li>
                <li>• Mantenimiento preventivo</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Garantía</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Garantía en todos los trabajos</li>
                <li>• Repuestos originales</li>
                <li>• Servicio técnico especializado</li>
                <li>• Atención personalizada</li>
                <li>• Precios competitivos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Trabajos de Reparación</h2>
          <Carousel items={carouselData.reparacion} type="reparacion" />
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
                  <span>+57 318 406 3943</span>
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
        return <DisenoPage />;
      case 'reparacion':
        return <ReparacionPage />;
      case 'contacto':
        return <ContactoPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigation} 
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
