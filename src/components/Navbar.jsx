import { Link } from "react-router-dom";
import {
  FaHome,
  FaCar,
  FaIndustry,
  FaTools
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <FaTools size={28} />
          <h1 className="text-2xl font-bold">
            Sistema Vehicular
          </h1>
        </div>

        <div className="flex gap-8">

          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaHome />
            Inicio
          </Link>

          <Link
            to="/marcas"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaIndustry />
            Marcas
          </Link>

          <Link
            to="/vehiculos"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaCar />
            Vehículos
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;