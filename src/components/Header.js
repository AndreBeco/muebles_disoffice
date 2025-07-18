import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Título */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-lg text-blue-700">DisOffice</span>
        </Link>

        {/* Botón de hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Menú móvil"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:text-orange-500">Inicio</Link>
          <Link to="/quienes-somos" className="hover:text-orange-500">Quiénes Somos</Link>
          <Link to="/productos" className="hover:text-orange-500">Productos</Link>
          <Link to="/contacto" className="hover:text-orange-500">Contacto</Link>
          <a
            href="https://wa.me/57xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm">
          <Link to="/" className="block hover:text-orange-500">Inicio</Link>
          <Link to="/quienes-somos" className="block hover:text-orange-500">Quiénes Somos</Link>
          <Link to="/productos" className="block hover:text-orange-500">Productos</Link>
          <Link to="/contacto" className="block hover:text-orange-500">Contacto</Link>
          <a
            href="https://wa.me/57xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center px-3 py-2 rounded hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
