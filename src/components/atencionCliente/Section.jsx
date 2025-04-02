import { useState } from "react";
import { motion } from "motion/react";
import {
  Shield,
  Phone,
  Clock,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Section() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const faqItems = [
    {
      question: "¿Cuáles son los horarios de atención?",
      answer:
        "Nuestro centro de atención al cliente está disponible de lunes a viernes de 8:00 AM a 8:00 PM y sábados de 9:00 AM a 2:00 PM.",
    },
    {
      question: "¿Cómo puedo solicitar un servicio de seguridad?",
      answer:
        "Puede solicitar nuestros servicios a través del formulario en esta página, llamando a nuestro número de atención o enviando un correo electrónico. Un asesor se pondrá en contacto con usted para discutir sus necesidades específicas.",
    },
    {
      question: "¿Cuánto tiempo toma recibir respuesta a mi solicitud?",
      answer:
        "Nos comprometemos a responder todas las solicitudes dentro de un plazo máximo de 24 horas hábiles.",
    },
    {
      question: "¿Ofrecen servicios personalizados para empresas?",
      answer:
        "Sí, ofrecemos soluciones de seguridad personalizadas adaptadas a las necesidades específicas de cada empresa. Nuestros asesores pueden realizar una evaluación de riesgos y proponer un plan de seguridad adecuado.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Atención al Cliente
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos comprometidos con brindarle el mejor servicio. Nuestro
            equipo está listo para atender sus consultas y necesidades de
            seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Información de Contacto
            </h2>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6 mb-8"
              initial={{ translateX: "-100vh" }}
              animate={{ translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start mb-6">
                <Phone className="h-6 w-6 text-blue-700 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    Teléfono de Atención
                  </h3>
                  <p className="text-gray-700 mt-1">+52 (55) 1234-5678</p>
                  <p className="text-gray-700">+52 (55) 8765-4321</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Mail className="h-6 w-6 text-blue-700 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    Correo Electrónico
                  </h3>
                  <p className="text-gray-700 mt-1">
                    atencion@seguridadprivada.com
                  </p>
                  <p className="text-gray-700">soporte@seguridadprivada.com</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Clock className="h-6 w-6 text-blue-700 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-700 mt-1">
                    Lunes a Viernes: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-700">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-700 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Oficina Central</h3>
                  <p className="text-gray-700 mt-1">
                    Av. Insurgentes Sur 1234, Col. Del Valle
                  </p>
                  <p className="text-gray-700">Ciudad de México, CP 03100</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Preguntas Frecuentes
              </h2>
              <motion.div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ translateX: "-100vh" }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5 }}
              >
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      className="flex justify-between items-center w-full p-5 text-left"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-medium text-gray-900">
                        {item.question}
                      </span>
                      {activeAccordion === index ? (
                        <ChevronUp className="h-5 w-5 text-blue-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-blue-700" />
                      )}
                    </button>
                    <div
                      className={`px-5 pb-5 ${
                        activeAccordion === index ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Envíenos un Mensaje
            </h2>
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ translateX: "100vh" }}
              animate={{ translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="Información de Servicios">
                      Información de Servicios
                    </option>
                    <option value="Cotización">Solicitud de Cotización</option>
                    <option value="Soporte Técnico">Soporte Técnico</option>
                    <option value="Quejas y Sugerencias">
                      Quejas y Sugerencias
                    </option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <motion.div
          className="mt-16 bg-blue-700 text-white rounded-lg shadow-md p-6 text-center"
          initial={{ translateY: "100px" }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2">Línea de Emergencia 24/7</h2>
          <p className="text-lg mb-4">
            Para situaciones de emergencia, contáctenos en nuestra línea
            disponible las 24 horas:
          </p>
          <p className="text-3xl font-bold">+52 (55) 9876-5432</p>
        </motion.div>
      </div>
    </section>
  );
}
