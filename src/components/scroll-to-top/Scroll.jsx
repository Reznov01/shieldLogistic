import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  // Mostrar u ocultar el botón según el desplazamiento
  const toggleVisibility = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Mostrar botón si el scroll es mayor a 10px
    setIsVisible(scrollY > 10);

    // Ocultar el botón si el usuario está cerca del final de la página
    setIsNearBottom(scrollY + windowHeight >= documentHeight - 550);
  };

  // Agregar y limpiar el event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Función para hacer scroll hasta arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && !isNearBottom && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-5 rounded-full bg-gray-800 text-blue-400 shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
