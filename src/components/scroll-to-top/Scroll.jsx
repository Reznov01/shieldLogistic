import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 10) {
      // Reducido de 100 a 10 para que aparezca antes
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-5 rounded-full bg-gray-800 text-blue-400 shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-8 w-8" />
        </button>
      )}
    </>
  );
}
