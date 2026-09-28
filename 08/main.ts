interface FastFood {
  nome: string;
  cardapio: string[];
}

const mockupFastFoods: FastFood[] = [
  {
    nome: "Massa dos Reis",
    cardapio: ["Lasanha", "Calzone", "Macarronada", "Pizza"]
  },
  {
    nome: "Restaurante da Rosinha",
    cardapio: ["Bife Acebolado", "Strogonoff", "Macarronada"]
  },
  {
    nome: "GuiBas",
    cardapio: ["Pastel", "Coxinha", "Empada", "Calzone"]
  },
  {
    nome: "GrillLar",
    cardapio: ["Hambuguer", "Batata Frita", "Nugget"]
  }
]

function obterCardapios(fastFoods: FastFood[]) {  
  const cardapios = [...new Set(fastFoods.flatMap((fastFood) => fastFood.cardapio))]

  return cardapios
}

console.log(obterCardapios(mockupFastFoods))