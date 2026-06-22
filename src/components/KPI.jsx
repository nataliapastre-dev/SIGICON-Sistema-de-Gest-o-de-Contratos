function KPI({ titulo, valor }) {
  return (
    <div className="card">
      <p className="kpi-label">{titulo}</p>
      <h2 className="kpi-value">{valor}</h2>
    </div>
  );
}

export default KPI;