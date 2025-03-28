import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/home/Inicio";
import Postulate from "./pages/jobs/Postulate";
import AtencionClientes from "./pages/customerServices/AtencionClientes";
import Cotizacion from "./pages/quote/Cotizacion";
import PreguntasFrecuentes from "./pages/questions/PreguntasFrecuentes";
import PoliticaPrivacidad from "./pages/legal/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/legal/TerminosCondiciones";
import AvisoLegal from "./pages/legal/AvisoLegal";
import SobreNosotrosPage from "./pages/aboutUs/sobreNosotrosPage";
import Gallery from "./pages/galery/Gallery";
import Servicios from "./pages/servicios";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/postulate" element={<Postulate />} />
      <Route path="/atencion-clientes" element={<AtencionClientes />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/faq" element={<PreguntasFrecuentes />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
      <Route path="/aviso-legal" element={<AvisoLegal />} />
    </Routes>
  );
};

export default AppRoutes;
