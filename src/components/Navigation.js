import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ShoppingCart, Search, User } from 'lucide-react';

const Navigation = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    {
      id: 'servicios',
      label: 'Servicios',
      submenu: [
        { id: 'adaptacion', label: 'Adaptación y Mejora' },
        { id: 'diseno', label: 'Diseño y Venta' },
        { id: 'reparacion', label: 'Reparación y Mantenimiento' }
      ]
    },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavigation = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
    setShowServices(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'}`}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+57 (2) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@mueblesdisofficce.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Cali, Valle del Cauca</span>
            </div>
          </div>
          <div className="space-x-3">
            <a href="#" className="hover:text-blue-300">Facebook</a>
            <a href="#" className="hover:text-blue-300">Instagram</a>
            <a href="#" className="hover:text-blue-300">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white flex items-center justify-center font-bold text-xl">
              MD
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900">Muebles</h1>
              <p className="text-sm text-blue-600 font-semibold">DisOffice</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map(item => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => item.submenu ? setShowServices(!showServices) : handleNavigation(item.id)}
                  className={`px-3 py-2 rounded transition-all ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="inline ml-1" />}
                </button>

                {item.submenu && showServices && (
                  <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md z-20 w-64">
                    {item.submenu.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavigation(sub.id)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile buttons */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded text-gray-700 hover:bg-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4">
          <nav className="space-y-2">
            {navigationItems.map(item => (
              <div key={item.id}>
                <button
                  onClick={() => item.submenu ? setShowServices(!showServices) : handleNavigation(item.id)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    currentPage === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className={`inline ml-2 ${showServices ? 'rotate-180' : ''}`} />}
                </button>

                {item.submenu && showServices && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavigation(sub.id)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
