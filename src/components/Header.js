import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'servicios', name: 'Productos' }, // si tienes una sección específica
    { id: 'adaptacion', name: 'Adaptación y Mejora' },
    { id: 'diseno', name: 'Diseño y Venta' },
    { id: 'reparacion', name: 'Reparación' },
    { id: 'galeria', name: 'Galería' },
    { id: 'quienes-somos', name: 'Nosotros' },
    { id: 'contacto', name: 'Contacto' },
  ];

  const handleClick = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 (2) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@mueblesDisOffice.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Cali, Valle del Cauca</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-blue-900">
              <span className="text-blue-600">Muebles</span>
              <span className="text-gray-800">DisOffice</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 relative group px-3 py-2 rounded 
                  ${currentPage === item.id
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/573177110447"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left px-4 py-2 rounded text-sm font-medium 
                ${currentPage === item.id
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600 mt-2"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
