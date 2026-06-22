import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("sigecon_user") || "null");
  } catch (error) {
    user = null;
  }

  function logout() {
    localStorage.removeItem("sigecon_user");
    navigate("/login");
  }

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h3>SIGECON</h3>
        <span>Sistema de Gestão de Contratos</span>
      </div>

      <div className="navbar-right">
        <div className="user-info">
          <span>👤 {user?.nome || "Usuário"}</span>
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default Navbar;