export const parseDate = (data) => {
  const [dia, mes, ano] = data.split("/");
  return new Date(`${ano}-${mes}-${dia}`);
};

export const daysBetween = (date) => {
  const hoje = new Date();
  const diff = date - hoje;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};