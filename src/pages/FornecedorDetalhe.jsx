import { useParams, Link } from "react-router-dom";

export default function FornecedorDetalhe() {
  const { id } = useParams();

  // =========================
  // 📄 DADOS (mesmo padrão do sistema)
  // =========================
  const fornecedores = [
    {
      id: 1,
      nome: "Locadora Let's Rent A Car S/A",
      cnpj: "00.873.894/0001-24",
      email: "manutencao@lets.com.br",
      telefone: "(16) 3503-1335",
      cidade: "Araraquara - SP",
      ramo: "Transportes",
    },
    {
      id: 2,
      nome: "LCN Oxigênio Araraquara LTDA",
      cnpj: "14.840.410/0001-55",
      email: "lcngoxigenio@yahoo.com.br",
      telefone: "(16) 99782-6626",
      cidade: "Araraquara - SP",
      ramo: "Gases Industriais",
    },
    {
      id: 3,
      nome: "Fino Fone Ecommerce Ltda",
      cnpj: "34.681.431/0001-82",
      email: "finofone01@gmail.com",
      telefone: "(16) 99767-9206",
      cidade: "Ribeirão Preto - SP",
      ramo: "E-commerce",
    },
    {
      id: 4,
      nome: "Panobianco Academia",
      cnpj: "43.688.697/0001-48",
      email: "antonio_vicentim@hotmail.com",
      telefone: "(19) 97410-1053",
      cidade: "Araraquara - SP",
      ramo: "Academia",
    },
  ];

  const contratos = [
    { id: "CTR-001", fornecedorId: 1, valor: 12500, status: "atencao" },
    { id: "CTR-002", fornecedorId: 2, valor: 8000, status: "ativo" },
    { id: "CTR-003", fornecedorId: 3, valor: 3200, status: "ativo" },
    { id: "CTR-004", fornecedorId: 4, valor: 5000, status: "vencido" },
  ];

  // =========================
  // 🔎 BUSCA FORNECEDOR
  // =========================
  const fornecedor = fornecedores.find(
    (f) => f.id === Number(id)
  );

  // =========================
  // 📄 CONTRATOS DO FORNECEDOR
  // =========================
  const contratosDoFornecedor = contratos.filter(
    (c) => c.fornecedorId === Number(id)
  );

  if (!fornecedor) {
    return (
      <div className="page-header">
        <h2>Fornecedor não encontrado</h2>
        <Link to="/fornecedores">⬅ Voltar</Link>
      </div>
    );
  }

  return (
    <div>

      {/* HEADER */}
      <div className="page-header">
        <h1>🏢 {fornecedor.nome}</h1>
        <p>Detalhes completos do fornecedor</p>
      </div>

      {/* INFO CARD */}
      <div className="card">

        <p><strong>CNPJ:</strong> {fornecedor.cnpj}</p>
        <p><strong>Email:</strong> {fornecedor.email}</p>
        <p><strong>Telefone:</strong> {fornecedor.telefone}</p>
        <p><strong>Cidade:</strong> {fornecedor.cidade}</p>
        <p><strong>Ramo:</strong> {fornecedor.ramo}</p>

      </div>

      {/* CONTRATOS */}
      <div className="page-header" style={{ marginTop: 30 }}>
        <h2>📄 Contratos vinculados</h2>
      </div>

      <div className="grid grid-auto">

        {contratosDoFornecedor.length === 0 ? (
          <p>Sem contratos vinculados</p>
        ) : (
          contratosDoFornecedor.map((c) => (
            <div key={c.id} className="card">

              <h3>{c.id}</h3>

              <p>
                <strong>Valor:</strong> R$ {c.valor.toLocaleString("pt-BR")}
              </p>

              <p>
                <strong>Status:</strong> {c.status}
              </p>

            </div>
          ))
        )}

      </div>

      {/* VOLTAR */}
      <div style={{ marginTop: 20 }}>
        <Link to="/fornecedores">⬅ Voltar para lista</Link>
      </div>

    </div>
  );
}