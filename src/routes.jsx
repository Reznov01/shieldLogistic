import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/home/Inicio";
import Postulate from "./pages/jobs/Postulate";
import AtencionClientes from "./pages/customerServices/AtencionClientes";
import Cotizacion from "./pages/quote/Cotizacion";
import PreguntasFrecuentes from "./pages/questions/PreguntasFrecuentes";
import SobreNosotrosPage from "./pages/aboutUs/SobreNosotrosPage";
import Gallery from "./pages/galery/Gallery";
import Servicios from "./pages/servicios";
import NotFound from "./pages/notFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/postulate" element={<Postulate />} />
      <Route path="/atencion-clientes" element={<AtencionClientes />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/faq" element={<PreguntasFrecuentes />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
    </Routes>
  );
};

export default AppRoutes;
