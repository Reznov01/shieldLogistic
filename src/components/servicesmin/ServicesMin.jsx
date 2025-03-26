import React from "react";

export default function ServicesMin() {
  return (
    <div className="w-screen flex bg-blue-500 relative">
      <div className="relative z-20 w-full px-4 py-8 md:px-10 lg:px-20 2xl:px-50  flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-3/4 text-center md:text-left mb-6 md:mb-0">
          <p className="text-2xl md:text-4xl text-white font-bold lg:text-3xl 2xl:text-4xl ">
            Nuestros clientes nos recomiendan por nuestro compromiso
          </p>
        </div>
        <div className="md:w-1/4 flex flex-col items-center mb-6 md:mb-0">
          <div className="text-center">⭐⭐⭐⭐⭐</div>
          <div className="text-center">
            <p className="text-4xl md:text-6xl text-white font-bold">78+</p>
          </div>
          <p className="text-lg text-gray-300 mt-3 text-center">
            Clientes protegidos
          </p>
        </div>
        <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
          <p className="text-gray-300 text-xl md:text-3xl text-center">
            4 Años en operación y crecimiento
          </p>
        </div>
      </div>
    </div>
  );
}
