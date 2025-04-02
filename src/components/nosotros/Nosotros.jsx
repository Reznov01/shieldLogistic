import React from "react";
import svg from "../../assets/layers/sectionUniformesSf.svg";
import CardUniforme from "./CardUniforme";
import galaU from "../../assets/img/galaU.webp";
import comandoU from "../../assets/img/comandoU.webp";
import avatar from "../../assets/img/avatar.webp";
import { motion } from "motion/react";

export default function Nosotros() {
  return (
    <section className="w-screen min-h-screen bg-[#f3f4f6] relative flex flex-col z-10">
      <img
        src={svg}
        alt="Fondo SVG"
        className="w-screen hidden sm:block h-screen absolute top-0 left-0 z-0 object-cover"
      />
      <div className="z-10 relative px-5">
        <div className="w-full flex flex-col items-center pt-20 sm:pt-32 px-4">
          <p className="text-3xl md:text-4xl sm:text-5xl font-bold text-center">
            Nuestros Uniformes
          </p>
          <p className=" text-md sm:text-xl lg:text-2xl text-gray-600 sm:text-center mt-5 w-full xl:w-[65ch]">
            Conoce los diferentes uniformes que utilizamos en nuestra empresa,
            cada uno diseñado con un propósito específico.
          </p>
        </div>
        <div className="flex flex-col flex-wrap gap-10 sm:flex-row sm:space-x-4 justify-center mt-10 space-y-4 sm:space-y-0">
          <motion.div
            initial={{ translateX: "-100px", opacity: 0 }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // Solo se anima una vez
          >
            <CardUniforme
              image={galaU}
              title="Uniforme de Gala"
              description="Nuestro uniforme de gala consta de un traje completo color azul marino, con corbata roja, camisa blanca y zapatos negros."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardUniforme
              image={comandoU}
              title="Uniforme de Comando"
              description="El uniforme de comando incluye una playera de manga larga, uniforme azul marino, pantalón color camello y botas negras de comando."
            />
          </motion.div>
          <motion.div
            initial={{ translateX: "100px", opacity: 0 }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardUniforme
              image={avatar}
              title="Uniforme de Recepcionista"
              description="El uniforme de secretaria consiste en un traje de mujer color azul oscuro, camisa blanca y mascada."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
