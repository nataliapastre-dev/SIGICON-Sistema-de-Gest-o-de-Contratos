import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  // =========================
  // 📄 DADOS BASE (simulação real)
  // =========================
  const contratos = [
    { id: "CTR-001", fornecedorId: 1, status: "atencao", valor: 12500 },
    { id: "CTR-002", fornecedorId: 2, status: "ativo", valor: 8000 },
    { id: "CTR-003", fornecedorId: 3, status: "ativo", valor: 3200 },
    { id: "CTR-004", fornecedorId: 4, status: "vencido", valor: 5000 },
  ];

  const fornecedores = [
    { id: 1, nome: "Let's Rent" },
    { id: 2, nome: "LCN Oxigênio" },
    { id: 3, nome: "Fino Fone" },
    { id: 4, nome: "Panobianco" },
  ];

  // =========================
  // 📊 KPIs DERIVADOS
  // =========================
  const totalContratos = contratos.length;
  const totalFornecedores = fornecedores.length;

  const ativos = contratos.filter((c) => c.status === "ativo").length;
  const atencao = contratos.filter((c) => c.status === "atencao").length;
  const vencidos = contratos.filter((c) => c.status === "vencido").length;

  const valorTotal = contratos.reduce((acc, c) => acc + c.valor, 0);

  const mediaContrato =
    totalContratos > 0 ? valorTotal / totalContratos : 0;

  // =========================
  // 📊 GRÁFICO PIZZA
  // =========================
  const pieData = [
    { name: "Ativos", value: ativos },
    { name: "Atenção", value: atencao },
    { name: "Vencidos", value: vencidos },
  ];

  const COLORS = ["#16a34a", "#f59e0b", "#dc2626"];

  // =========================
  // 📊 GRÁFICO BARRAS
  // =========================
  const contratosPorFornecedor = fornecedores.map((f) => {
    const total = contratos.filter(
      (c) => c.fornecedorId === f.id
    ).length;

    return {
      nome: f.nome,
      contratos: total,
    };
  });

  return (
    <div>

      {/* HEADER */}
      <div className="page-header">
        <h1>📊 Dashboard</h1>
        <p>Painel executivo de contratos</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-auto">

        <div className="kpi-card">
          <div className="kpi-title">Contratos</div>
          <div className="kpi-value">{totalContratos}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Fornecedores</div>
          <div className="kpi-value">{totalFornecedores}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Valor Total</div>
          <div className="kpi-value">
            R$ {valorTotal.toLocaleString("pt-BR")}
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Média por Contrato</div>
          <div className="kpi-value">
            R$ {mediaContrato.toFixed(2)}
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Vencidos</div>
          <div className="kpi-value">{vencidos}</div>
        </div>

      </div>

      <br />

      {/* GRÁFICOS */}
      <div className="grid grid-auto">

        {/* PIE CHART */}
        <div className="card">
          <h3>Status dos Contratos</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="card">
          <h3>Contratos por Fornecedor</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contratosPorFornecedor}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="contratos" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}