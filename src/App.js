import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import emailjs from "@emailjs/browser";
import carouselData from "./data/carouselData";


// Datos del carrusel desde JSON
// const carouselData = {
//   adaptacion: [
//     {
//       id: 1,
//       before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
//       after: "https://images.unsplash.com/photo-1568300091234-8eec10f65874?w=400&h=300&fit=crop",
//       title: "Silla Ergonómica Mejorada",
//       description: "Transformamos esta silla antigua en una silla ergonómica moderna"
//     },
//     {
//       id: 2,
//       before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
//       after: "https://images.unsplash.com/photo-1568300091234-8eec10f65874?w=400&h=300&fit=crop",
//       title: "Escritorio Ajustable",
//       description: "Mejoramos la altura y funcionalidad de este escritorio"
//     },
//     {
//       id: 3,
//       before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
//       after: "https://images.unsplash.com/photo-1568300091234-8eec10f65874?w=400&h=300&fit=crop",
//       title: "Mesa de Trabajo",
//       description: "Reparación completa con mejoras ergonómicas"
//     }
//   ],
//   diseno: [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
//       title: "Escritorio Ejecutivo",
//       description: "Diseño personalizado para oficina ejecutiva"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
//       title: "Estantería Modular",
//       description: "Solución de almacenamiento a medida"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1568300091234-8eec10f65874?w=400&h=300&fit=crop",
//       title: "Silla Ergonómica",
//       description: "Diseño ergonómico personalizado"
//     }
//   ],
//   reparacion: [
//     {
//       id: 1,
//       before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
//       after: "https://images.unsplash.com/photo-1568300091234-8eec10f65874?w=400&h=300&fit=crop",
//       title: "Reparación de Silla",
//       description: "Cambio completo de tapicería y mecanismos"
//     },
//     {
//       id: 2,
//       before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
//       after: "https://images.unsplash.com/photo-1568300091234-8eec10f65874?w=400&h=300&fit=crop",
//       title: "Restauración de Escritorio",
//       description: "Reparación integral de escritorio ejecutivo"
//     }
//   ]
// };

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [productDropdown, setProductDropdown] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState({ adaptacion: 0, diseno: 0, reparacion: 0 });

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
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/public/logo.png" alt="Logo" className="w-12 h-12 rounded" />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">Muebles DisOffice</h1>
              <p className="text-sm text-orange-600">Diseño e Innovación de Espacios</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('inicio')}
              className={`text-gray-700 hover:text-orange-600 font-medium ${currentPage === 'inicio' ? 'text-orange-600' : ''
                }`}
            >
              Inicio
            </button>

            <button
              onClick={() => setCurrentPage('quienes-somos')}
              className={`text-gray-700 hover:text-orange-600 font-medium ${currentPage === 'quienes-somos' ? 'text-orange-600' : ''
                }`}
            >
              Quiénes Somos
            </button>

            <div className="relative">
              <button
                onClick={() => setProductDropdown(!productDropdown)}
                className="flex items-center text-gray-700 hover:text-orange-600 font-medium"
              >
                Productos
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {productDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border z-50">
                  <button
                    onClick={() => {
                      setCurrentPage('adaptacion');
                      setProductDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Adaptación y Mejora Ergonómica
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('diseno');
                      setProductDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Diseño y Venta de Muebles
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('reparacion');
                      setProductDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Reparación y Mantenimiento
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setCurrentPage('contacto')}
              className={`text-gray-700 hover:text-orange-600 font-medium ${currentPage === 'contacto' ? 'text-orange-600' : ''
                }`}
            >
              Contacto
            </button>

            <a
              href="https://wa.me/573177110447" // ← Reemplaza con tu número (57300xxxxxxx)
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );

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
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Twitter className="w-6 h-6 mr-2" />
              Twitter
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
              Más que muebles: creamos espacios cómodos, duraderos y adaptados a ti.
            </h1>
            <p className="text-xl mb-8">
              Diseñamos, vendemos y reparamos mobiliario de oficina en Cali,
              pero lo que nos hace únicos es que lo mejoramos para que se
              ajuste a tus necesidades.
            </p>

            <button
              onClick={() => setCurrentPage('contacto')}
              className={`bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 ${currentPage === 'contacto' ? 'text-orange-600' : ''
                }`}
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
                ¿Tu silla ya no te sirve? ¿Te incomoda tu escritorio?
              </p>
              <p className="text-gray-600 mb-4">
                En lugar de desechar, nosotros lo transformamos.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Reguesa paredes</li>
                <li>✓ Ajustes ergonómicos</li>
                <li>✓ Mejora de mecanismo</li>
                <li>✓ Soluciones duraderas, a menor costos</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Diseño y Venta de Muebles</h3>
              <p className="text-gray-600 mb-4">
                Creando escritorios, sillas, archivadores soluciones modulares.
              </p>
              <p className="text-gray-600 mb-4">
                Ofrecemos uamueño pro espacio y estilo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Reparación y Mantenimiento</h3>
              <p className="text-gray-600 mb-4">
                Reparamos todo tipo de mobiliario de oficina.
                Servicio rápido, profesional y con garantía.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Sillas ya notan o ya javan</li>
                <li>✓ Estremos inteciales</li>
                <li>✓ Ruedas dañagadas</li>
                <li>✓ Cambio de partes</li>
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
            onClick={() => setCurrentPage('contacto')}
            className={`bg-white text-orange-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 ${currentPage === 'contacto' ? 'text-orange-600' : ''
              }`}
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
            Somos Muebles DisOffice, una empresa especializada en el diseño, venta, reparación y adaptación
            de mobiliario de oficina en Cali. Nuestro enfoque único se basa en mejorar y adaptar los muebles
            existentes para que se ajusten perfectamente a las necesidades de cada cliente.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700">
              Crear espacios de trabajo cómodos, duraderos y ergonómicos, transformando y mejorando
              el mobiliario existente para maximizar su funcionalidad y extender su vida útil.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700">
              Ser la empresa líder en Cali en soluciones integrales de mobiliario de oficina,
              reconocida por nuestro compromiso con la sostenibilidad y la innovación en el
              diseño ergonómico.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Experiencia especializada en mobiliario de oficina</li>
              <li>• Soluciones personalizadas y adaptadas a cada cliente</li>
              <li>• Compromiso con la sostenibilidad y reutilización</li>
              <li>• Servicio integral: desde el diseño hasta el mantenimiento</li>
              <li>• Garantía en todos nuestros trabajos</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">PRESENTACIÓN </h2>
            <p className="text-gray-700">
              Muebles DisOffice es una Empresa Colombiana con sede en Cali, enfocada en la Fabricación, comercialización y asesoría en todo tipo de Muebles para Oficina y hogar, como se puede registrar en mi Rut y Cámara y Comercio, Fabricamos muebles de oficina y otros y hacemos restauración o reparación de los mismos.
              <ul class="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contamos con personal de alta experiencia para FABRICAR nuestros productos.</li>
                <li>Nuestras garantías son de 1 a 3 años.</li>
                <li>Cuenta con un excelente equipo para diseñar y asesorar sin costo alguno.</li>
                <li>Diseñamos y fabricamos muebles personalizados.</li>
                <li>Contamos con transporte e instalación en Cali sin ningún costo.</li>
                <li>Dependiendo de la cantidad de muebles a comprar en cualquier ciudad podemos llegar a un acuerdo para incluir transporte e instalación.</li>
              </ul>
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">FABRICACIÓN, VENTA E INSTALACION</h2>
            <ul className="space-y-2 text-gray-700">
              Como son: Puestos de trabajo, islas, divisiones, archivos rodantes, archivos horizontales y verticales de 2-3-4 gavetas, estanterías de peso liviano y pesado, suministro de sillas - ergonómicas (presidente, gerente y secretariales) sillas fijas, tándem de diferentes estilos, sillas y mesas para cafetería y escolar, Muebles especiales, recepción y diseños personalizados dándole al cliente diseñar su propia oficina contando con nuestra asesoría.
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">SERVICIOS ADICIONALES</h2>
            <ul className="space-y-2 text-gray-700">
              Muchas Empresas son engañadas al creer que las sillas, sofás, y otros muebles de oficina, No tienen arreglo. Se equivocan, MUEBLES DISOFFICE Restaura esos Muebles; en cada revisión analizamos si se puede arreglar o definitivamente cambiarlo.
              Prestamos el servicio de mantenimiento y reparación de sillas en partes y tapizados, en la reubicación y adecuación de oficinas con existentes que la empresa tenga en buen estado.

              Les vendemos las partes de las sillas que necesiten y se le instala sin costo alguno.

              Esperamos poder tener una alianza comercial que nos permita conocerlo y ofrecerle lo mejor de nuestros productos.
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
            ¿Tu silla ya no te sirve? ¿Te incomoda tu escritorio? En lugar de desechar,
            nosotros lo transformamos para que se ajuste perfectamente a tus necesidades.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Servicios de Adaptación</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ajustes de altura y profundidad</li>
                <li>• Mejora de mecanismos de regulación</li>
                <li>• Cambio de tapicería ergonómica</li>
                <li>• Adaptación de reposabrazos</li>
                <li>• Mejora de soporte lumbar</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Beneficios</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ahorro económico significativo</li>
                <li>• Menor impacto ambiental</li>
                <li>• Mejora de la productividad</li>
                <li>• Reducción de dolores posturales</li>
                <li>• Muebles adaptados a tu medida</li>
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
          <button className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700">
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

    // emailjs
    // .sendForm(
    //   "service_t54zu7g",
    //   "template_zbtfd4u",
    //   form.current,
    //   "KoPBk4x9Jh92ZElz3"
    // )
    // .then(
    //   (result) => {
    //     console.log("✅ Email enviado:", result.text);
    //     alert("Mensaje enviado correctamente");
    //     form.current.reset();
    //   },
    //   (error) => {
    //     console.error("❌ Error al enviar:", error);
    //     alert("Error al enviar el mensaje");
    //   }
    // );


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
                  <span>+57 (2) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <span>info@mueblesdisoffice.com</span>
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
                    type="tel"
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
                  className={`w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold ${sending ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-700"
                    }`}
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;