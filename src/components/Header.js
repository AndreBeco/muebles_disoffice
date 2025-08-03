import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

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
      setIsServicesOpen(!isServicesOpen);
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
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isServiceActive = serviciosItems.some(service => currentPage === service.id);

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
          
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <img
              src="https://i.pinimg.com/1200x/50/3f/00/503f007ef9f3f4b3e143ada5a5152975.jpg"
              alt="Logo Muebles DisOffice"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="text-2xl lg:text-3xl font-bold text-blue-900 leading-tight">
              <span className="text-blue-600">Muebles</span>
              <span className="text-gray-800">DisOffice</span>
            </div>
          </div>


          {/* Desktop Navigation */}
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
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
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

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/573177110447"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center text-sm transition-colors duration-200"
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
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                      }`}
                  />
                )}
              </button>

              {/* Mobile Services Submenu */}
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

          <a
            href="https://wa.me/573177110447"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600 mt-4 transition-colors duration-200"
          >
            <Phone className="inline w-4 h-4 mr-2" />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
