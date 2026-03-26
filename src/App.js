import React, { useState } from "react";
import Header from "./components/Header";
import DisenoVentasPage from "./components/DisenoVentasPage";

import HomePage from "./components/pages/HomePage";
import QuienesSomosPage from "./components/pages/QuienesSomosPage";
import AdaptacionPage from "./components/pages/AdaptacionPage";
import ReparacionPage from "./components/pages/ReparacionPage";
import ContactoPage from "./components/pages/ContactoPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("inicio");

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "inicio":
        return <HomePage />;

      case "quienes-somos":
        return <QuienesSomosPage />;

      case "adaptacion":
        return <AdaptacionPage />;

      case "diseno":
        return <DisenoVentasPage />;

      case "reparacion":
        return <ReparacionPage />;

      case "contacto":
        return <ContactoPage />;

      default:
        return <HomePage />;
    }
  };

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
    side === "left" ? "left-4 sm:left-6" : "right-4 sm:right-6";

  const WhatsAppFAB = () => {
    const url = `https://wa.me/${WA_CONFIG.number}?text=${encodeURIComponent(
      WA_CONFIG.message
    )}`;

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
        className={`fixed bottom-4 sm:bottom-6 ${POS(
          WA_CONFIG.position
        )} z-50 select-none`}
      >
        <div
          className={`flex items-center gap-3 rounded-full shadow-lg active:scale-95 transition ${
            THEME[WA_CONFIG.theme]
          } ${SIZE[WA_CONFIG.size]} pr-5`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.11 17.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.43.25-.71.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35zM26 16c0 5.52-4.48 10-10 10-1.76 0-3.41-.46-4.85-1.27L6 26l1.3-5.06C6.46 19.41 6 17.76 6 16 6 10.48 10.48 6 16 6s10 4.48 10 10zm-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 1.5.42 2.89 1.15 4.08l-.75 2.93 3-.79A7.95 7.95 0 0 0 16 24c4.42 0 8-3.58 8-8z" />
          </svg>
          <span className={`${textVisibility} font-semibold`}>WhatsApp</span>
        </div>
      </a>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-3">Muebles DisOffice</h3>
            <p className="text-gray-300 leading-relaxed">
              Soluciones en mobiliario de oficina en Cali. Diseñamos,
              suministramos, reparamos y optimizamos espacios para que sean más
              funcionales, cómodos y duraderos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+57 318 406 3943</li>
              <li>+57 317 711 0447</li>
              <li>mueblesdisoffice@gmail.com</li>
              <li>Cali, Valle del Cauca</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Redes sociales</h4>
            <div className="flex flex-col gap-2 text-gray-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@mueblesdisoffice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Muebles DisOffice. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );

  return (
    <div className="App min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />

      <main>{renderCurrentPage()}</main>

      <WhatsAppFAB />
      <Footer />
    </div>
  );
};

export default App;
