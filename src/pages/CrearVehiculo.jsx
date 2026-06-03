import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaSave,
  FaArrowLeft,
  FaCar,
  FaImage
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import api from "../api/axios";

function CrearVehiculo() {
  const navigate = useNavigate();

  const [marcas, setMarcas] = useState([]);

  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    cargarMarcas();
  }, []);

  const cargarMarcas = async () => {
    try {
      const res = await api.get("marcas/");
      setMarcas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const guardarVehiculo = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("modelo", modelo);
    formData.append("anio", anio);
    formData.append("placa", placa);
    formData.append("marca", marca);
    formData.append("imagen", imagen);

    try {
      await api.post("vehiculos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Vehículo registrado correctamente");
      navigate("/vehiculos");
    } catch (error) {
      console.error(error);
      alert("Error al registrar vehículo");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">

        <div className="max-w-3xl mx-auto">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-4xl font-bold text-slate-800 flex items-center gap-3">
              <FaCar />
              Nuevo Vehículo
            </h1>

            <Link
              to="/vehiculos"
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <FaArrowLeft />
              Volver
            </Link>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <form
              onSubmit={guardarVehiculo}
              className="space-y-5"
            >

              <div>
                <label className="block mb-2 font-semibold">
                  Modelo
                </label>

                <input
                  type="text"
                  placeholder="Ejemplo: Corolla"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Año
                </label>

                <input
                  type="number"
                  placeholder="2025"
                  value={anio}
                  onChange={(e) => setAnio(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Placa
                </label>

                <input
                  type="text"
                  placeholder="ABC-123"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Marca
                </label>

                <select
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">
                    Seleccione una marca
                  </option>

                  {marcas.map((m) => (
                    <option
                      key={m.id}
                      value={m.id}
                    >
                      {m.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Imagen
                </label>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center">

                  <FaImage
                    size={40}
                    className="mx-auto mb-3 text-gray-400"
                  />

                  <input
                    type="file"
                    onChange={(e) =>
                      setImagen(e.target.files[0])
                    }
                    className="w-full"
                    required
                  />

                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
              >
                <FaSave />
                Guardar Vehículo
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default CrearVehiculo;