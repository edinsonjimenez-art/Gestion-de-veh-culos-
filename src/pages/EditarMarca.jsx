import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaSave, FaArrowLeft, FaImage } from "react-icons/fa";
import Navbar from "../components/Navbar";
import api from "../api/axios";

function EditarMarca() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    obtenerMarca();
  }, []);

  const obtenerMarca = async () => {
    try {
      const response = await api.get(`marcas/${id}/`);

      setNombre(response.data.nombre);
      setPais(response.data.pais);
      setDescripcion(response.data.descripcion);
    } catch (error) {
      console.error("Error al obtener marca:", error);
    }
  };

  const actualizarMarca = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("pais", pais);
    formData.append("descripcion", descripcion);

    if (logo) {
      formData.append("logo", logo);
    }

    try {
      await api.put(`marcas/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Marca actualizada correctamente");
      navigate("/marcas");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">

        <div className="max-w-3xl mx-auto">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-4xl font-bold text-slate-800">
              Editar Marca
            </h1>

            <Link
              to="/marcas"
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <FaArrowLeft />
              Volver
            </Link>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <form
              onSubmit={actualizarMarca}
              className="space-y-5"
            >

              <div>
                <label className="block mb-2 font-semibold">
                  Nombre
                </label>

                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  País
                </label>

                <input
                  type="text"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Descripción
                </label>

                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Logo
                </label>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center">

                  <FaImage
                    size={40}
                    className="mx-auto mb-3 text-gray-400"
                  />

                  <input
                    type="file"
                    onChange={(e) => setLogo(e.target.files[0])}
                    className="w-full"
                  />

                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                <FaSave />
                Actualizar Marca
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default EditarMarca;