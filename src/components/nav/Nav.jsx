import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./NavMobil";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationNotFound, setLocationNotFound] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const knownRoutes = [
      "/",
      "/servicios",
      "/postulate",
      "/sobre-nosotros",
      "/atencion-clientes",
      "/cotizacion",
      "/galeria",
      "/politica",
      "/terminos",
      "/aviso",
    ];

    if (!knownRoutes.includes(location.pathname)) {
      setLocationNotFound(true);
    } else {
      setLocationNotFound(false);
    }

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed"; // Evita el desplazamiento
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }
  }, [location.pathname, menuOpen]);

  return (
    <nav
      className={`bg-transparent  absolute w-screen z-50 ${
        locationNotFound ? "hidden" : "block"
      } `}
    >
      <div className="max-w-screen-xl flex flex-wrap h-[70px] sm:h-[90px] items-center justify-between mx-auto p-4 relative">
        <div className="flex items-center 2xl:-ml-20 space-x-3 rtl:space-x-reverse">
          <Link to="/">
            <img
              src="/shieldLogo.webp"
              className="absolute  3xl:-left-[12%] 2xl:-left-[5%] xl:-left-[12%] top-2 w-[100px] h-[80px] lg:h-[80px] lg:w-[100px]"
              alt="SHIELD Logo"
            />
          </Link>
          <Link to="/">
            <span className="self-center text-xl ml-[60%] sm:text-2xl font-semibold whitespace-nowrap sm:ml-[50%] lg:ml-[60%] 3xl:ml-[10%] 2xl:ml-[50%] xl:ml-[10%]">
              SHIELD LOGISTIC
            </span>
          </Link>
        </div>

        {/* Pasar menuOpen y setMenuOpen como props */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 " aria-current="page">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="servicios" className="block py-2 px-3 text-gray-900">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/postulate" className="block py-2 px-3 text-gray-900">
                Postulate
              </Link>
            </li>
            <li>
              <Link
                to="/atencion-clientes"
                className="block py-2 px-3 text-gray-900"
              >
                Atención a clientes
              </Link>
            </li>
            <li>
              <Link to="/cotizacion" className="block py-2 px-3 text-gray-900">
                Cotización
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
