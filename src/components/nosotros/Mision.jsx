import shieldVideo from "../../assets/video/shieldVideo.mp4";
export default function Mision() {
  return (
    <section className="w-screen min-h-screen flex flex-col bg-[#f3f4f6] relative">
      <div className="mx-auto w-[90%] sm:w-[95%] 2xl:w-[80%]  flex flex-col lg:flex-row h-1/2 p-5 sm:p-10">
        <div className="lg:w-1/2 mb-6 sm:mb-0">
          <div className="pt-8">
            <p className="text-3xl sm:text-4xl font-bold mb-5">
              Sobre Nosotros
            </p>
            <p className="text-md sm:text-lg mb-5">
              Somos una empresa comprometida con la excelencia y la innovación.
              Desde nuestra fundación en 2020, hemos trabajado incansablemente
              para ofrecer soluciones de alta calidad que satisfagan las
              necesidades de nuestros Clientes,
            </p>
            <p className="text-md sm:text-lg mb-10">
              Nuestro equipo está formado por profesionales apasionados y
              altamente cualificados, dedicados a superar las expectativas en
              cada proyecto que emprendemos.
            </p>
            <button className="bg-gray-500 p-4 text-lg rounded-md cursor-pointer transition-colors text-white border-b-gray-600 border-b-3 hover:bg-gray-600">
              Conoce a nuestro equipo
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 sm:mt-10 ">
          <div className="w-full   max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
            <video
              className="w-full h-full"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={shieldVideo} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Nuestra Historia y Valores
              </h3>
              <p className="text-gray-600">
                Descubre lo que nos hace únicos y cómo trabajamos para crear un
                impacto positivo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[95%] 2xl:w-[80%]  mx-auto flex flex-col sm:flex-row gap-10 p-5 sm:p-10 flex-wrap lg:flex-nowrap">
        <div className="w-full  lg:w-1/3">
          <div className="p-10 bg-gray-900 text-blue-50 border shadow-lg rounded-lg min-h-[320px]">
            <p className="text-2xl font-bold text-amber-300">Nuestra Misíon</p>
            <p className="mt-3">
              Proporcionar soluciones innovadoras que transformen Positivamente
              la vida de nuestros Clientes, manteniendo siempre los más altos
              estándares de calidad y servicio.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="p-10 bg-gray-900 text-blue-50 border shadow-lg rounded-lg min-h-[320px]">
            <p className="text-2xl font-bold text-amber-300">Nuestra Visión</p>
            <p className="mt-3">
              Ser reconocidos como líderes en nuestro sector, destacando por
              nuestra capacidad de innovación, excelencia operativa y compromiso
              con la satisfacción del cliente.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="p-10 bg-gray-900 text-blue-50 border shadow-lg rounded-lg min-h-[320px]">
            <p className="text-2xl font-bold text-amber-300">
              Nuestros Valores
            </p>
            <p className="mt-3">
              Integridad, excelencia, innovación, trabajo en equipo y
              responsabilidad social son los pilares que guían todas nuestras
              acciones decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
