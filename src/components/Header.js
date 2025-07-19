import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo + Nombre */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg sm:text-xl text-blue-700">DisOffice</span>
        </Link>

        {/* Menú hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center gap-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-orange-500">Inicio</Link>
          <Link to="/quienes-somos" className="hover:text-orange-500">Quiénes Somos</Link>
          <Link to="/productos" className="hover:text-orange-500">Servicios</Link>
          <Link to="/contacto" className="hover:text-orange-500">Contacto</Link>
          <a
            href="https://wa.me/57312333333"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4 px-6" : "max-h-0"
        } bg-white border-t`}
      >
        <nav className="space-y-3 text-sm sm:text-base">
          <Link to="/" className="block hover:text-orange-500">Inicio</Link>
          <Link to="/quienes-somos" className="block hover:text-orange-500">Quiénes Somos</Link>

          {/* Acordeón Servicios */}
          <div>
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex items-center justify-between w-full text-left hover:text-orange-500"
            >
              <span>Servicios</span>
              {submenuOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {submenuOpen && (
              <div className="pl-4 mt-2 space-y-2 text-gray-700">
                <Link to="/productos#oficina" className="block">Muebles Oficina</Link>
                <Link to="/productos#adaptaciones" className="block">Adaptaciones</Link>
                <Link to="/productos#especiales" className="block">Diseños Especiales</Link>
              </div>
            )}
          </div>

          <Link to="/contacto" className="block hover:text-orange-500">Contacto</Link>
          <a
            href="https://wa.me/57312333333"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
