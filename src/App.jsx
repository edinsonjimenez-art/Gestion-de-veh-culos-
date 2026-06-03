import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principales
import Home from "./pages/Home";
import Marcas from "./pages/Marcas";
import Vehiculos from "./pages/Vehiculos";

// CRUD Marcas
import CrearMarca from "./pages/CrearMarca";
import EditarMarca from "./pages/EditarMarca";

// CRUD Vehículos
import CrearVehiculo from "./pages/CrearVehiculo";
import EditarVehiculo from "./pages/EditarVehiculo";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route path="/" element={<Home />} />

        {/* Marcas */}
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/marcas/nuevo" element={<CrearMarca />} />
        <Route path="/marcas/editar/:id" element={<EditarMarca />} />

        {/* Vehículos */}
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/vehiculos/nuevo" element={<CrearVehiculo />} />
        <Route path="/vehiculos/editar/:id" element={<EditarVehiculo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;