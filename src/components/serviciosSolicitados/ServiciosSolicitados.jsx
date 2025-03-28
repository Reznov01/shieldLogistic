import CardServices from "./CardServices";
import { MdHomeWork } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import Hotel from "../../assets/img/hotel.webp";
import Recidencial from "../../assets/img/recidencial.webp";

export default function ServiciosSolicitados() {
  return (
    <section
      className="w-screen min-h-[80vh] h-[2100px] sm:h-[1750px] lg:h-[1950px] xl:h-[1100px] 2xl:h-[1100px] flex flex-col items-center relative  mb-40 lg:mb-0 "
      id="serviciosSection"
    >
      <div className="w-full lg:h-2/4 h-2/7 bg-gray-900 flex flex-col items-center relative">
        <h3 className="text-3xl md:text-5xl text-blue-200 mt-10 text-center">
          Servicios más solicitados
        </h3>
      </div>
      <div className="flex flex-col  xl:flex-row gap-10 md:gap-16 absolute top-32  px-6 md:px-auto w-full xl:px-0 xl:top-40">
        <div className="w-full xl:w-1/2 flex justify-center mb-[500px] sm:mb-[400px]">
          <CardServices
            img={Hotel}
            icon={<MdHomeWork />}
            title={"Seguridad Residencial"}
            subTitle={"Protección completa para su hogar y familia"}
            item1={"Vigilancia perimetral"}
            item2={"Control de acceso para proveedores y visitantes"}
            item3={"Verificación de paquetería y entregas"}
            item4={
              "Reportes detallados de incidentes y actividades sospechosas"
            }
          />
        </div>
        <div className="w-full xl:w-1/2 flex justify-center">
          <CardServices
            img={Recidencial}
            icon={<BsBuildingsFill />}
            title={"Seguridad Corporativa"}
            subTitle={"Soluciones integrales para empresas y organizaciones"}
            item1={"Protección de información y activos empresariales"}
            item2={"Supervisión de estacionamientos y áreas exteriores"}
            item3={"Supervisión y control en carga y descarga de mercancía"}
            item4={
              "Guardias especializados en seguridad corporativa y monitoreo de CCTV"
            }
          />
        </div>
      </div>
    </section>
  );
}
