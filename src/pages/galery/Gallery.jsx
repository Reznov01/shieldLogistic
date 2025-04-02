import { useState, useEffect } from "react";
import { Shield, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { motion } from "motion/react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  // Datos de ejemplo para la galería
  const galleryImages = [
    {
      id: 1,
      title: "Capacitación de Guardias 2023",
      description:
        "Sesión de entrenamiento especializado para nuestro equipo de seguridad.",
      category: "capacitacion",
      date: "Enero 2023",
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
    },
    {
      id: 2,
      title: "Nuevos Vehículos de Patrulla",
      description:
        "Incorporación de vehículos equipados con la última tecnología.",
      category: "equipamiento",
      date: "Febrero 2023",
      url: "https://images.unsplash.com/photo-1672644114747-123a7d168d41?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
    },
    {
      id: 3,
      title: "Evento Corporativo Anual",
      description:
        "Nuestro equipo brindando seguridad en el evento corporativo más importante del año.",
      category: "eventos",
      date: "Marzo 2023",
      url: "https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false,
    },
    {
      id: 4,
      title: "Certificación ISO 9001",
      description:
        "Recibiendo la certificación internacional que avala nuestros procesos de calidad.",
      category: "reconocimientos",
      date: "Abril 2023",
      url: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
    },
    {
      id: 5,
      title: "Servicio de Limpieza Corporativa",
      description:
        "Nuestro equipo de limpieza en acción en las oficinas de un cliente importante.",
      category: "servicios",
      date: "Mayo 2023",
      url: "https://source.unsplash.com/800x600/?cleaning,office",
      featured: false,
    },
    {
      id: 6,
      title: "Capacitación en Primeros Auxilios",
      description:
        "Guardias de seguridad recibiendo entrenamiento en técnicas de primeros auxilios.",
      category: "capacitacion",
      date: "Junio 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 7,
      title: "Vigilancia en Centro Comercial",
      description:
        "Servicio de seguridad en uno de los centros comerciales más concurridos de la ciudad.",
      category: "servicios",
      date: "Julio 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 8,
      title: "Reconocimiento a la Excelencia",
      description:
        "Premio otorgado por la Asociación de Empresas de Seguridad.",
      category: "reconocimientos",
      date: "Agosto 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: true,
    },
    {
      id: 9,
      title: "Feria de Seguridad 2023",
      description:
        "Participación en la feria más importante del sector de seguridad privada.",
      category: "eventos",
      date: "Septiembre 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 10,
      title: "Nuevos Equipos de Comunicación",
      description:
        "Implementación de sistemas de comunicación de última generación.",
      category: "equipamiento",
      date: "Octubre 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 11,
      title: "Servicio de Limpieza Residencial",
      description:
        "Equipo realizando limpieza profunda en un complejo residencial.",
      category: "servicios",
      date: "Noviembre 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 12,
      title: "Cena de Fin de Año",
      description:
        "Celebración con todo nuestro equipo por los logros alcanzados durante el año.",
      category: "eventos",
      date: "Diciembre 2023",
      url: "/placeholder.svg?height=600&width=800",
      featured: true,
    },
  ];

  const categories = [
    { id: "all", name: "Todos" },
    { id: "capacitacion", name: "Capacitación" },
    { id: "equipamiento", name: "Equipamiento" },
    { id: "eventos", name: "Eventos" },
    { id: "reconocimientos", name: "Reconocimientos" },
    { id: "servicios", name: "Servicios" },
  ];

  // Filtrar imágenes basado en la categoría y término de búsqueda
  useEffect(() => {
    let result = galleryImages;

    if (activeFilter !== "all") {
      result = result.filter((image) => image.category === activeFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (image) =>
          image.title.toLowerCase().includes(term) ||
          image.description.toLowerCase().includes(term)
      );
    }

    setFilteredImages(result);
  }, [activeFilter, searchTerm]);

  // Abrir imagen en modal
  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navegar a la imagen anterior
  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Navegar a la imagen siguiente
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Manejar teclas para navegación
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <section className="bg-gray-50 py-16 my-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galería de Imágenes {new Date().getFullYear()}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revive los momentos más destacados de nuestra empresa durante el
            año. Desde capacitaciones y eventos hasta reconocimientos y nuevos
            equipamientos.
          </p>
        </div>

        {/* Featured Images Carousel */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Imágenes Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter((img) => img.featured)
              .map((image, index) => (
                <motion.div
                  key={image.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => openImage(image, galleryImages.indexOf(image))}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-blue-700 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                      Destacado
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{image.date}</p>
                    <p className="text-gray-700">{image.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar imágenes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openImage(image, index)}
              >
                <div className="relative h-48">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-white font-medium text-sm truncate">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron imágenes que coincidan con tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                Ver todas las imágenes
              </button>
            </div>
          )}
        </div>

        {/* Image Modal/Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>

              <div className="bg-white p-6 mt-4 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {selectedImage.date}
                </p>
                <p className="text-gray-700">{selectedImage.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                    {categories.find((cat) => cat.id === selectedImage.category)
                      ?.name || selectedImage.category}
                  </span>
                  <span className="text-gray-400 text-sm ml-auto">
                    Imagen {currentIndex + 1} de {filteredImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-blue-700 text-white rounded-lg shadow-md p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            ¿Quieres ver más de nuestro trabajo?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Síguenos en nuestras redes sociales para estar al tanto de nuestras
            actividades y servicios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
