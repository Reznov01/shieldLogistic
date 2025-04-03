"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ApplicationForm({ positions }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    setFormData((prev) => ({ ...prev, position: e.target.value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Hemos recibido tu solicitud. Te contactaremos pronto.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
        termsAccepted: false,
      });
    } catch (error) {
      alert("Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block font-medium">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              className="w-full border p-2 rounded-md"
              placeholder="Tu nombre completo"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border p-2 rounded-md"
              placeholder="tu@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block font-medium">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full border p-2 rounded-md"
              placeholder="Tu número de teléfono"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="position" className="block font-medium">
              Posición de interés
            </label>
            <select
              id="position"
              name="position"
              className="w-full border p-2 rounded-md cursor-pointer"
              value={formData.position}
              onChange={handleSelectChange}
              required
            >
              <option value="">Selecciona una posición</option>
              {positions.map((position, index) => (
                <option key={index} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="experience" className="block font-medium">
            Experiencia relevante
          </label>
          <textarea
            id="experience"
            name="experience"
            className="w-full border p-2 rounded-md"
            placeholder="Describe tu experiencia previa en seguridad"
            rows={3}
            required
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">
            Mensaje adicional (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border p-2 rounded-md"
            placeholder="Información adicional que quieras compartir"
            rows={3}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terms" className="text-sm">
            Acepto los <Link to="/terminos-condiciones" className="text-blue-500"> términos y condiciones </Link> y autorizo el tratamiento de mis
            datos personales
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </button>
      </form>
    </div>
  );
}
