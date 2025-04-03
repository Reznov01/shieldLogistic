import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  Building,
  Home,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react";

export default function Section() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("business");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    location: "",
    employees: "",
    startDate: "",
    message: "",
    terms: false,
  });

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Cotización solicitada:", formData);
    alert(
      "Su solicitud de cotización ha sido enviada. Un asesor se pondrá en contacto con usted pronto."
    );
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      serviceType: "",
      location: "",
      employees: "",
      startDate: "",
      message: "",
      terms: false,
    });
  };

  const services = [
    {
      id: "vigilancia",
      title: "Vigilancia Física",
      description:
        "Personal de seguridad capacitado para proteger sus instalaciones las 24 horas.",
      features: [
        "Guardias de seguridad certificados",
        "Supervisión constante",
        "Reportes periódicos",
        "Protocolos de emergencia personalizados",
      ],
    },
    {
      id: "limpieza",
      title: "Servicios de Limpieza",
      description:
        "Servicios profesionales de limpieza para empresas, residencias y eventos.",
      features: [
        "Personal capacitado y confiable",
        "Productos ecológicos de alta calidad",
        "Limpieza profunda y sanitización",
        "Horarios flexibles adaptados a sus necesidades",
      ],
    },
    {
      id: "consultoria",
      title: "Consultoría en Seguridad",
      description:
        "Análisis de riesgos y desarrollo de estrategias de seguridad a medida.",
      features: [
        "Evaluación de vulnerabilidades",
        "Diseño de protocolos de seguridad",
        "Capacitación de personal",
        "Planes de contingencia",
      ],
    },
  ];

  const faqItems = [
    {
      question: "¿Cuánto tiempo toma recibir una cotización?",
      answer:
        "Normalmente procesamos las solicitudes de cotización en un plazo de 24 a 48 horas hábiles. Para casos que requieran una evaluación presencial, podemos agendar una visita en los siguientes 3 días hábiles.",
    },
    {
      question: "¿La cotización tiene algún costo?",
      answer:
        "No, nuestro servicio de cotización es completamente gratuito y sin compromiso. Nuestro objetivo es proporcionarle la información más precisa para que pueda tomar la mejor decisión para sus necesidades de seguridad.",
    },
    {
      question: "¿Ofrecen planes personalizados?",
      answer:
        "Sí, entendemos que cada cliente tiene necesidades únicas. Nuestros asesores trabajarán con usted para desarrollar un plan de seguridad personalizado que se adapte a sus requerimientos específicos y presupuesto.",
    },
    {
      question: "¿Cuál es el periodo mínimo de contratación?",
      answer:
        "Ofrecemos diferentes opciones de contratación, desde servicios por evento hasta contratos anuales. El periodo mínimo estándar es de 3 meses, pero podemos adaptarnos a sus necesidades específicas.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Méndez",
      company: "Grupo Comercial Azteca",
      text: "El proceso de cotización fue rápido y profesional. Recibimos una propuesta detallada que se ajustaba perfectamente a nuestras necesidades de seguridad corporativa.",
    },
    {
      name: "Laura Sánchez",
      company: "Residencial Los Pinos",
      text: "Quedamos muy satisfechos con la transparencia y detalle de la cotización. El asesor nos explicó cada aspecto del servicio y respondió todas nuestras dudas.",
    },
    {
      name: "Miguel Ángel Torres",
      company: "Distribuidora Nacional",
      text: "Comparamos varias empresas de seguridad y esta fue la única que realizó un análisis completo de nuestras instalaciones antes de presentar su propuesta.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solicite una Cotización
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Obtenga una propuesta personalizada para sus necesidades de
            seguridad. Nuestros expertos diseñarán un plan que se ajuste a sus
            requerimientos y presupuesto.
          </p>
        </div>

        {/* Service Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-6 w-full ">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-900 rounded-lg shadow-md overflow-hidden xl:w-[350px]  "
                initial={{ translateY: "200px", opacity: 0 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16 ">
          {/* Quote Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Complete el formulario para recibir su cotización
            </h2>

            {/* Tabs */}
            <div className="flex mb-6 border-b border-gray-200">
              <button
                className={`py-3 px-6 font-medium ${
                  activeTab === "business"
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("business")}
              >
                <Building className="inline-block h-5 w-5 mr-2" />
                Empresas
              </button>
              <button
                className={`py-3 px-6 font-medium ${
                  activeTab === "residential"
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("residential")}
              >
                <Home className="inline-block h-5 w-5 mr-2" />
                Residencial
              </button>
              <button
                className={`py-3 px-6 font-medium ${
                  activeTab === "events"
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("events")}
              >
                <Users className="inline-block h-5 w-5 mr-2" />
                Eventos
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
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

                  {activeTab === "business" && (
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nombre de la Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  )}

                  {activeTab === "events" && (
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Tipo de Evento *
                      </label>
                      <input
                        type="text"
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  )}

                  {activeTab === "residential" && (
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Tipo de Propiedad *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Casa">Casa</option>
                        <option value="Departamento">Departamento</option>
                        <option value="Condominio">Condominio</option>
                        <option value="Fraccionamiento">Fraccionamiento</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  <div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tipo de Servicio *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="Vigilancia Física">
                        Vigilancia Física
                      </option>
                      <option value="Servicios de Limpieza">
                        Servicios de Limpieza
                      </option>
                      <option value="Consultoría en Seguridad">
                        Consultoría en Seguridad
                      </option>
                      <option value="Servicio Integral">
                        Servicio Integral
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Ubicación del Servicio *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="Ciudad, Estado"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {activeTab === "business" && (
                    <div>
                      <label
                        htmlFor="employees"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Número de Empleados
                      </label>
                      <input
                        type="number"
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  {activeTab === "events" && (
                    <div>
                      <label
                        htmlFor="attendees"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Número de Asistentes
                      </label>
                      <input
                        type="number"
                        id="attendees"
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Fecha Deseada de Inicio
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Detalles Adicionales
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa sus necesidades específicas de seguridad o cualquier información adicional relevante."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-blue-700 border-gray-300 rounded focus:ring-blue-500 mt-1"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Acepto que la información proporcionada sea utilizada para
                      contactarme y enviarme una cotización personalizada. He
                      leído y acepto la <Link to="/politica-privacidad" className="text-blue-500"> Politica de Privacidad </Link> .
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Solicitar Cotización
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Testimonials and Benefits */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                ¿Por qué elegirnos?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Experiencia Comprobada
                    </h3>
                    <p className="text-gray-600">
                      Más de 5 años brindando soluciones de seguridad a empresas
                      y particulares.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Personal Certificado
                    </h3>
                    <p className="text-gray-600">
                      Nuestro equipo cuenta con certificaciones y capacitación
                      constante.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Tecnología de Punta
                    </h3>
                    <p className="text-gray-600">
                      Utilizamos los sistemas más avanzados para garantizar su
                      seguridad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Soluciones Personalizadas
                    </h3>
                    <p className="text-gray-600">
                      Cada plan se adapta a las necesidades específicas de cada
                      cliente.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
                  >
                    <p className="text-gray-600 italic mb-2">
                      "{testimonial.text}"
                    </p>
                    <div className="font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Preguntas Frecuentes sobre Cotizaciones
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
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
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-700 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesita una cotización urgente?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Llámenos directamente y uno de nuestros asesores le atenderá de
            inmediato para proporcionarle una cotización rápida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+525512345678"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +52 (55) 1234-5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
