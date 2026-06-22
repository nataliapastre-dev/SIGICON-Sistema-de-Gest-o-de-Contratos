import { HashRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import Dashboard from "./pages/Dashboard";
import Contratos from "./pages/Contratos";
import ContratoDetalhe from "./pages/ContratoDetalhe";
import Fornecedores from "./pages/Fornecedores";
import FornecedorDetalhe from "./pages/FornecedorDetalhe";
import Indicadores from "./pages/Indicadores";

import PrivateRoute from "./routes/PrivateRoute";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>

        {/* PUBLICO */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* PROTEGIDO COM LAYOUT ÚNICO */}
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contratos" element={<Contratos />} />
            <Route path="/contratos/:id" element={<ContratoDetalhe />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/fornecedores/:id" element={<FornecedorDetalhe />} />
            <Route path="/indicadores" element={<Indicadores />} />
          </Route>
        </Route>

      </Routes>
    </HashRouter>
  );
}