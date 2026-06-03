import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaIndustry,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import api from "../api/axios";

function Marcas() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    cargarMarcas();
  }, []);

  const cargarMarcas = async () => {
    try {
      const response = await api.get("marcas/");
      setMarcas(response.data);
    } catch (error) {
      console.error("Error al cargar marcas:", error);
    }
  };

  const eliminarMarca = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar esta marca?"
    );

    if (!confirmar) return;

    try {
      await api.delete(`marcas/${id}/`);
      cargarMarcas();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">
              <FaIndustry
                size={35}
                className="text-blue-600"
              />

              <h1 className="text-4xl font-bold text-slate-800">
                Gestión de Marcas
              </h1>
            </div>

            <Link
              to="/marcas/nuevo"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg"
            >
              <FaPlus />
              Nueva Marca
            </Link>

          </div>

          {marcas.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-600">
                No existen marcas registradas
              </h2>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {marcas.map((marca) => (
                <div
                  key={marca.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={marca.logo}
                    alt={marca.nombre}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-slate-800">
                      {marca.nombre}
                    </h2>

                    <p className="text-blue-600 font-medium mt-1">
                      {marca.pais}
                    </p>

                    <p className="mt-4 text-gray-600">
                      {marca.descripcion}
                    </p>

                    <div className="flex gap-3 mt-6">

                      <Link
                        to={`/marcas/editar/${marca.id}`}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        <FaEdit />
                        Editar
                      </Link>

                      <button
                        onClick={() =>
                          eliminarMarca(marca.id)
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

export default Marcas;