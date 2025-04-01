import {
  Menu,
  X,
  Shield,
  Home,
  Phone,
  Users,
  FileText,
  LandPlot,
} from "lucide-react";
import ShieldLogo from "/shieldLogo.webp";

export default function NavMobil({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      name: "Postulate",
      href: "/postulate",
      icon: <LandPlot className="h-5 w-5 mr-3" />,
    },
    {
      id: 4,
      name: "Nosotros",
      href: "/sobre-nosotros",
      icon: <Users className="h-5 w-5 mr-3" />,
    },
    {
      id: 5,
      name: "Atencion a Clientes",
      href: "/atencion-clientes",
      icon: <FileText className="h-5 w-5 mr-3" />,
    },
    {
      id: 6,
      name: "Cotizacion",
      href: "/cotizacion",
      icon: <Phone className="h-5 w-5 mr-3" />,
    },
  ];

  return (
    <div className="lg:hidden">
      {/* Botón de menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className="sticky top-4 right-4 z-[1000] p-2 rounded-md bg-gray-300 text-gray-800 shadow-lg"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-[999] shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <img src={ShieldLogo} className="h-8 w-8" alt="Shield Logo" />
              <span className="ml-3 text-xl font-bold text-gray-900">
                Shield Logistic
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
                    onClick={() => setMenuOpen(false)}
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
