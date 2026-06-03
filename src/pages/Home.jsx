import Navbar from "../components/Navbar";
import { FaIndustry, FaCar } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-10">

        <h1 className="text-5xl font-bold text-slate-800">
          Sistema de Gestión Vehicular
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Administración de marcas y vehículos.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <FaIndustry
              size={50}
              className="mb-4 text-blue-600"
            />

            <h2 className="text-2xl font-bold">
              Marcas
            </h2>

            <p className="mt-3 text-gray-600">
              Gestión de fabricantes automotrices.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <FaCar
              size={50}
              className="mb-4 text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Vehículos
            </h2>

            <p className="mt-3 text-gray-600">
              Gestión completa de vehículos.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;