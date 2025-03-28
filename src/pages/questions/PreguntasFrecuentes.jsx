import { useState } from "react";
import { Shield, Users, Clock, Building, Phone } from "lucide-react";

export default function PreguntasFrecuentes() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    {
      id: "item-1",
      question: "¿Qué servicios de seguridad ofrecen?",
      answer:
        "Ofrecemos una amplia gama de servicios de seguridad privada, incluyendo vigilancia 24/7, control de acceso, patrullaje, seguridad para eventos, protección ejecutiva, y sistemas de seguridad electrónica. Todos nuestros servicios son personalizables según las necesidades específicas de cada cliente.",
      icon: <Shield className="h-5 w-5 mr-2" />,
    },
    {
      id: "item-2",
      question: "¿Cómo están capacitados sus guardias de seguridad?",
      answer:
        "Todos nuestros guardias de seguridad pasan por un riguroso proceso de selección y capacitación. Están certificados según las normativas nacionales, reciben entrenamiento en primeros auxilios, manejo de crisis, técnicas de comunicación y protocolos de seguridad específicos. Además, participan en programas de formación continua para mantener sus habilidades actualizadas.",
      icon: <Users className="h-5 w-5 mr-2" />,
    },
    {
      id: "item-3",
      question: "¿Cuál es el tiempo de respuesta ante una emergencia?",
      answer:
        "Nuestro tiempo de respuesta promedio es de 10-15 minutos, dependiendo de la ubicación. Contamos con equipos estratégicamente distribuidos y un centro de monitoreo que opera 24/7 para garantizar la respuesta más rápida posible ante cualquier situación de emergencia.",
      icon: <Clock className="h-5 w-5 mr-2" />,
    },
    {
      id: "item-4",
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer:
        "Sí, trabajamos con todo tipo de clientes, desde pequeñas empresas hasta grandes corporaciones. Nuestros servicios son escalables y adaptables a las necesidades y presupuestos de cada cliente, ofreciendo soluciones de seguridad efectivas independientemente del tamaño de su negocio.",
      icon: <Building className="h-5 w-5 mr-2" />,
    },
    {
      id: "item-6",
      question:
        "¿Cómo puedo solicitar una cotización para mis necesidades de seguridad?",
      answer: (
        <div>
          <p>
            Puede solicitar una cotización gratuita llamando a nuestro número de
            atención al cliente, completando el formulario de contacto en
            nuestro sitio web, o enviándonos un correo electrónico. Uno de
            nuestros consultores de seguridad se pondrá en contacto con usted
            para evaluar sus necesidades específicas y proporcionarle una
            propuesta personalizada.
          </p>
          <div className="mt-4">
            <a
              href="/cotizacion"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      ),
      icon: <Phone className="h-5 w-5 mr-2" />,
    },
  ];

  return (
    <section className="w-full py-12 bg-white ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600  max-w-2xl mx-auto">
            Encuentre respuestas a las preguntas más comunes sobre nuestros
            servicios de seguridad privada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="w-full">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-800 ">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex items-center justify-between w-full py-4 text-left text-lg font-medium text-gray-900  hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none  cursor-pointer"
                  aria-expanded={openItem === faq.id}
                  aria-controls={`content-${faq.id}`}
                >
                  <div className="flex items-center ">
                    {faq.icon}
                    {faq.question}
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openItem === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`content-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === faq.id ? "max-h-96 pt-1 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-600 ">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center p-4 bg-gray-100  rounded-lg">
            <Shield className="h-6 w-6 text-blue-600  mr-2" />
            <p className="text-gray-700 ">
              ¿No encuentra lo que busca?{" "}
              <a
                href="atencion-clientes"
                className="font-medium text-blue-600  hover:underline"
              >
                Contáctenos
              </a>{" "}
              para más información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
