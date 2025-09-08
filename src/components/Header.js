import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Truck } from 'lucide-react';

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const serviciosItems = [
    { id: 'adaptacion', name: 'Adaptación y Mejora' },
    { id: 'diseno', name: 'Diseño y Venta' },
    { id: 'reparacion', name: 'Reparación y Mantenimiento' },
  ];

  const menuItems = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'servicios', name: 'Servicios', hasSubmenu: true },
    { id: 'quienes-somos', name: 'Nosotros' },
    { id: 'contacto', name: 'Contacto' },
  ];

  const handleClick = (id) => {
    if (id === 'servicios') {
      setIsServicesOpen((v) => !v);
      return;
    }
    onNavigate(id);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleMobileServicesToggle = () => {
    setIsMobileServicesOpen((v) => !v);
  };

  // Cerrar dropdown Servicios al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServiceActive = serviciosItems.some(s => currentPage === s.id);

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 318 406 3943</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>mueblesdisoffice@gmail.com</span>
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
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo grande */}
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/736x/3b/be/bf/3bbebfccff85353ee6d91a28083ffbc9.jpg"
              alt="Logo Muebles DisOffice"
              className="w-auto h-24 sm:h-28 object-contain"
            />
          </div>

          {/* CENTRO: Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.id} className="relative" ref={item.id === 'servicios' ? servicesRef : null}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 relative group px-3 py-2 rounded flex items-center
                    ${(currentPage === item.id || (item.id === 'servicios' && isServiceActive))
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                    }`}
                >
                  {item.name}
                  {item.hasSubmenu && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Dropdown Servicios desktop */}
                {item.id === 'servicios' && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    {serviciosItems.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 hover:bg-orange-50 hover:text-orange-600
                          ${currentPage === service.id ? 'bg-orange-100 text-orange-700 font-medium' : 'text-gray-700'}
                        `}
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* DERECHA: Beneficio destacado (solo desktop) */}
          <div className="hidden lg:flex items-center">
            <div className="group relative select-none" aria-label="Beneficio: Entrega e instalación gratis en Cali">
              <div className="
                flex items-center gap-2 rounded-full
                bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
                text-white pl-3 pr-4 py-2
                shadow-lg shadow-orange-500/20 ring-1 ring-black/10
                transition hover:shadow-orange-500/30
              ">
                <Truck className="w-5 h-5 opacity-95" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide">
                  Entrega e instalación gratis en Cali
                </span>
              </div>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-2">
          {/* Beneficio destacado móvil */}
          <div className="px-2 mb-3">
            <div className="
              flex items-center gap-2 rounded-full
              bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
              text-white pl-3 pr-3 py-1.5 text-xs
              shadow-md shadow-orange-500/20 ring-1 ring-black/10
            ">
              <Truck className="w-4 h-4 opacity-95" aria-hidden="true" />
              <span className="font-semibold tracking-wide">
                Entrega e instalación gratis en Cali
              </span>
            </div>
          </div>

          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => item.id === 'servicios' ? handleMobileServicesToggle() : handleClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded text-sm font-medium flex items-center justify-between
                  ${(currentPage === item.id || (item.id === 'servicios' && isServiceActive))
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <span>{item.name}</span>
                {item.hasSubmenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {/* Submenú Servicios móvil */}
              {item.id === 'servicios' && isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {serviciosItems.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className={`block w-full text-left px-4 py-2 rounded text-sm border-l-2 transition-colors duration-200
                        ${currentPage === service.id
                          ? 'bg-orange-50 text-orange-700 border-orange-300 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-orange-200'
                        }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

