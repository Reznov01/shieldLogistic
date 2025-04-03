import React from "react";

export default function PoliticaPrivacidad() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 font-sans text-gray-800 mt-20">
      <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-2 border-blue-900">
          Política de Privacidad
        </h1>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            1. Responsable del Tratamiento
          </h2>
          <p className="mb-4 leading-relaxed">
            <span className="font-bold">Identidad:</span> [Nombre de su Empresa de Seguridad] S.L.
            <br />
            <span className="font-bold">CIF/NIF:</span> [Su CIF/NIF]
            <br />
            <span className="font-bold">Dirección postal:</span> [Dirección completa]
            <br />
            <span className="font-bold">Teléfono:</span> [Número de teléfono]
            <br />
            <span className="font-bold">Correo electrónico:</span> [Email de contacto para protección de datos]
            <br />
            <span className="font-bold">Delegado de Protección de Datos (DPD):</span> [Nombre del DPD o "No aplica"]
            <br />
            <span className="font-bold">Contacto DPD:</span> [Email de contacto del DPD]
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            2. Finalidad del Tratamiento
          </h2>
          <p className="mb-4 leading-relaxed">
            En [Nombre de su Empresa de Seguridad] S.L. tratamos la información que nos facilitan las personas
            interesadas con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">
              Gestionar la solicitud de información o contratación de nuestros servicios de seguridad privada.
            </li>
            <li className="mb-2">
              Enviar comunicaciones comerciales sobre nuestros productos y servicios, siempre que el interesado haya
              consentido este tratamiento.
            </li>
            <li className="mb-2">Cumplir con las obligaciones legales aplicables a nuestra actividad.</li>
            <li className="mb-2">
              Gestionar los procesos de selección de personal cuando el interesado nos ha remitido su currículum.
            </li>
            <li className="mb-2">
              Gestionar las consultas, reclamaciones o solicitudes recibidas a través de nuestros formularios de
              contacto.
            </li>
          </ul>
          <p className="mb-4 leading-relaxed">
            No se elaborarán perfiles ni se tomarán decisiones automatizadas en base a su perfil.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            3. Datos Recogidos a través de Formularios
          </h2>
          <p className="mb-4 leading-relaxed">
            A través de nuestros formularios web, recogemos los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">
              <span className="font-semibold">Formulario de contacto:</span> Nombre, apellidos, correo electrónico,
              teléfono y mensaje.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Formulario de solicitud de presupuesto:</span> Nombre, apellidos, correo
              electrónico, teléfono, dirección, tipo de servicio solicitado y descripción de necesidades.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Formulario de trabajo:</span> Nombre, apellidos, correo electrónico,
              teléfono, currículum vitae y carta de presentación.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Formulario de newsletter:</span> Nombre y correo electrónico.
            </li>
          </ul>
          <p className="mb-4 leading-relaxed">
            Los campos marcados como obligatorios en nuestros formularios deben cumplimentarse necesariamente para poder
            atender su solicitud, siendo imposible realizar la finalidad expresada si no se aportan esos datos.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            4. Legitimación
          </h2>
          <p className="mb-4 leading-relaxed">
            El tratamiento de sus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:
          </p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">
              <span className="font-semibold">Consentimiento del interesado</span> para la contratación de nuestros
              servicios y para el envío de comunicaciones comerciales (Art. 6.1.a RGPD).
            </li>
            <li className="mb-2">
              <span className="font-semibold">Ejecución de un contrato</span> en el que el interesado es parte o para la
              aplicación de medidas precontractuales (Art. 6.1.b RGPD).
            </li>
            <li className="mb-2">
              <span className="font-semibold">Cumplimiento de una obligación legal</span> aplicable al responsable del
              tratamiento (Art. 6.1.c RGPD).
            </li>
            <li className="mb-2">
              <span className="font-semibold">Interés legítimo del responsable</span> para atender las solicitudes de
              información, consultas o reclamaciones realizadas (Art. 6.1.f RGPD).
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            5. Conservación de los Datos
          </h2>
          <p className="mb-4 leading-relaxed">
            Los datos personales proporcionados se conservarán durante los siguientes periodos:
          </p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">
              Datos de clientes: Durante la relación contractual y, una vez finalizada, durante los plazos exigidos por
              ley para atender eventuales responsabilidades.
            </li>
            <li className="mb-2">
              Datos de potenciales clientes: Hasta que solicite la supresión de los mismos o durante un plazo máximo de
              2 años desde el último contacto.
            </li>
            <li className="mb-2">
              Datos de candidatos: Hasta que solicite la supresión de los mismos o durante un plazo máximo de 1 año
              desde la última interacción.
            </li>
            <li className="mb-2">
              Datos para envío de comunicaciones comerciales: Hasta que el interesado revoque el consentimiento
              otorgado.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            6. Destinatarios
          </h2>
          <p className="mb-4 leading-relaxed">
            Los datos personales podrán ser comunicados a los siguientes destinatarios:
          </p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">
              Administraciones Públicas competentes, en los casos previstos por la Ley y para las finalidades definidas
              en ella.
            </li>
            <li className="mb-2">
              Fuerzas y Cuerpos de Seguridad del Estado, en cumplimiento de la Ley de Seguridad Privada.
            </li>
            <li className="mb-2">Entidades financieras para la gestión de cobros y pagos.</li>
            <li className="mb-2">
              Proveedores de servicios necesarios para la prestación de nuestros servicios (asesoría, informática,
              mensajería, etc.) que actúan como encargados de tratamiento.
            </li>
          </ul>
          <p className="mb-4 leading-relaxed">
            No se realizarán transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE).
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            7. Derechos
          </h2>
          <p className="mb-4 leading-relaxed">Las personas interesadas tienen derecho a:</p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">
              <span className="font-semibold">Acceder</span> a sus datos personales.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Rectificar</span> los datos inexactos.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Solicitar la supresión</span> cuando, entre otros motivos, los datos ya no
              sean necesarios para los fines que fueron recogidos.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Solicitar la limitación</span> del tratamiento de sus datos.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Oponerse</span> al tratamiento de sus datos.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Solicitar la portabilidad</span> de sus datos.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Retirar el consentimiento</span> prestado.
            </li>
          </ul>
          <p className="mb-4 leading-relaxed">
            Estos derechos pueden ejercitarse ante [Nombre de su Empresa de Seguridad] S.L. a través de:
          </p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">Correo postal: [Dirección completa]</li>
            <li className="mb-2">Correo electrónico: [Email de contacto para protección de datos]</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            Asimismo, le informamos que puede presentar una reclamación ante la Agencia Española de Protección de Datos,
            especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, a través de su sitio
            web: www.aepd.es.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            8. Medidas de Seguridad
          </h2>
          <p className="mb-4 leading-relaxed">
            [Nombre de su Empresa de Seguridad] S.L. ha adoptado las medidas de seguridad técnicas y organizativas
            necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento
            o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y
            los riesgos a que están expuestos.
          </p>
          <p className="mb-4 leading-relaxed">Entre otras, se han implementado las siguientes medidas:</p>
          <ul className="list-disc pl-6 mb-4 leading-relaxed">
            <li className="mb-2">Cifrado de comunicaciones entre su navegador y nuestro servidor (SSL/TLS).</li>
            <li className="mb-2">Control de accesos y autenticación de usuarios.</li>
            <li className="mb-2">Copias de seguridad periódicas.</li>
            <li className="mb-2">Actualización de sistemas y software.</li>
            <li className="mb-2">Formación del personal en materia de protección de datos.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            9. Cookies
          </h2>
          <p className="mb-4 leading-relaxed">
            Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación,
            analizar el tráfico y personalizar el contenido. Para más información sobre las cookies que utilizamos y
            cómo gestionarlas, consulte nuestra Política de Cookies.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-900 pl-3">
            10. Modificaciones
          </h2>
          <p className="mb-4 leading-relaxed">
            [Nombre de su Empresa de Seguridad] S.L. se reserva el derecho a modificar la presente Política de
            Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la
            industria. En dichos supuestos, anunciaremos en esta página los cambios introducidos con razonable
            antelación a su puesta en práctica.
          </p>
        </div>

        <div className="text-right italic mt-8 text-gray-600">
          <p>Última actualización: [Fecha de última actualización]</p>
        </div>
      </div>
    </section>
  );
}

