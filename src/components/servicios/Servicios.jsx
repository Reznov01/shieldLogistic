import { Link } from "react-router-dom";
import { motion } from "motion/react";
import serviciosLayer from "../../assets/layers/SectionLayer.svg";
import { TbShieldStar } from "react-icons/tb";
import servicios from "../../assets/img/lobi.webp";

export default function Servicios() {
  return (
    <div className="min-h-screen w-screen  bg-gray-100 relative flex flex-col items-center">
      <img
        src={serviciosLayer}
        alt="Layer de fondo"
        className="object-cover w-full h-[80%] absolute -top-5 md:top-0"
      />
      <div className="z-10 flex flex-col items-center w-full px-5">
        <h2 className="text-3xl bg-amber-300 p-5 rounded-2xl mt-20 w-fit text-center">
          Nuestros Servicios
        </h2>
        <div className="container flex flex-col lg:flex-row items-center w-full max-w-9xl h-auto mt-10 sm:p-5 bg-gray-200 rounded-xl shadow-2xl relative ">
          <div className="w-full lg:w-3/5  p-5 ">
            <h3 className="text-2xl sm:text-4xl mb-5 font-bold mt-5 md:text-center lg:text-left">
              Soluciones de Seguridad Profesional
            </h3>
            <p className="sm:text-xl text-start text-gray-600 mt-2 md:ml-4 lg:text-left">
              Ofrecemos servicios de seguridad de alta calidad adaptados a sus
              necesidades específicas.
            </p>
            <p className="text-xl mt-4 text-center font-semibold">
              Todos nuestros servicios cuentan con:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {[
                "Personal capacitado y profesional",
                "Visitas de supervisión continua",
                "Protocolos de seguridad personalizados",
                "Evaluación de riesgos y vulnerabilidades",
                "Guardias uniformados y presentables",
                "Cobertura 24/7 los 365 días del año",
                "Atención personalizada y asesoramiento continuo",
                "Colaboración con autoridades locales",
                "Capacitación constante para el personal",
                "Reacción ante amenazas de incendio",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  <TbShieldStar className="text-4xl text-blue-700 z-20" />
                  <motion.p
                    className="sm:text-lg z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }} // Evita que se repita la animación
                  >
                    {item}
                  </motion.p>
                </div>
              ))}
            </div>
            <Link
              to="cotizacion"
              className="cursor-pointer text-center  transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-5 lg:mt-10 w-full  text-lg hidden lg:block"
            >
              Cotiza tu Servicio
            </Link>
          </div>
          <div className="w-full lg:w-2/5 lg:h-full  ">
            <img
              src={servicios}
              alt="Servicios de seguridad"
              className="rounded-lg shadow-lg h-[300px] lg:h-[680px] 2xl:h-[580px]  object-cover w-full"
            />
            <div className="w-full  block lg:hidden  px-2 ">
              <Link
                to="/cotizacion"
                className="cursor-pointer text-center block  transition-all bg-blue-500 text-white  py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] my-10  w-full   text-lg  "
              >
                Cotiza tu Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
