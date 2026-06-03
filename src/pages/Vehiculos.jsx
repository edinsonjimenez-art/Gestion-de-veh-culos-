import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaCar,
  FaCalendarAlt,
  FaIdCard,
  FaIndustry,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import api from "../api/axios";

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    cargarVehiculos();
  }, []);

  const cargarVehiculos = async () => {
    try {
      const res = await api.get("vehiculos/");
      setVehiculos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarVehiculo = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este vehículo?"
    );

    if (!confirmar) return;

    try {
      await api.delete(`vehiculos/${id}/`);
      cargarVehiculos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">
              <FaCar
                size={35}
                className="text-green-600"
              />

              <h1 className="text-4xl font-bold text-slate-800">
                Gestión de Vehículos
              </h1>
            </div>

            <Link
              to="/vehiculos/nuevo"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg"
            >
              <FaPlus />
              Nuevo Vehículo
            </Link>

          </div>

          {vehiculos.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-600">
                No existen vehículos registrados
              </h2>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {vehiculos.map((vehiculo) => (

                <div
                  key={vehiculo.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={vehiculo.imagen}
                    alt={vehiculo.modelo}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                      {vehiculo.modelo}
                    </h2>

                    <div className="space-y-2">

                      <p className="flex items-center gap-2 text-gray-700">
                        <FaCalendarAlt className="text-blue-600" />
                        <strong>Año:</strong> {vehiculo.anio}
                      </p>

                      <p className="flex items-center gap-2 text-gray-700">
                        <FaIdCard className="text-orange-600" />
                        <strong>Placa:</strong> {vehiculo.placa}
                      </p>

                      <p className="flex items-center gap-2 text-gray-700">
                        <FaIndustry className="text-purple-600" />
                        <strong>Marca:</strong> {vehiculo.marca_nombre}
                      </p>

                    </div>

                    <div className="flex gap-3 mt-6">

                      <Link
                        to={`/vehiculos/editar/${vehiculo.id}`}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        <FaEdit />
                        Editar
                      </Link>

                      <button
                        onClick={() =>
                          eliminarVehiculo(vehiculo.id)
                        }
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        <FaTrash />
                        Eliminar
                      </button>

                    </div>

                  </div>

                </div>

              ))}
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Vehiculos;