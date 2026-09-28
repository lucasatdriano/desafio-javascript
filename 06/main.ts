
enum Cores {
  AZUL = "Azul",
  ROSA = "Rosa",
  VERDE = "Verde",
}

const mudarCor = (cor: Cores) => () => {
  return `Cor do documento alterada para ${cor}`
}

const alterarParaCorAzul = mudarCor(Cores.AZUL)
const alterarParaCorRosa = mudarCor(Cores.ROSA)

console.log(alterarParaCorAzul())
console.log(alterarParaCorRosa())