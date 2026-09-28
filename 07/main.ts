interface Cafe {
  nome: string;
  valor: number;
}

const mockupCafes: Cafe[] = [
  {
    nome: "Cafe A",
    valor: 1.25,
  },
  {
    nome: "Cafe B",
    valor: 1.25,
  },
  {
    nome: "Cafe C",
    valor: 1.25,
  },
]

function resultado(valores: number[]) {
  const valorTotal = valores.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);
  
  return `A conta total é R$ ${valorTotal}`;
}

function ObterTotal(cafes: Cafe[]) {
  const valoresDoCafe = cafes.map((cafe) => cafe.valor)

  const valorPago = resultado(valoresDoCafe)

  return valorPago
}

console.log(ObterTotal(mockupCafes))