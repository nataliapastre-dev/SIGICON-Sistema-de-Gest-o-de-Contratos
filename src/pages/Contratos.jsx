import { Link } from "react-router-dom";

export default function Contratos() {
  const contratos = [
    {
      id: "CTR-001",
      fornecedorId: 1,
      valor: 12500,
      inicio: "01/01/2026",
      vencimento: "15/08/2026",
      status: "atencao",
    },
    {
      id: "CTR-002",
      fornecedorId: 2,
      valor: 8000,
      inicio: "10/02/2026",
      vencimento: "10/02/2027",
      status: "ativo",
    },
    {
      id: "CTR-003",
      fornecedorId: 3,
      valor: 3200,
      inicio: "15/03/2026",
      vencimento: "15/03/2027",
      status: "ativo",
    },
    {
      id: "CTR-004",
      fornecedorId: 4,
      valor: 5000,
      inicio: "28/09/2021",
      vencimento: "28/09/2026",
      status: "vencido",
    },
  ];

  const fornecedores = {
    1: "Locadora Let's Rent A Car S/A",
    2: "LCN Oxigênio Araraquara LTDA",
    3: "Fino Fone Ecommerce Ltda",
    4: "Panobianco Academia",
  };

  const statusLabel = {
    ativo: "Ativo",
    atencao: "Em Atenção",
    vencido: "Vencido",
  };

  const statusIcon = {
    ativo: "✅",
    atencao: "⚠️",
    vencido: "🚨",
  };

  // =========================
  // 📊 KPIs DERIVADOS
  // =========================
  const totalContratos = contratos.length;

  const contratosAtivos = contratos.filter(
    (c) => c.status === "ativo"
  ).length;

  const contratosAtencao = contratos.filter(
    (c) => c.status === "atencao"
  ).length;

  const contratosVencidos = contratos.filter(
    (c) => c.status === "vencido"
  ).length;

  const valorTotal = contratos.reduce(
    (acc, c) => acc + c.valor,
    0
  );

  return (
    <div className="pagina-contratos">

      {/* HEADER */}
      <div className="page-header">
        <h1>📄 Gestão de Contratos</h1>
        <p>Acompanhamento inteligente dos contratos</p>
      </div>

      {/* KPIs */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <h2>{totalContratos}</h2>
          <p>Total de Contratos</p>
        </div>

        <div className="kpi-card">
          <h2>{contratosAtivos}</h2>
          <p>Ativos</p>
        </div>

        <div className="kpi-card">
          <h2>{contratosAtencao}</h2>
          <p>Em Atenção</p>
        </div>

        <div className="kpi-card">
          <h2>{contratosVencidos}</h2>
          <p>Vencidos</p>
        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-auto">

        {contratos.map((c) => (
          <Link
            key={c.id}
            to={`/contratos/${c.id}`}
            className="card contrato-card"
          >

            {/* TOPO */}
            <div className="contrato-topo">
              <h3>{c.id}</h3>

              <span className={`status ${c.status}`}>
                {statusIcon[c.status]} {statusLabel[c.status]}
              </span>
            </div>

            {/* FORNECEDOR (ID RELACIONADO) */}
            <h4>{fornecedores[c.fornecedorId]}</h4>

            {/* VALOR */}
            <div className="valor-contrato">
              💰 R$ {c.valor.toLocaleString("pt-BR")}
            </div>

            {/* DATAS */}
            <div className="datas">
              <p>
                <strong>Início:</strong>
                <br />
                {c.inicio}
              </p>

              <p>
                <strong>Vencimento:</strong>
                <br />
                {c.vencimento}
              </p>
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}