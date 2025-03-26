import React, { useEffect, useState } from "react";
import parallax from "../../assets/img/parallax.webp";

export default function Parallax() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY * 0.8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative h-[60vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${parallax})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 p-8 text-white bg-[#302e2e8d] flex items-center flex-col justify-center h-full lg:w-1/2 2xl:w-2/5">
        <h1 className="text-3xl font-bold 2xl:w-[35ch]">
          «Ganar cien veces en cien batallas no es el apogeo de la habilidad.
          Someter al enemigo sin pelear es el apogeo de la habilidad.»
        </h1>
        <p className="mt-4">— Sun Tzu</p>
      </div>
    </div>
  );
}
