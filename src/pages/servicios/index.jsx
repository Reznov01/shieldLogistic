import React from "react";
import ServiciosSolicitados from "../../components/serviciosSolicitados/ServiciosSolicitados";
import Servicios from "../../components/servicios/Servicios";

export default function () {
  return (
    <div className="min-h-screen min-w-screen my-30">
      <Servicios />
      <ServiciosSolicitados />
    </div>
  );
}
