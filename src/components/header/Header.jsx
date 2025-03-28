import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.webp";
import comando from "../../assets/img/comando.webp";
import Progreso from "./Progreso";
import Nav from "../nav/Nav";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <section className="h-screen  flex flex-col transform  relative">
      <div className="absolute w-screen z-10">
        <Nav />
      </div>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-3/5 bg-gray-100 flex lg:flex-col items-center justify-center mt-10 lg:mt-0 mb-5 sm:mb-0">
          <div className="flex flex-col gap-6 mt-15 lg:mx-auto">
            <h1 className="xl:text-7xl lg:text-5xl text-4xl ml-5  font-bold ">
              Seguridad Privada
            </h1>
            <div className="sm:text-3xl text-2xl xl-h-[100%] w-[90%] sm:w-[60%] lg:w-[61%] bg-amber-300 p-2 rounded-2xl mt-4 flex items-center ml-4 2xl:w-[70%]">
              <img
                src={comando}
                alt=""
                className="xl:w-[140px] lg:w-[100px] w-[50px] sm:w-[80px]"
              />
              <h2 className="uppercase text-xl lg:text-2xl xl:text-3xl">
                tu aliado en seguridad
              </h2>
            </div>
            <div className=" ">
              <h3 className="lg:text-2xl lg:w-[40ch] xl:w-[50ch] 2xl:w-[60ch] text-gray-600 text-lg sm:text-xl mx-5 ">
                Nuestra misión es hacer de cada espacio un entorno seguro,
                protegido y libre de amenazas.
              </h3>
            </div>
            <div className=" flex gap-5 ml-5 sm:mb-5 lg:ml-5 mb-0 lg:mx-0">
              <Link
                to="cotizacion"
                className="bg-blue-800  sm:w-1/2 rounded-md sm:text-xl cursor-pointer transition-all text-white px-6 py-2 
        border-blue-900 border-b-[6px] hover:brightness-150 hover:-translate-y-[1px] hover:border-b-[6px]
          active:brightness-90 active:translate-y-[2px]"
              >
                Contáctanos ahora
              </Link>
              <Link
                to="galeria"
                className="bg-green-100  sm:w-1/3 rounded-md sm:text-xl cursor-pointer transition-all text-blue-850 px-6 py-2 border  
        border-blue-200 border-b-[6px] hover:bg-blue-400  hover:-translate-y-[1px] hover:border-b-[6px] hover:border-blue-500
          active:brightness-90 active:translate-y-[2px]"
              >
                Galeria
              </Link>
            </div>
            <div className="w-fit h-fit flex gap-5 ml-4">
              <a href="#">
                <p className="text-3xl sm:text-4xl lg:text-5xl text-[#f00075] transition-all hover:scale-105 hover:-translate-y-2">
                  <FaInstagram />
                </p>
              </a>
              <a href="#">
                <p className="text-3xl sm:text-4xl lg:text-5xl text-[#0866ff] transition-all hover:scale-105 hover:-translate-y-2">
                  <FaFacebook />
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-screen h-screen relative flex items-center justify-center bg-gradient-to-tl b-5 from-emerald-100 from- via-red-200 via- to-gray-50 to-https://tailwind-gradient-generator.vercel.app/?gradient=eyJzdGFydCI6eyJjb2xvciI6ImVtZXJhbGQiLCJzaGFkZSI6IjEwMCIsInBvc2l0aW9uIjoiIiwiYWN0aXZlIjp0cnVlfSwibWlkZGxlIjp7ImNvbG9yIjoicmVkIiwic2hhZGUiOiIyMDAiLCJwb3NpdGlvbiI6IiIsImFjdGl2ZSI6dHJ1ZX0sImVuZCI6eyJjb2xvciI6ImdyYXkiLCJzaGFkZSI6IjUwIiwicG9zaXRpb24iOiIiLCJhY3RpdmUiOnRydWV9fQ==">
          <div className="w-[60%] h-[80%] xl:w-[50%] xl:h-[50%] lg:w-[60%] lg:h-[60%] bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 z-20">
              <img
                src={avatar}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-[80%] bg-blue-500 clipP absolute bottom-0 z-10"></div>
          </div>
          <div className="absolute top-5 left-10 sm:left-25 md:left-30 lg:top-40 lg:-left-18 z-10">
            <Progreso percentage={100} label="Máxima Seguridad" />
          </div>
          <div className="absolute flex flex-col lg:text-xl  text-sm sm:text-sm bottom-0 right-2 2xl:bottom-40 2xl:-left-30 xl:left-20 lg:z-20 bg-yellow-400 p-2 lg:p-8  text-black w-[220px] h-[100px] lg:w-[350px] sm:h-[100px] lg:h-[200px] rounded-md shadow-2xl lg:gap-4 z-20  mb-5 gap-2">
            <p>¡Protege tu propiedad con una evaluación de riesgos!</p>
            <p>Enviamos a un profesional para realizar un análisis completo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
