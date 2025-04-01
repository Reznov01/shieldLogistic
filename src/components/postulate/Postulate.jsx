import ApplicationForm from "./AppicationForm";
import postulate from "../../assets/img/postulate.jpg";
export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen my-20">
      <main className="flex-1 mx-auto ">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-22 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
              <div className="space-y-4 xl:mt-20">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:mb-10">
                  Únete a Nuestro Equipo de Seguridad Profesional
                </h1>
                <p className="text-gray-600 md:text-xl xl:mb-10">
                  Estamos buscando personas comprometidas y confiables para
                  formar parte de nuestro equipo de seguridad privada. Ofrecemos
                  capacitación, desarrollo profesional y un ambiente de trabajo
                  estable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#positions"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium text-center"
                  >
                    Ver Posiciones
                  </a>
                  <a
                    href="#apply"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md text-lg font-medium text-center"
                  >
                    Aplicar Ahora
                  </a>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <img
                  src={postulate}
                  alt="Equipo de seguridad profesional"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover h-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¿Por qué unirte a nosotros?
              </h2>
              <p className="max-w-[900px] text-gray-800 md:text-xl">
                Descubre los beneficios de formar parte de nuestro equipo de
                seguridad privada líder en el sector.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="border rounded-lg p-6 shadow-md">
                  <div className="mb-4 text-blue-600 text-4xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-800 xl:text-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="positions"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Posiciones Disponibles
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora nuestras vacantes actuales y encuentra la que mejor se
                  adapte a tu perfil.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full border p-6 rounded-lg shadow-md"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{position.title}</h3>
                    <p className="text-gray-500">{position.location}</p>
                  </div>
                  <div className="flex-1">
                    <p>{position.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Requisitos:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#apply"
                      className="w-full inline-block py-2 px-4  border-2 border-blue-600 text-black rounded-md text-center hover:bg-blue-500 hover:text-white transition-all"
                    >
                      Chatea con nosotros
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Aplica Ahora
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Completa el siguiente formulario para iniciar tu proceso de
                aplicación.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <ApplicationForm positions={positions.map((p) => p.title)} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const benefits = [
  {
    title: "Horarios Flexibles",
    description: "Ofrecemos diferentes turnos y opciones de horario.",
    icon: "⏳",
  },
  {
    title: "Desarrollo Profesional",
    description: "Capacitación continua y oportunidades de crecimiento.",
    icon: "🏆",
  },
  {
    title: "Equipo Sólido",
    description:
      "Forma parte de un equipo profesional con años de experiencia.",
    icon: "👥",
  },
];

const positions = [
  {
    title: "Guardia de Seguridad",
    location: "Ciudad Principal",
    description: "Responsable de vigilar y proteger propiedades.",
    requirements: [
      "Mayor de 21 años",
      "Experiencia mínima de 1 año",
      "Actitud proactiva y observadora",
      "Capacidad para trabajar en equipo",
      "Disponibilidad para turnos rotativos",
      "Conocimiento en manejo de sistemas de vigilancia",
      "Actitud profesional y puntualidad",
    ],
  },
  {
    title: "Supervisor de Seguridad",
    location: "Ciudad Principal",
    description: "Coordinar y supervisar al equipo de guardias.",
    requirements: [
      "Mayor de 25 años",
      "Experiencia mínima de 3 años",
      "Habilidades de liderazgo",
      "Conocimiento en manejo de situaciones de emergencia",
      "Experiencia en la elaboración de informes",
      "Capacidad para tomar decisiones rápidas",
      "Excelente comunicación verbal y escrita",
      "Capacidad para gestionar conflictos",
      "Conocimiento de normativas de seguridad",
      "Compromiso con la seguridad y bienestar del equipo",
    ],
  },
  {
    title: "Personal de Limpieza",
    location: "Varias ubicaciones",
    description: "Mantener la limpieza en las instalaciones.",
    requirements: [
      "Mayor de 18 años",
      "Experiencia mínima de 6 meses en limpieza",
      "Disponibilidad para trabajar en horarios flexibles",
      "Conocimiento en el manejo de productos de limpieza",
      "Responsabilidad y puntualidad",
      "Atención al detalle",
      "Habilidades de organización",
      "Cumplir con las normativas de higiene y seguridad laboral",
    ],
  },
];
