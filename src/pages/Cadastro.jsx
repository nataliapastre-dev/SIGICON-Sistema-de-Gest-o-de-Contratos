import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmar) {
      alert("❌ As senhas não coincidem");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

      // verifica se email já existe
      const existe = usuarios.find(
        (u) => u.email === email
      );

      if (existe) {
        alert("❌ Este e-mail já está cadastrado");
        setLoading(false);
        return;
      }

      const novoUsuario = {
        id: Date.now(),
        nome,
        email,
        senha,
        role: "user",
      };

      usuarios.push(novoUsuario);

      localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
      );

      // login automático após cadastro
      localStorage.setItem(
        "sigecon_user",
        JSON.stringify(novoUsuario)
      );

      setLoading(false);

      // vai para dashboard
      navigate("/");
    }, 600);
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h1>SIGECON</h1>
          <p>Criar nova conta</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Repita a senha"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Criando conta..." : "Criar conta"}
          </button>

          <p style={{ marginTop: "12px", fontSize: "12px" }}>
            Já tem conta?{" "}
            <a href="#/login">Fazer login</a>
          </p>

        </form>

      </div>
    </div>
  );
}