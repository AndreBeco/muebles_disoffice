import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Clock,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const services = [
    'Diseño Interior',
    'Muebles a Medida',
    'Consultoría',
    'Instalación',
    'Mantenimiento'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white rounded-lg p-2">
                <span className="text-xl font-bold">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DisOffice</h3>
                <p className="text-sm text-gray-400">Muebles & Diseño</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas en muebles de oficina y diseño de interiores. 
              Creamos espacios funcionales y elegantes para tu negocio.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <IconComponent 
                      size={18} 
                      className="group-hover:scale-110 transition-transform duration-300" 
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-400">
                    Carrera 15 #25-30<br />
                    Cali, Valle del Cauca<br />
                    Colombia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">+57 (2) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">info@mueblosdisoffice.com</p>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Clock className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-400">
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} DisOffice. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>en Cali, Colombia</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;