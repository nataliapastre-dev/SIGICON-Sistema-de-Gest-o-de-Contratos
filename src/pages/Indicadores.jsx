export default function Indicadores() {
  // =========================
  // 📄 DADOS BASE (simulação global)
  // =========================
  const contratos = [
    { id: "CTR-001", valor: 12500, status: "atencao" },
    { id: "CTR-002", valor: 8000, status: "ativo" },
    { id: "CTR-003", valor: 3200, status: "ativo" },
    { id: "CTR-004", valor: 5000, status: "vencido" },
  ];

  const fornecedores = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  // =========================
  // 📊 KPIs DERIVADOS (cérebro do sistema)
  // =========================
  const totalContratos = contratos.length;
  const totalFornecedores = fornecedores.length;

  const statusCount = contratos.reduce(
    (acc, contrato) => {
      acc[contrato.status] = (acc[contrato.status] || 0) + 1;
      return acc;
    },
    { ativo: 0, atencao: 0, vencido: 0 }
  );

  const valorTotal = contratos.reduce(
    (total, c) => total + c.valor,
    0
  );

  const mediaContrato =
    totalContratos > 0 ? valorTotal / totalContratos : 0;

  // =========================
  // 🎨 CONFIG DE UI (status centralizado)
  // =========================
  const statusConfig = {
    ativo: { label: "Ativos", icon: "✅" },
    atencao: { label: "Em Atenção", icon: "⚠️" },
    vencido: { label: "Vencidos", icon: "🚨" },
  };

  // =========================
  // 📊 INDICADORES (data-driven)
  // =========================
  const indicadores = [
    {
      id: 1,
      titulo: statusConfig.ativo.label,
      valor: statusCount.ativo,
      status: "ativo",
      descricao: "Contratos em vigor",
    },
    {
      id: 2,
      titulo: statusConfig.atencao.label,
      valor: statusCount.atencao,
      status: "atencao",
      descricao: "Próximos do vencimento",
    },
    {
      id: 3,
      titulo: statusConfig.vencido.label,
      valor: statusCount.vencido,
      status: "vencido",
      descricao: "Necessitam renovação",
    },
    {
      id: 4,
      titulo: "Valor Total",
      valor: `R$ ${valorTotal.toLocaleString("pt-BR")}`,
      status: "ativo",
      descricao: "Soma dos contratos",
    },
    {
      id: 5,
      titulo: "Média por Contrato",
      valor: `R$ ${mediaContrato.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`,
      status: "ativo",
      descricao: "Ticket médio",
    },
    {
      id: 6,
      titulo: "Fornecedores",
      valor: totalFornecedores,
      status: "ativo",
      descricao: "Empresas cadastradas",
    },
  ];

  return (
    <div>

      {/* HEADER */}
      <div className="page-header">
        <h2>📈 Indicadores</h2>
        <p>Painel inteligente de performance do sistema</p>
      </div>

      {/* GRID KPIs */}
      <div className="kpi-grid">

        {indicadores.map((i) => (
          <div key={i.id} className="kpi-card">

            {/* HEADER */}
            <div className="kpi-header">
              <span>{i.titulo}</span>

              <span className={`status ${i.status}`}>
                {statusConfig[i.status].icon}
              </span>
            </div>

            {/* VALUE */}
            <div className="kpi-value">
              {i.valor}
            </div>

            {/* DESCRIPTION */}
            <p className="kpi-desc">
              {i.descricao}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}