// src/App.js
import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
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
              <Instagram className="w-6 h-6 mr-2" /> Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
              <Facebook className="w-6 h-6 mr-2" /> Facebook
            </a>
            <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg" alt="TikTok" className="w-6 h-6 mr-2" /> TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  // Home
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
              Diseñamos, adaptamos y reparamos muebles de oficina para extender su vida útil, mejorar su ergonomía y ajustarlo a las necesidades reales de cada espacio.
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

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Adaptación */}
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Adaptación y Mejora Ergonómica</h3>
              <p className="text-gray-600 mb-4">
                Transformamos tu mobiliario para que se ajuste a ti, no al revés.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Ajustes ergonómicos personalizados</li>
                <li>✓ Mejora de mecanismos</li>
                <li>✓ Refuerzo de estructuras</li>
                <li>✓ Reacondicionamiento estético</li>
                <li>✓ Adaptación a nuevos espacios</li>
              </ul>
            </div>

            {/* Diseño */}
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Diseño y Ventas</h3>
              <p className="text-gray-600">
                Creamos muebles funcionales, ergonómicos y a medida: escritorios, archivadores, sillas y más. Asesoría gratuita e instalación en Cali.
              </p>
            </div>

            {/* Reparación */}
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🧰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Reparación y Mantenimiento</h3>
              <p className="text-gray-600">
                Reparamos y restauramos sillas, escritorios y archivadores, dejándolos como nuevos sin necesidad de reemplazo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Quiénes Somos
  const QuienesSomosPage = () => (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Quiénes Somos</h1>
        <p className="text-lg text-gray-700 mb-6">
          Somos una empresa caleña especializada en diseño, fabricación, reparación y adaptación de mobiliario. Transformamos lo que ya tienes para crear espacios ergonómicos, cómodos y sostenibles.
        </p>
      </div>
    </div>
  );

  // Adaptación
  const AdaptacionPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Adaptación y Mejora Ergonómica</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Sabemos lo frustrante que puede ser una silla incómoda o un escritorio mal diseñado. En lugar de reemplazar, lo transformamos.
        </p>
        <Carousel items={carouselData.adaptacion} type="adaptacion" currentIndex={carouselIndex.adaptacion} onIndexChange={(i) => updateCarouselIndex("adaptacion", i)} />
      </div>
    </div>
  );

  // Diseño/Ventas
  const DisenoPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Diseño y Ventas</h1>
        <Carousel items={carouselData.diseno} type="diseno" currentIndex={carouselIndex.diseno} onIndexChange={(i) => updateCarouselIndex("diseno", i)} />
      </div>
    </div>
  );

  // Reparación
  const ReparacionPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Reparación y Mantenimiento</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Entendemos que tu mobiliario no solo es una inversión, sino parte de tu bienestar y productividad. Recuperamos y mejoramos lo que tienes.
        </p>
        <Carousel items={carouselData.reparacion} type="reparacion" currentIndex={carouselIndex.reparacion} onIndexChange={(i) => updateCarouselIndex("reparacion", i)} />
      </div>
    </div>
  );

  // Contacto
  const ContactoPage = () => {
    const form = useRef(null);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSending(true);

      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then(
        () => { alert("Mensaje enviado correctamente."); form.current.reset(); },
        () => { alert("Hubo un error al enviar el mensaje."); }
      ).finally(() => setSending(false));
    };

    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="nombre" placeholder="Nombre" required className="w-full px-3 py-2 border rounded-md" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-3 py-2 border rounded-md" />
            <input type="text" name="telefono" placeholder="Teléfono" required className="w-full px-3 py-2 border rounded-md" />
            <textarea name="mensaje" rows="4" placeholder="Mensaje" required className="w-full px-3 py-2 border rounded-md"></textarea>
            <button type="submit" disabled={sending} className="bg-orange-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-700">
              {sending ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
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
