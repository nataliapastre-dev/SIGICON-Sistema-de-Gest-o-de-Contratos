import { Link, useParams } from "react-router-dom";
import { contratos, fornecedores } from "../data/database";

export default function ContratoDetalhe() {
  const { id } = useParams();

  const contrato = contratos.find((c) => c.id === id);

  if (!contrato) {
    return (
      <div className="page-header">
        <h2>❌ Contrato não encontrado</h2>
        <Link to="/contratos">⬅ Voltar</Link>
      </div>
    );
  }

  const fornecedor = fornecedores.find(
    (f) => f.id === contrato.fornecedorId
  );

  const diasRestantes = () => {
    const hoje = new Date();
    const venc = new Date(contrato.vencimento);
    return Math.ceil((venc - hoje) / (1000 * 60 * 60 * 24));
  };

  const statusIcon = {
    ativo: "✅",
    atencao: "⚠️",
    vencido: "🚨",
  };

  return (
    <div>

      <div className="page-header">
        <h1>📄 Contrato {contrato.id}</h1>
        <p>{contrato.descricao}</p>
      </div>

      {/* KPIs nível corporativo */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <h2>{statusIcon[contrato.status]}</h2>
          <p>Status</p>
        </div>

        <div className="kpi-card">
          <h2>R$ {contrato.valor.toLocaleString("pt-BR")}</h2>
          <p>Valor Total</p>
        </div>

        <div className="kpi-card">
          <h2>{diasRestantes()}</h2>
          <p>Dias Restantes</p>
        </div>

        <div className="kpi-card">
          <h2>{contrato.inicio}</h2>
          <p>Início</p>
        </div>

        <div className="kpi-card">
          <h2>{contrato.vencimento}</h2>
          <p>Vencimento</p>
        </div>

      </div>

      {/* INFO */}
      <div className="card">

        <h3>🏢 Fornecedor</h3>
        <p><strong>Nome:</strong> {fornecedor?.nome}</p>
        <p><strong>CNPJ:</strong> {fornecedor?.cnpj}</p>

        <br />

        <h3>📊 Análise Corporativa</h3>
        <p>
          Contrato monitorado pelo SIGECON com controle financeiro,
          risco operacional e acompanhamento de vencimento automatizado.
        </p>

      </div>

      {/* TIMELINE PROFISSIONAL */}
      <div className="card" style={{ marginTop: 20 }}>
        <h3>📍 Ciclo do Contrato</h3>

        <ul style={{ lineHeight: "28px" }}>
          <li>🟢 Assinado: {contrato.inicio}</li>
          <li>🟡 Em execução</li>
          <li>🔴 Vencimento: {contrato.vencimento}</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/contratos" className="btn btn-primary">
          ⬅ Voltar
        </Link>
      </div>

    </div>
  );
}