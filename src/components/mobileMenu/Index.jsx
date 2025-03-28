"use client";

import { useState } from "react";
import { Menu, X, Shield, Home, Phone, Users, FileText } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuLinks = [
    {
      id: 1,
      name: "Inicio",
      href: "/",
      icon: <Home className="h-5 w-5 mr-3" />,
    },
    {
      id: 2,
      name: "Servicios",
      href: "/servicios",
      icon: <Shield className="h-5 w-5 mr-3" />,
    },
    {
      id: 3,
      name: "Nosotros",
      href: "/nosotros",
      icon: <Users className="h-5 w-5 mr-3" />,
    },
    {
      id: 4,
      name: "Cotización",
      href: "/cotizacion",
      icon: <FileText className="h-5 w-5 mr-3" />,
    },
    {
      id: 5,
      name: "Contacto",
      href: "/contacto",
      icon: <Phone className="h-5 w-5 mr-3" />,
    },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="sticky top-4 right-4 z-[1000] p-2 rounded-md bg-blue-600 text-white shadow-lg"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-[999] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-3 text-xl font-bold text-gray-900">
                Seguridad Privada
              </span>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center p-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-200">
            <a
              href="tel:+123456789"
              className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
