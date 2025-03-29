import { Link } from "react-router-dom";

import { Shield, AlertTriangle, Home } from "lucide-react";

export default function () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="h-24 w-24 text-blue-500" />
            <AlertTriangle className="h-12 w-12 text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          Área Restringida
        </h2>

        <p className="text-gray-300 mb-8">
          Lo sentimos, la página que está buscando no existe o no tiene
          autorización para acceder a ella.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
          <p className="text-gray-400 text-sm">
            Esta área está bajo vigilancia. Todas las actividades son
            monitoreadas y registradas para su seguridad.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          <Home className="h-5 w-5" />
          <span>Volver a la página principal</span>
        </Link>
      </div>
    </div>
  );
}
