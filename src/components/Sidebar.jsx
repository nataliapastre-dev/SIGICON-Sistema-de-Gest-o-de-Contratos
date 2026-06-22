import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/contratos", label: "Contratos", icon: "📄" },
    { path: "/fornecedores", label: "Fornecedores", icon: "🏢" },
    { path: "/indicadores", label: "Indicadores", icon: "📈" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>SIGECON</h2>
        <p>Gestão de Contratos</p>
      </div>

      <nav className="sidebar-nav">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <small>Versão 1.0.0</small>
      </div>
    </aside>
  );
}