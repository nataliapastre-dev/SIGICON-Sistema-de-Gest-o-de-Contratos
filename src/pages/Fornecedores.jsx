import { Link } from "react-router-dom";

export default function Fornecedores() {
  const fornecedores = [
    {
      id: 1,
      nome: "Locadora Let's Rent A Car S/A",
      cnpj: "00.873.894/0001-24",
      email: "manutencao@lets.com.br",
      telefone: "(16) 3503-1335",
      cidade: "Araraquara - SP",
      endereco:
        "Via de Acesso Eng. Ivo Najm, 3800 - 2º Distrito Industrial",
      capitalSocial: "R$ 578.986.461,00",
      ramo: "Transportes",
      status: "ativo",
      contratos: 10,
    },
    {
      id: 2,
      nome: "LCN Oxigênio Araraquara LTDA",
      cnpj: "14.840.410/0001-55",
      email: "lcngoxigenio@yahoo.com.br",
      telefone: "(16) 99782-6626",
      cidade: "Araraquara - SP",
      endereco: "Rua Professora Ergilia Micelli, 1141 - Jardim Regina",
      capitalSocial: "R$ 50.000,00",
      ramo: "Gases Industriais",
      status: "ativo",
      contratos: 5,
    },
    {
      id: 3,
      nome: "Fino Fone Ecommerce Ltda",
      cnpj: "34.681.431/0001-82",
      email: "finofone01@gmail.com",
      telefone: "(16) 99767-9206",
      cidade: "Ribeirão Preto - SP",
      endereco: "Rua Comercial",
      capitalSocial: "R$ 20.000,00",
      ramo: "E-commerce",
      status: "ativo",
      contratos: 3,
    },
    {
      id: 4,
      nome: "Panobianco Academia",
      cnpj: "43.688.697/0001-48",
      email: "antonio_vicentim@hotmail.com",
      telefone: "(19) 97410-1053",
      cidade: "Araraquara - SP",
      endereco: "Rua Maurício Onofre Cardilli, 81",
      capitalSocial: "R$ 60.000,00",
      ramo: "Academia",
      status: "ativo",
      contratos: 2,
    },
  ];

  // =========================
  // 📊 KPIs 100% dinâmicos
  // =========================
  const totalFornecedores = fornecedores.length;

  const fornecedoresAtivos = fornecedores.filter(
    (f) => f.status === "ativo"
  ).length;

  const fornecedoresInativos = fornecedores.filter(
    (f) => f.status !== "ativo"
  ).length;

  const totalContratos = fornecedores.reduce(
    (acc, f) => acc + f.contratos,
    0
  );

  const mediaContratos =
    totalFornecedores > 0
      ? (totalContratos / totalFornecedores).toFixed(1)
      : 0;

  return (
    <div className="pagina">
      {/* HEADER */}
      <div className="page-header">
        <h1>🏢 Fornecedores</h1>
        <p>Cadastro e gestão de fornecedores</p>
      </div>

      {/* KPIs */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <h2>{totalFornecedores}</h2>
          <p>Fornecedores</p>
        </div>

        <div className="kpi-card">
          <h2>{fornecedoresAtivos}</h2>
          <p>Ativos</p>
        </div>

        <div className="kpi-card">
          <h2>{totalContratos}</h2>
          <p>Total de Contratos</p>
        </div>

        <div className="kpi-card">
          <h2>{mediaContratos}</h2>
          <p>Média por Fornecedor</p>
        </div>
      </div>

      {/* GRID DE FORNECEDORES */}
      <div className="grid">
        {fornecedores.map((f) => (
          <Link
            to={`/fornecedores/${f.id}`}
            key={f.id}
            className="card fornecedor-card"
          >
            {/* TOPO */}
            <div className="fornecedor-topo">
              <h3>{f.nome}</h3>

              <span className={`status ${f.status}`}>
                {f.status === "ativo" ? "✅ Ativo" : "🚫 Inativo"}
              </span>
            </div>

            {/* INFO */}
            <div className="fornecedor-info">
              <p>
                <strong>CNPJ:</strong> {f.cnpj}
              </p>

              <p>
                <strong>Email:</strong> {f.email}
              </p>

              <p>
                <strong>Telefone:</strong> {f.telefone}
              </p>

              <p>
                <strong>Cidade:</strong> {f.cidade}
              </p>

              <p>
                <strong>Ramo:</strong> {f.ramo}
              </p>

              <p>
                <strong>Capital Social:</strong> {f.capitalSocial}
              </p>

              <p>
                <strong>Endereço:</strong> {f.endereco}
              </p>
            </div>

            {/* FOOTER */}
            <div className="fornecedor-footer">
              <span className="badge-contratos">
                📄 {f.contratos} contratos
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}