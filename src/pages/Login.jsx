import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // =========================
  // 🔐 CRIA ADMIN AUTOMÁTICO
  // =========================
  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (!usuarios || usuarios.length === 0) {
      localStorage.setItem(
        "usuarios",
        JSON.stringify([
          {
            id: 1,
            nome: "Administrador",
            email: "admin@sigecon.com",
            senha: "123456",
            role: "admin",
          },
        ])
      );
    }
  }, []);

  // =========================
  // LOGIN
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

      const user = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (!user) {
        alert("❌ Email ou senha inválidos");
        setLoading(false);
        return;
      }

      // salva sessão ativa
      localStorage.setItem(
        "sigecon_user",
        JSON.stringify(user)
      );

      setLoading(false);

      // redireciona para dashboard
      navigate("/");
    }, 600);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <h1>SIGECON</h1>
          <p>Sistema de Gestão de Contratos</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <p style={{ marginTop: "12px", fontSize: "12px" }}>
            Usuário teste: <b>admin@sigecon.com</b><br />
            Senha: <b>123456</b>
          </p>

        </form>

      </div>
    </div>
  );
}