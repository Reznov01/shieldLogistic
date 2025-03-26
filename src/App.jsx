import "./App.css";
import Header from "./components/header/Header";
import ServicesMin from "./components/servicesmin/ServicesMin";
import Servicios from "./components/servicios/Servicios";
import ServiciosSolicitados from "./components/serviciosSolicitados/ServiciosSolicitados";
import Parallax from "./components/parallax/Parallax";
import Nosotros from "./components/nosotros/Nosotros";
import Mision from "./components/nosotros/Mision";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <div className=" bg-gray-100 overflow-x-hidden ">
        <Header />
        <ServicesMin />
        <Servicios />
        <ServiciosSolicitados />
        <Parallax />
        <Nosotros />
        <Mision />
        <Footer />
      </div>
    </div>
  );
}

export default App;
