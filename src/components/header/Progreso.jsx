export default function Progreso({ percentage, label }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex w-20 h-25 sm:h-28 md:h-38 lg:w-32 lg:h-full flex-col items-center rounded-lg bg-gray-300 p-4 shadow-2xl">
      <svg
        width="80"
        height="50"
        viewBox="0 0 100 50"
        className="absolute -top-3 md:top-0"
      >
        {/* Fondo gris del medidor */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeLinecap="round"
        />
        {/* Línea azul del progreso */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#2563EB"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-180 50 50)"
        />
      </svg>
      {/* Número del porcentaje */}
      <span className="z-10 sm:text-2xl font-bold text-blue-600 pt-5 md:pt-13">
        {percentage}%
      </span>
      {/* Texto debajo */}
      <span className="lg:mt-2 text-[12px] sm:text-sm font-medium text-gray-600 text-center">
        {label}
      </span>
    </div>
  );
}
