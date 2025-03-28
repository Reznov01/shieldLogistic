import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const links = [
  { name: "Sobre Nosotros", url: "sobre-nosotros" },
  { name: "Galeria", url: "/galeria" },
  { name: "Preguntas Frecuentes", url: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/shieldLogo.webp"
                alt="logo de empresa shield logistic"
                className="h-20 w-20"
              />
              <h2 className="text-xl font-bold">SHIELD LOGISTIC</h2>
            </div>
            <p className="text-slate-400 text-sm">
              Ofrecemos soluciones de seguridad integrales para empresas y
              hogares, con más de 5 años de experiencia protegiendo lo que más
              importa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-2">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="cotizacion"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Seguridad Física
                </a>
              </li>
              <li>
                <a
                  href="cotizacion"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Consultoría de Seguridad
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-blue-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-2">
              Contacto
            </h3>
            <ul className="space-y-3">
              {/* Dirección - Abre Google Maps */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Seguridad+123,+Sector+Protegido,+Ciudad+Segura,+12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-primary transition-colors"
                >
                  Av. Seguridad 123, Sector Protegido, Ciudad Segura, 12345
                </a>
              </li>

              {/* Teléfono - Abre la app de llamadas */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+34912345678"
                  className="text-slate-400 text-sm hover:text-primary transition-colors"
                >
                  +34 912 345 678
                </a>
              </li>

              {/* Correo - Abre la app de email */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@secureguard.com"
                  className="text-slate-400 text-sm hover:text-primary transition-colors"
                >
                  info@secureguard.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SHIELD LOGISTIC.
          </p>
          <p className="text-blue-300">
            Pagina desarollada con ☕ por{" "}
            <span className="text-blue-200 hover:text-amber-300 cursor-pointer transition-colors">
              <a href="https://conseportafolio.netlify.app/" target="_blank">
                ConseLab
              </a>
            </span>
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="politica-privacidad"
              className="text-xs text-slate-500 hover:text-blue-300 transition-colors"
            >
              Política de Privacidad
            </a>{" "}
            <a
              href="terminos-condiciones"
              className="text-xs text-slate-500 hover:text-blue-300 transition-colors"
            >
              Términos y Condiciones
            </a>{" "}
            <a
              href="aviso-legal"
              className="text-xs text-slate-500 hover:text-blue-300 transition-colors"
            >
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
