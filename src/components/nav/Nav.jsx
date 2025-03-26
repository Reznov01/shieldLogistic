import React from "react";

export default function Nav() {
  return (
    <nav className="bg-transparent  z-10">
      <div className="max-w-screen-xl flex flex-wrap h-[70px] sm:h-[90px] items-center justify-between mx-auto p-4 relative">
        <div className="flex items-center 2xl:-ml-20 space-x-3 rtl:space-x-reverse">
          <a href="#">
            <img
              src="/shieldLogo.webp"
              className="absolute 2xl:-left-[12%] top-2 w-[100px] h-[80px] lg:h-[80PX] lg:w-[100px]"
              alt="SHIELD Logo"
            />
          </a>
          <a href="">
            <span className="self-center  text-xl ml-[60%]  sm:text-2xl font-semibold whitespace-nowrap sm:ml-[50%] lg:ml-[60%] 2xl:ml-[10%]">
              SHIELD LOGISTIC
            </span>
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 " aria-current="page">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Postulate
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Atencion a clientes
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Cotizasion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
